<template>
  <div id="app">
    <Ui></Ui>
    <Canvas></Canvas>
  </div>
</template>

<script>
import Ui from "./components/Ui.vue";
import Canvas from "./components/Canvas.vue";

export default {
  name: "app",
  components: {
    Canvas,
    Ui
  }
};
</script>

<style></style>
