<template>
  <div
    class="background"
    :class="{
      'background-loading': isLoading,
      'background-loaded': isLoadingAnimationOver,
    }"
    ref="background"
    id="home"
  >
    <div class="layer layer__layer0" ref="layer0">
      <img
        class="layer__img"
        src="../assets/img/background/background-01.svg"
      />
    </div>
    <div class="layer layer__layer1" ref="layer1">
      <div class="layer layer__layer1-1">
        <img
          class="layer__img"
          src="../assets/img/background/foreground-circuit-01.svg"
        />
      </div>
      <div class="layer layer__layer1-2">
        <img
          class="layer__img"
          src="../assets/img/background/foreground-circuit-02.svg"
        />
      </div>
      <div class="layer layer__layer1-3">
        <img
          class="layer__img"
          src="../assets/img/background/foreground-circuit-03.svg"
        />
      </div>
    </div>
    <div class="layer layer__foreground">
      <div class="layer layer__layer2" ref="layer2">
        <div class="layer layer__layer2-1">
          <img
            class="layer__img"
            src="../assets/img/background/triangle-01-back-01.svg"
          />
        </div>
      </div>
    </div>
    <div class="layer layer__layer3" ref="layer3">
      <div class="layer layer__layer3-1" ref="layer31">
        <a class="layer__link" href="https://github.com/Vlas-Omsk">
          <svg
            ref="avatarSvgRef"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMinYMin slice"
            viewBox="0 0 750 500"
            style="
              position: relative;
              transform: translate(-50%, -50%);
              left: 50%;
              top: 50%;
            "
          >
            <image
              x="165"
              y="40"
              width="420"
              height="420"
              xlink:href="https://avatars2.githubusercontent.com/u/62666113?v=4"
              clip-path="polygon(0% 0%, 50% 87%, 50% 87%, 100% 0%)"
            />
          </svg>
        </a>
      </div>
      <div class="layer layer__foreground">
        <div class="layer layer__layer3-2">
          <img
            class="layer__img"
            src="../assets/img/background/triangle-01-fore-01.svg"
          />
        </div>
      </div>
    </div>
    <div class="layer layer__filter"></div>
  </div>
</template>

<script>
import ScrollHandler from "@/core/ScrollHandler.js";

export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    isLoadingAnimationOver: {
      type: Boolean,
      required: true,
    },
    isInteractiveBackgroundEnabled: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      layers: [
        {
          scale: 2.15,
          inverted: false,
        },
        {
          scale: 1.75,
          inverted: false,
        },
        {
          scale: 3.85,
          inverted: false,
        },
        {
          scale: 3.8,
          inverted: false,
        },
      ],
      lastPageYOffset: 0,
      noUpdateBorders: 0,
      noUpdateBordersPercents: 0.005,
    };
  },
  watch: {
    isInteractiveBackgroundEnabled(value) {
      if (value)
        this.windowScrollHandler();
      else
        for (let i = 0; i < this.layers.length; i++) {
          const el = this.$refs["layer" + i];
          if (!el) return;
          el.style.transform = null;
        }
    }
  },
  methods: {
    windowScrollHandler() {
      if (!this.isInteractiveBackgroundEnabled || !this.isLoadingAnimationOver)
        return;
      // if (
      //   this.lastPageYOffset + this.noUpdateBorders < window.pageYOffset ||
      //   this.lastPageYOffset - this.noUpdateBorders > window.pageYOffset
      // ) {
      //   this.lastPageYOffset = window.pageYOffset;
        let visible = this.$refs.background.clientHeight - window.pageYOffset;
        const per = visible / this.$refs.background.clientHeight;
        if (visible < 0) return;
        for (let i = 0; i < this.layers.length; i++) {
          const el = this.$refs["layer" + i];
          if (!el) return;
          const layer = this.layers[i];
          let pad = el.clientHeight - el.clientHeight / layer.scale;
          if (layer.inverted == true) {
            pad = pad * per - pad / 2;
            //el.style.transform = "scale(" + layer.scale + ")";
          } else {
            pad = -(pad * per - pad);
          }
          el.style.transform = "translateY(" + pad + "px)";
        }
      // }
    },
    windowResizeHandler() {
      this.noUpdateBorders = this.noUpdateBordersPercents * window.innerHeight;
      const avatarSvgRef = this.$refs.avatarSvgRef;
      let rectAvatarSvg = avatarSvgRef.getBoundingClientRect();
      let rectLayer3 = this.$refs.layer31.getBoundingClientRect();
      if (rectAvatarSvg.height + 1 < rectLayer3.height) {
        avatarSvgRef.style.width = "auto";
        avatarSvgRef.style.height = "100%";
      }
      if (rectAvatarSvg.width + 1 < rectLayer3.width) {
        avatarSvgRef.style.width = "100%";
        avatarSvgRef.style.height = "auto";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.windowScrollHandler);
    this.windowScrollHandler();
    window.addEventListener("resize", this.windowResizeHandler);
    this.windowResizeHandler();

    ScrollHandler.AddElement("home", this.$refs.background);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScrollHandler);
    window.removeEventListener("resize", this.windowResizeHandler);

    ScrollHandler.RemoveElement("home");
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/animations.css";
@import "../assets/vars.scss";

.background {
  position: relative;
  height: 130vh;
  max-height: 100vw;
  overflow: hidden;

  &-loading {
    .layer {
      &__layer0 {
        transform: scale(1.2);
        opacity: 0;
      }
      &__layer1 {
        transform: scale(1.5);
        opacity: 0;
        transition-delay: 0s;
      }
      &__layer2,
      &__layer3 {
        transform: scale(0.2);
        opacity: 0;
      }
    }
  }
  &-loaded {
    .layer {
      transition: none;
      &__layer1 {
        &-1 {
          animation: SmoothMove-01 45s ease-in-out infinite alternate;
        }
        &-2 {
          animation: SmoothMove-01 60s ease-in-out infinite alternate;
        }
        &-3 {
          animation: SmoothMove-02 45s ease-in-out infinite alternate;
        }
      }
      &__foreground {
        animation: Puls-01 5s ease-in-out infinite alternate;
      }
    }
  }
}

.layer {
  position: absolute;

  &,
  &__img,
  &__link {
    height: 100%;
    width: 100%;
  }
  &__img {
    object-fit: cover;
  }
  &__link {
    display: block;
  }
  &__layer0,
  &__layer1,
  &__layer2,
  &__layer3 {
    transition: transform 2s $transition1, opacity $transition2;
  }
  &__layer1 {
    transition-delay: 0.2s;
  }
  &__layer2,
  &__layer3 &__layer3-2 {
    transform: none;
  }
  &__layer2,
  &__layer3 {
    height: 100vh;
    max-height: 100vw;
  }
  &__layer3 {
    &-1 {
      transform: scale(0.5);
      overflow: hidden;
    }
  }
  &__foreground,
  &__filter {
    pointer-events: none;
  }
  &__filter {
    transform: translateY(5px);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1), transparent 30%);
  }
}
</style>
