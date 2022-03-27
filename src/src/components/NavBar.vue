<template>
  <header
    class="navbar"
    :class="{
      'navbar-fill': isFilled,
      'navbar-blacklogo': isFilled && !isHamburgerOpened,
      'navbar-loading': isLoading,
    }"
  >
    <div class="navbar__background"></div>
    <Hamburger
      class="navbar__hamburger"
      :value="isHamburgerOpened"
      @input="$emit('hamburgerStateChanged', $event)"
      :isFilled="isFilled"
      :isAnimatedBackgroundEnabled="isAnimatedBackgroundEnabled"
      @toggleInteractiveBackground="$emit('toggleInteractiveBackground')"
    />
    <nav class="navbar__wrapper">
      <div class="navbar__logo__wrapper">
        <div class="navbar__titles">
          <div
            class="navbar__title"
            :class="{ 'navbar__title-down': state != 1 || isHamburgerOpened }"
            ref="ProjectsTitleRef"
          >
            GitHub projects
          </div>
        </div>
        <a
          class="navbar__logo"
          :class="{ 'navbar__logo-hidden': state != 0 && !isHamburgerOpened }"
          href="/"
        >
          <img
            class="navbar__img navbar__img-hidden"
            src="../assets/img/logo.svg"
          />
        </a>
      </div>
      <div class="navbar__buttons">
        <FilldownButton
          class="navbar__button"
          url="/#home"
          :isHoverEffectEnabled="currentSection == 'home'"
          >Home</FilldownButton
        >
        <FilldownButton class="navbar__button" url="https://www.cmd5.org"
          >md5 decrypt</FilldownButton
        >
      </div>
      <div class="navbar__buttons">
        <FilldownButton
          class="navbar__button"
          url="/#projects"
          :isHoverEffectEnabled="currentSection == 'projects'"
          >Projects</FilldownButton
        >
        <FilldownButton
          class="navbar__button"
          :isHoverEffectEnabled="isAnimatedBackgroundEnabled"
          @click="$emit('toggleInteractiveBackground')"
          >Background</FilldownButton
        >
      </div>
    </nav>
  </header>
</template>

<script>
import FilldownButton from "@/components/common/FilldownButton";
import Hamburger from "@/components/Hamburger";
import ScrollHandler from "@/core/ScrollHandler.js";

export default {
  components: {
    FilldownButton,
    Hamburger,
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    isAnimatedBackgroundEnabled: {
      type: Boolean,
      required: true,
    },
    isHamburgerOpened: {
      type: Boolean,
      required: true,
    },
    currentSection: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFilled: false,
      state: 0,
    };
  },
  watch: {
    currentSection(value) {
      this.isFilled = value != "home";
    },
  },
  mounted() {
    ScrollHandler.AddLeaveCallback(
      "projects_fillsection",
      () => (this.state = 0)
    );
    ScrollHandler.AddEnterCallback(
      "projects_fillsection",
      () => (this.state = 1)
    );
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
@import "../assets/tgs.scss";

.navbar {
  position: fixed;
  height: 70px;
  width: 100%;
  z-index: 999;
  transition: opacity $transition2;
  transition-delay: 1.2s;

  &-fill {
    .navbar {
      &__background {
        height: 100%;
        border-bottom-width: 1px;
      }
    }
  }
  &-blacklogo {
    .navbar__img {
      filter: none;
    }
  }
  &-loading {
    opacity: 0;
  }
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 0 40px;
    overflow: hidden;
  }
  &__titles {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &__title {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: auto;
    display: flex;
    @include tg($font-weight: 600, $font-style: italic);
    font-size: 1.5em;
    transition: top 0.4s $transition1, transform 0.4s $transition1;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 2em;
    }
    // &-up {
    //   top: 0;
    //   transform: translate(-50%, -100%);
    // }
    &-down {
      top: 100%;
      transform: translate(-50%, 0);
    }
  }
  &__logo {
    position: relative;
    display: block;
    margin: auto;
    height: 100%;
    padding: 15px 0;
    box-sizing: border-box;
    overflow: hidden;
    transition: transform 0.4s $transition1;

    &-hidden {
      transform: translateY(-100%);
    }
    &__wrapper {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
  &__img {
    position: relative;
    height: 100%;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(329deg)
      brightness(107%) contrast(102%);
    transition: filter $transition2;
  }
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: whitesmoke;
    border-bottom: 0 solid #e5e5e5;
    transition: height 0.6s $transition1, border-bottom-width 0.6s $transition1;
  }
  &__button {
    display: none;
  }
  &__buttons {
    display: flex;
    :not(:last-child) {
      margin-right: 15px;
    }
  }
  @media screen and (min-width: 768px) {
    &__button {
      display: block;
    }
    &__hamburger {
      display: none;
    }
  }
}
</style>
