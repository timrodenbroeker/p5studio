<template>
  <div id="ui">
    <range-slider></range-slider>
  </div>
</template>

<script>
import RangeSlider from "./controllers/RangeSlider.vue";

export default {
  name: "Ui",
  components: {
    RangeSlider
  }
};
</script>

<style scoped lang="scss">
#ui {
  width: 300px;
  background: #111111;
  height: 100vh;
  padding: 25px;
}
</style>
