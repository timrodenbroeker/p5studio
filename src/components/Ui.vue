<template>
  <div id="ui">
    <RangeSlider></RangeSlider>
    <TextInput></TextInput>
  </div>
</template>

<script>
import RangeSlider from "./controllers/RangeSlider.vue";
import TextInput from "./controllers/TextInput.vue";

export default {
  name: "Ui",
  components: {
    RangeSlider,
    TextInput
  }
};
</script>

<style scoped lang="scss">
#ui {
  width: $uiWidth;
  background: #111111;
  height: 100vh;
  padding: 25px;
}
</style>
