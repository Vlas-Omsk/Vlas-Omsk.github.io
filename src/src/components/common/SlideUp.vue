<template>
  <div class="slideup__wrapper">
    <div class="slideup" ref="slideup">
      <div class="slideup__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollHandler from "@/core/ScrollHandler.js";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const slideup = this.$refs.slideup;
    ScrollHandler.AddElement("slideup_" + this.name, slideup, 100);
    ScrollHandler.AddCallback("slideup_" + this.name, () => {
      slideup.classList.add("slideup-visible");
      ScrollHandler.RemoveElement("slideup_" + this.name);
    });
  },
  destroyed() {
    ScrollHandler.RemoveElement("slideup_" + this.name);
  },
};
</script>

<style lang="scss">
.slideup {
  overflow: hidden;

  &-visible {
    .slideup__content {
      transform: none;
    }
  }
  &__content {
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-delay: 175ms;
    transform: translateY(100%);
  }
}
</style>
