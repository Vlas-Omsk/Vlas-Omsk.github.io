<template>
  <Section id="projects" name="projects" :isLoading="isLoading">
    <template #title><em>GitHub </em>projects</template>
    <div class="projects">
      <Project
        v-for="(project, id) of projects"
        :key="id"
        :project="project"
        :id="id"
        @openurl="openUrl"
      />
    </div>
  </Section>
</template>

<script>
import Section from "@/components/Section";
import Project from "@/components/Project";

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Section,
    Project,
  },
  methods: {
    openUrl(url) {
      console.log("openurl");
      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
}
</style>
