<template>
  <div id="app">
    <Ui></Ui>
    <UiRight></UiRight>
    <Artboard></Artboard>
    <Modals/>
  </div>
</template>

<script>
import Ui from "./components/Ui.vue";
import UiRight from "./components/UiRight.vue";
import Artboard from "./components/Artboard.vue";
import Modals from "./components/ui/modals/Modals.vue";

export default {
  name: "app",
  components: {
    Artboard,
    Ui,
    UiRight,
    Modals
  },
  mounted() {
    // Prevent leaving the page when a file is dropped
    window.addEventListener("dragleave", function(e) {
      e.preventDefault();
    });
    window.addEventListener("dragover", function(e) {
      e.preventDefault();
    });
    window.addEventListener("drop", function(e) {
      e.preventDefault();
    });
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
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000000;
}
</style>
