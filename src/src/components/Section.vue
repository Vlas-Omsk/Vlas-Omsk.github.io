<template>
  <section class="section" ref="section">
    <SlideUp :name="name">
      <h2 class="section__title">
        <slot name="title" />
      </h2>
    </SlideUp>
    <div class="section__container">
      <slot />
      <div
        class="section__plug"
        :class="{ 'section__plug-loading': isLoading }"
      ></div>
    </div>
  </section>
</template>

<script>
import SlideUp from "@/components/common/SlideUp";
import ScrollHandler from "@/core/ScrollHandler.js";

export default {
  components: {
    SlideUp,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    ScrollHandler.AddElement(this.name, this.$refs.section);
    ScrollHandler.AddElement(
      this.name + "_fillsection",
      this.$refs.section,
      0,
      100
    );
  },
  destroyed() {
    ScrollHandler.RemoveElement(this.name);
    ScrollHandler.RemoveElement(this.name + "_fillsection");
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";
@import "../assets/vars.scss";

.section {
  padding: 0 20px;
  min-height: 100vh;
  background: white;

  &__container {
    position: relative;
    height: 100%;
  }
  &__plug {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    backdrop-filter: none;
    transition: backdrop-filter 0.4s $transition1;

    &-loading {
      pointer-events: all;
      backdrop-filter: blur(4px);
    }
  }
  &__title {
    @include tg(
      $font-size: 4em,
      $font-weight: 500,
      $line-height: 1.08em,
      $letter-spacing: -0.04em
    );
    @media screen and (min-width: 768px) {
      @include tg(
        $font-size: 7em,
        $font-weight: 500,
        $line-height: 1.08em,
        $letter-spacing: -0.04em
      );
    }
    padding: 80px 0 40px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
