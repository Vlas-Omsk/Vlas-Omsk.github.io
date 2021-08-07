<template>
  <div class="button__wrapper">
    <div class="button" :class="{'button-hover': isHoverEffectEnabled}">
      <div class="button__background"></div>
      <a class="button__text" :href="url" @click="$emit('click', $event)">
        <slot />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    isHoverEffectEnabled: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/tgs.scss';
@import '../../assets/vars.scss';

.button {
  position: relative;
  cursor: pointer;

  &__background {
    position: absolute;
    width: 100%;
    height: 0;
    background-color: #f1c40f;
    transition: height $transition2;
  }
  &__text {
    position: relative;
    display: block;
    padding: 15px 10px;
    text-transform: uppercase;
    color: #aaa;
    text-decoration: none;
    @include tg($font-weight: 800);
    transition: color $transition2;
  }
  &:hover,
  &-hover {
    .button {
      &__background {
        height: 100%;
      }
      &__text {
        color: #91640f;
      }
    }
  }
}
</style>
