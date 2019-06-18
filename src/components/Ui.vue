<template>
  <div id="ui">
    <RangeSlider
      label="fontsize"
      v-bind:min="10"
      v-bind:max="140"
      v-bind:val="70"
      v-bind:update="updateFontSize"
    />
    <TextArea
      v-bind:rows="4"
      label="headline"
      v-bind:text="headline"
      v-bind:update="updateHeadline"
    />

    <DropDown label="Font" v-bind:options="fontFiles"/>

    <ColorPicker label="Color" v-bind:colors="colors"/>

    <Button label="Save" text="PNG"/>
  </div>
</template>

<script>
import RangeSlider from "./ui/slider/RangeSlider.vue";
import TextArea from "./ui/text/TextArea.vue";
import Button from "./ui/button/Button.vue";
import DropDown from "./ui/select/DropDown.vue";
import ColorPicker from "./ui/color/ColorPicker.vue";

export default {
  name: "Ui",
  components: {
    RangeSlider,
    TextArea,
    Button,
    DropDown,
    ColorPicker
  },
  computed: {
    fontSize() {
      return this.$store.state.fontSize;
    },
    headline() {
      return this.$store.state.headline;
    },
    fontFiles() {
      return this.$store.state.fontFiles;
    },
    colors() {
      return this.$store.state.colors;
    },
    selectedColor() {
      return this.$store.state.selectedColor;
    }
  },
  created: function() {},
  methods: {
    updateFontSize(e) {
      this.$store.commit("updateFontSize", e.target.value);
    },
    updateHeadline(e) {
      this.$store.commit("updateHeadline", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
#ui {
  width: $uiWidth;
  background: $uiBG;
  height: 100vh;
  padding: 25px;
}
</style>
