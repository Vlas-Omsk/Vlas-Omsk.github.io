<template>
  <div id="app" class="app" ref>
    <NavBar
      :isLoading="isLoading"
      :isInteractiveBackgroundEnabled="isInteractiveBackgroundEnabled"
      :currentSection="currentSection"
      :isHamburgerOpened="isHamburgerOpened"
      @hamburgerStateChanged="isHamburgerOpened = $event; updateThemeColor();"
      @toggleInteractiveBackground="isInteractiveBackgroundEnabled = !isInteractiveBackgroundEnabled"
    />
    <Background
      :isLoading="isLoading"
      :isLoadingAnimationOver="isLoadingAnimationOver"
      :isInteractiveBackgroundEnabled="isInteractiveBackgroundEnabled"
    />
    <div ref="sections" class="sections">
      <Projects :projects="projects" :isLoading="isProjectsLoading" />
    </div>
    <div class="plug" :class="{ 'plug-unloading': isUnloading }"></div>
  </div>
</template>

<script>
import Background from "@/components/Background";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ScrollHandler from "@/core/ScrollHandler.js";
import GithubApi from "@/core/GithubApi.js";

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (pattern, replace) {
    let value = this;
    while (value.indexOf(pattern) != -1)
      value = value.replace(pattern, replace);
    return value;
  };
}

const theme_color = document.getElementById("theme_color");

export default {
  name: "App",
  components: {
    Background,
    NavBar,
    Projects,
  },
  data() {
    return {
      projects: [],
      isLoading: true,
      isUnloading: false,
      isLoadingAnimationOver: false,
      useStartAnimation: true,
      showdownConverter: null,
      userName: "Vlas-Omsk",
      isProjectsLoading: false,
      isInteractiveBackgroundEnabled: true,
      
      isHamburgerOpened: false,
      currentSection: "home"
    };
  },
  methods: {
    windowLoadHandler() {
      if (this.useStartAnimation)
        setTimeout(() => {
          this.isLoading = false;
          setTimeout(() => {
            document.body.parentElement.style.overflowY = "auto";
            this.$refs.sections.style.top = 0;
            setTimeout(ScrollHandler.UpdateElements, 100);
            setTimeout(() => (this.isLoadingAnimationOver = true), 1200);
          }, 1000);
        }, 1000);
      else {
        this.isLoading = false;
        document.body.parentElement.style.overflowY = "auto";
        this.$refs.sections.style.top = 0;
        setTimeout(ScrollHandler.UpdateElements, 100);
        this.isLoadingAnimationOver = true;
      }
    },
    windowBeforeUnloadHandler() {
      this.isUnloading = true;
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    // prettier-ignore
    async loadProjects() {
      (await GithubApi.GetRepos(this.userName)).map(async (repo, _, repos) => {
        const cfg = {
          date: new Date(repo.pushed_at),
          url: repo.html_url,
          title: repo.name,
          description: "$default"
        };
        let isConfigPresented = false, isReadmePresented = false;
        const json = await GithubApi.GetRepoFiles(repo);
        json.tree.map((entry) => {
          if (entry.type == "blob")
            switch (entry.path) {
              case "website-config.json":
                isConfigPresented = true;
                break;
              case "README.md":
                isReadmePresented = true;
                break;
            }
        });
        if (isConfigPresented) {
          let data = await GithubApi.GetFileContent(repo, "website-config.json")
          data = JSON.parse(data)
          cfg.show = data.show
          if (cfg.show == false)
            return;
          cfg.url = data.home_url.replace(/\$default/gi, repo.html_url);
          cfg.title = data.title.replace(/\$default/gi, repo.name);
          cfg.description = data.content_html;
          cfg.backgroundUrl = data.image_url.replace(/\$default/gi, "/project-default.jpg");
        }
        if (cfg.show != false) {
          if (/\$default/gi.test(cfg.description)) {
            if (isReadmePresented) {
              let data = await GithubApi.GetFileContent(repo, "README.md")
              data = data.replace(/<!--DontShowOnWebsite #begin-->((.|\n)*?)<!--DontShowOnWebsite #end-->/g, "");
              cfg.description = cfg.description.replace(/\$default/gi, this.showdownConverter.makeHtml(data))
            } else {
              cfg.description = cfg.description.replace(/\$default/gi, "")
            }
          }
          let inserted = false;
          for (let i = 0; i < this.projects.length; i++)
            if (this.projects[i].date < cfg.date) {
              this.projects.splice(i, 0, cfg);
              inserted = true;
              break;
            }
          if (!inserted)
            this.projects.push(cfg);
          if (this.projects.length == repos.length)
            this.isProjectsLoading = false
        }
      })
    },
    updateThemeColor(delay) {
      let color = "#f5f5f5";
      if (this.currentSection == "home" ||
        this.isHamburgerOpened == true)
        color = "#1c1c1c";
      
      if (theme_color.content != color) {
        if (delay)
          setTimeout(() => (theme_color.content = color), delay);
        else
          theme_color.content = color;
      }
    }
  },
  created() {
    this.showdownConverter = new showdown.Converter();
  },
  mounted() {
    ScrollHandler.AddEnterCallback("home", () => { this.currentSection = "home"; this.updateThemeColor(580); });
    ScrollHandler.AddEnterCallback("projects", () => { this.currentSection = "projects"; this.updateThemeColor(); });

    window.addEventListener("load", this.windowLoadHandler);
    window.addEventListener("beforeunload", this.windowBeforeUnloadHandler);
    if (this.useStartAnimation) {
      let elemTop = this.$refs.sections.getBoundingClientRect().top;
      if (elemTop < window.innerHeight)
        this.$refs.sections.style.top = window.innerHeight - elemTop + 1 + "px";
    }
    this.loadProjects();

    ScrollHandler.StartListen();
  },
  destroyed() {
    window.removeEventListener("load", this.windowLoadHandler);
    window.removeEventListener("beforeunload", this.windowBeforeUnloadHandler);

    ScrollHandler.StopListen();
  },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  min-width: 300px;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: black;
}

img,
svg {
  display: block;
}

code {
  white-space: pre-wrap;
}
</style>

<style lang="scss" scoped>
@import "./assets/vars.scss";

.app {
  overflow: hidden;
}

.sections {
  position: relative;
  transition: top 1.8s $transition1;
}

.plug {
  background-color: black;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  &-unloading {
    opacity: 1;
  }
}
</style>
