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
import Modals from "./components/modals/Modals.vue";

export default {
  name: "app",
  components: {
    Artboard,
    Ui,
    UiRight,
    Modals
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

  background: #000000;
}
</style>
