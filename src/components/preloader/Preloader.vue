<template>
  <div id="preloader" v-bind:class="{ ready: ready }">
    <div class="scaleme">
      <h1>
        p5studio
        <sup>LOADING</sup>
      </h1>
    </div>
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
  opacity: 1;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  display: flex;
  flex-direction: column;
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
  @keyframes scale {
    0% {
      transform: scale(0.6);
    }

    100% {
      transform: scale(1);
    }
  }
  .scaleme {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: scale 2s 1;
  }
  h2 {
    color: $uiSecondary;
    animation: blink-animation 2s steps(5, start) infinite;
    font-weight: normal;
    font-size: 13px;
  }
  h1 {
    color: $uiSecondary;
    font-size: calc(16px + 4vw);
    margin: 0;
    padding: 0;
    /* animation: blink-animation 2s steps(5, start) infinite; */
    sup {
      font-size: calc(9px + 0.6vw);
      font-weight: normal;
      animation: blink-animation 2s steps(5, start) infinite;
    }
  }

  &.ready {
    top: 100vh;
  }
}
</style>
