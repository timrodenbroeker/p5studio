<template>
  <div id="app">
    <Ui></Ui>
    <Artboard></Artboard>
  </div>
</template>

<script>
import Ui from "./components/Ui.vue";
import Artboard from "./components/Artboard.vue";

export default {
  name: "app",
  components: {
    Artboard,
    Ui
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
}
#app {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: #{$uiWidth} calc(100vw - #{$uiWidth});
  background: #000000;
}
</style>
