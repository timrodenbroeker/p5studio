<template>
  <div id="artboard">
    <PosterP5></PosterP5>
  </div>
</template>

<script>
import PosterP5 from "./poster/PosterP5.vue";

export default {
  name: "Artboard",
  components: {
    PosterP5
  }
};
</script>

<style lang="scss">
#artboard {
  width: calc(100vw - #{$uiWidth};
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
