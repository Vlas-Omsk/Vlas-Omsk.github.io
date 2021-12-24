<template>
  <div class="hamburger" :class="{'hamburger-opened': value, 'hamburger-fill': isFilled}">
    <div class="hamburger__overflow">
      <a class="hamburger__option" href="/#home" @click="hideHamburger">
        Home
      </a>
      <a class="hamburger__option" href="/#projects" @click="hideHamburger">
        Projects
      </a>
      <div style="display: flex; flex-direction: column; align-items: center; margin-top: 50px; font-size: .8em; font-weight: 800">
        <a class="hamburger__option" href="https://www.cmd5.org">
          MD5 decrypt
        </a>
        <a
          class="hamburger__option"
          :class="{ 'hamburger__option-inactive': !isInteractiveBackgroundEnabled }"
          @click="$emit('toggleInteractiveBackground')"
        >
          Background
        </a>
      </div>
    </div>
    <div class="hamburger__button" @click="$emit('input', !value)">
      <svg viewBox="0 0 10 10" stroke="currentColor" stroke-width="0.6px" stroke-linecap="round">
        <path class="hamburger__button__line1" d="M1,3 9,3z"/>
        <path class="hamburger__button__line2" d="M1,5 9,5z"/>
        <path class="hamburger__button__line3" d="M1,7 9,7z"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    isFilled: {
      type: Boolean,
      required: true
    },
    isInteractiveBackgroundEnabled: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hideHamburger() {
      this.$emit('input', false);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';
@import '../assets/mixins.scss';

.hamburger {
  display: flex;
  position: absolute;
  height: 70px;
  width: 50px;

  &-fill {
    .hamburger {
      &__button {
        color: black;
      }
    }
  }
  &-opened {
    .hamburger {
      &__button {
        &__line1 {
          d: path("M2,2 8,8z")
        }
        &__line2 {
          d: path("M2,2 8,8z")
        }
        &__line3 {
          d: path("M2,8 8,2z")
        }
      }
      &__button {
        color: white;
      }
      &__overflow {
        transform: none;
      }
    }
  }
  &__option {
    @include tg($font-weight: 800, $font-size: 3em);
    color: #eee;
    text-decoration: none;
    cursor: pointer;
    transition: color .3s $transition1;

    &-inactive {
      color: rgba(238, 238, 238, 0.5);
    }
  }
  &__button {
    position: relative;
    width: 100%;
    margin: 20px 10px;
    color: white;
    cursor: pointer;

    &__line1,
    &__line2,
    &__line3 {
      transition: all .6s $transition1;
    }
  }
  &__overflow {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(-100%);
    background-color: rgba($color: #000000, $alpha: 0.9);
    backdrop-filter: blur(10px);
    transition: transform .6s $transition1;
  }
}
</style>