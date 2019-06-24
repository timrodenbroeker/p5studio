<template>
  <div
    id="artboard"
    v-bind:style="{background: 'rgb(' + brightness + ',' + brightness + ',' + brightness + ')'}"
  >
    <PosterP5 v-bind:style="{transform: 'scale(' + zoom + ')'}"></PosterP5>
  </div>
</template>

<script>
import PosterP5 from "./poster/PosterP5.vue";

export default {
  name: "Artboard",
  components: {
    PosterP5
  },
  computed: {
    zoom() {
      return this.$store.state.ui.zoom;
    },
    brightness() {
      return this.$store.state.ui.brightness;
    }
  }
};
</script>

<style lang="scss">
#artboard {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  #poster {
    /* box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.2); */
  }
}
</style>
