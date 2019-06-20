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
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
