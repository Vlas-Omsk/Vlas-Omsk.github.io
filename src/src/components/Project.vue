<template>
  <div
    class="project projectDesktop"
    :class="{ 'project-visible': isVisible }"
    :style="{ height: projectHeight + 'px' }"
    ref="projectRef"
    v-if="!isMobile()"
  >
    <div class="project__container" @click="$emit('openurl', project.url)">
      <img
        class="project__img"
        ref="projectImgRef"
        :src="
          project.backgroundUrl ? project.backgroundUrl : '/project-default.jpg'
        "
      />
      <div class="project__background"></div>
      <div class="project__filter"></div>
      <div class="project__description" v-html="project.description"></div>
      <div class="bottom">
        <div class="bottom__container" ref="bottomContainerRef">
          <div class="bottom__number">{{ this.number }}</div>
          <div class="bottom__title">{{ project.title }}</div>
          <div class="bottom__date">
            Last update: {{ project.date.toLocaleString() }}
          </div>
          <img class="bottom__arrow" src="../assets/img/arrow-left.svg" />
        </div>
      </div>
    </div>
  </div>
  <div
    class="project projectMobile"
    :class="{ 'project-visible': isVisible }"
    :style="{ height: projectHeight * (isDescriptionOpened ? 2 : 1) + 'px' }"
    ref="projectRef"
    v-else
  >
    <div
      class="project__container projectMobile__container"
      :style="{ 'min-height': projectHeight + 'px' }"
    >
      <img
        class="project__img"
        ref="projectImgRef"
        :src="
          project.backgroundUrl ? project.backgroundUrl : '/project-default.jpg'
        "
      />
      <div class="project__background"></div>
      <div
        class="bottom project__container"
        @click="$emit('openurl', project.url)"
      >
        <div class="bottom__container" ref="bottomContainerRef">
          <div class="bottom__number">{{ this.number }}</div>
          <div class="bottom__title">{{ project.title }}</div>
          <div class="bottom__date">
            Last update: {{ project.date.toLocaleString() }}
          </div>
        </div>
      </div>
      <img
        class="projectMobile__arrow"
        :class="{
          'projectMobile__arrow-disabled': isEmpty(project.description),
        }"
        :style="{ transform: 'rotate(' + projectArrowRotation + 'deg)' }"
        src="../assets/img/arrow-down.svg"
        @click="changeDescriptionState(!isDescriptionOpened)"
      />
    </div>
    <div class="project__description" v-html="project.description"></div>
  </div>
</template>

<script>
import ScrollHandler from "@/core/ScrollHandler.js";
import { isEmpty, isMobile } from "@/core/Utils.js";

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isDescriptionOpened: false,
      projectArrowRotation: 0,
      isVisible: false,
      projectHeight: 0,
    };
  },
  computed: {
    name() {
      return "project" + this.id;
    },
    number() {
      const count = 2;
      let result = (this.id + 1).toString();
      for (let i = 0; i < count - result.length; i++) result = "0" + result;
      return result;
    },
  },
  methods: {
    changeDescriptionState(state) {
      this.projectArrowRotation += 540;
      this.isDescriptionOpened = state;
    },
    windowResize() {
      this.projectHeight = this.$refs.projectRef.clientWidth;
    },
    isMobile,
    isEmpty,
  },
  mounted() {
    window.addEventListener("resize", this.windowResize);
    this.windowResize();

    const projectRef = this.$refs.projectRef,
      projectImgRef = this.$refs.projectImgRef,
      bottomContainerRef = this.$refs.bottomContainerRef;

    ScrollHandler.AddElement(this.name, projectRef, 100);
    ScrollHandler.AddCallback(this.name, () => {
      let columnCount = 1;
      if (window.innerWidth >= 768) columnCount = 2;
      if (window.innerWidth >= 1200) columnCount = 3;
      if (window.innerWidth >= 1600) columnCount = 4;
      const row = Math.floor(this.id / columnCount);
      const column = this.id - row * columnCount;

      const delay = column * 150;
      projectImgRef.style.transitionDelay =
        delay + 400 + "ms, " + (delay + 400) + "ms";
      bottomContainerRef.style.transitionDelay = delay + 900 + "ms";
      this.isVisible = true;
      ScrollHandler.RemoveElement(this.name);
    });
    ScrollHandler.UpdateElements();
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResize);

    ScrollHandler.RemoveElement(this.name);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
