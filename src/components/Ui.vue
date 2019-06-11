<template>
  <div id="ui">
    <RangeSlider></RangeSlider>
    <TextArea></TextArea>
  </div>
</template>

<script>
import RangeSlider from "./controllers/RangeSlider.vue";
import TextArea from "./controllers/TextArea.vue";

export default {
  name: "Ui",
  components: {
    RangeSlider,
    TextArea
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
