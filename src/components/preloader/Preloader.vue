<template>
  <div id="preloader" v-bind:class="{ ready: ready }">
    <h1>
      p5studio
      <sup>{{version}}</sup>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Preloader",
  components: {},
  computed: {
    ready() {
      return this.$store.state.poster.ready;
    },
    version() {
      return this.$store.state.info.version;
    }
  }
};
</script>

<style lang="scss" scoped>
#preloader {
  transition: top 2s ease;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: $uiBG;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
  @keyframes blink-animation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  h1 {
    color: $uiSecondary;
    font-size: calc(16px + 4vw);

    animation: blink-animation 2s steps(5, start) infinite;
    sup {
      font-size: calc(9px + 1vw);
      font-weight: normal;
    }
  }

  &.ready {
    top: 100vh;
  }
}
</style>