@import "../assets/tgs.scss";
@import "../assets/mixins.scss";

// .bottom__title
$padding_left: calc(40px + 32px);
$padding_right: 14px;

.project {
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: $shadow1;
  margin: 7.5px;
  cursor: pointer;
  color: white;
  overflow: hidden;
  box-sizing: border-box;
  flex-basis: calc(100% / 1 - 15px);
  @media screen and (min-width: 500px) {
    max-width: 444px;
    margin: 7.5px auto;
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2 - 15px);
    max-width: none;
    margin: 7.5px;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 3 - 15px);
  }
  @media screen and (min-width: 1600px) {
    flex-basis: calc(100% / 4 - 15px);
  }

  &-visible {
    .project {
      &__img {
        opacity: 1;
        transform: none;
      }
    }
    .bottom {
      &__container {
        transform: none;
      }
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.2);
    opacity: 0;
    transition: transform 4s $transition1, opacity 0.8s $transition1;
  }
  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), transparent 40%);
  }
  &__filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: background-color 0.3s $transition1;
  }
  &__description {
    position: relative;
    word-break: break-word;
    overflow-x: hidden;
    overflow-y: scroll;
    @include scrollbar;
    @include tg;
    height: 100%;
    padding: 30px 30px 0 30px;
    margin-bottom: 12px;
    transform: translateY(-30px);
    opacity: 0;
    transition: transform 0.4s $transition1, opacity 0.4s $transition1;
  }
}

.projectDesktop {
  &:hover {
    .project {
      &__filter {
        background-color: rgba(0, 0, 0, 0.45);
      }
      &__description {
        transform: none;
        opacity: 1;
      }
    }
    .bottom {
      &__number {
        transform: translateX(-100%);
        opacity: 0;
      }
      &__title {
        padding-left: $padding_right;
        padding-right: $padding_left;
        transform: scale(0.8);
      }
      &__date {
        transform: none;
      }
      &__arrow {
        transform: none;
        opacity: 1;
      }
    }
  }
}

.projectMobile {
  transition: height 0.3s $transition1;
  overflow: visible;
  box-shadow: none;

  &__arrow {
    position: relative;
    height: 20px;
    margin: 12px auto;
    transition: transform 0.4s $transition1;

    &-disabled {
      opacity: 0;
      pointer-events: none;
      margin: 0 auto;
    }
  }
  &__container {
    position: relative;
    overflow: hidden;
    box-shadow: $shadow1;
  }

  .project {
    &__description {
      border: gray 1px dotted;
    }
    &__background {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), transparent 80%);
    }
    &__description {
      color: black;
      margin-bottom: 0;
      padding-top: 0;
      opacity: 1;
      transform: none;
    }
  }
  .bottom {
    margin-bottom: 0;

    &__title {
      min-width: calc(100% - 24px);
      transform: scale(0.8);
    }
    &__date {
      left: calc(#{$padding_right} + 52px);
      transform: none;
    }
  }
}

.bottom {
  position: relative;
  margin-bottom: 26px;
  overflow: hidden;
  flex-shrink: 0;

  &__container {
    display: flex;
    align-items: flex-end;
    transform: translateY(100%);
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &__number {
    @extend %tg1;
    position: absolute;
    padding-left: 32px;
    transition: transform 0.4s $transition1, opacity 0.4s $transition1;
  }
  &__title {
    @extend %tg2;
    padding-left: $padding_left;
    padding-right: $padding_right;
    width: 100%;
    word-break: break-word;
    transform-origin: 10% calc(100% - 1em - 20px);
    transition: padding 0.4s $transition1, transform 0.4s $transition1;
  }
  &__date {
    @extend %tg1;
    font-size: 0.9em;
    position: absolute;
    bottom: 0;
    color: rgb(190, 190, 190);
    left: calc(#{$padding_right} + 6px);
    transform: translateY(100%);
    transition: transform 0.4s $transition1;
  }
  &__arrow {
    position: absolute;
    height: 14px;
    right: 0;
    object-fit: contain;
    padding-right: 32px;
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.4s $transition1, opacity 0.4s $transition1;
  }
}
</style>
