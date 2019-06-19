<template>
  <div id="ui">
    <RangeSlider
      label="fontsize"
      v-bind:min="10"
      v-bind:max="300"
      v-bind:val="70"
      v-bind:update="updateFontSize"
    />
    <RangeSlider
      label="lineheight"
      v-bind:min="0"
      v-bind:max="10"
      v-bind:val="1"
      v-bind:step="0.01"
      v-bind:update="updateLineHeight"
    />
    <TextArea
      v-bind:rows="4"
      label="headline"
      v-bind:text="headline"
      v-bind:update="updateHeadline"
    />

    <DropDown label="Font" v-bind:options="fontFiles"/>

    <ColorPicker
      label="Color"
      v-bind:colors="colors"
      v-bind:selectedColor="selectedColor"
      v-bind:updateSelectedColor="updateSelectedColor"
    />

    <Button v-bind:doThis="toggleVisibility" label="Select Font" text="CLICK"/>

    <Button v-bind:doThis="() => {}" label="Save" text="PNG"/>
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
      return this.$store.state.typography.fontSize;
    },
    lineHeight() {
      return this.$store.state.typography.fontSize;
    },
    headline() {
      return this.$store.state.typography.headline;
    },
    fontFiles() {
      return this.$store.state.typography.fontFiles;
    },
    colors() {
      return this.$store.state.colors.colors;
    },
    selectedColor() {
      return this.$store.state.colors.selectedColor;
    },
    ModalSelectFontVisible() {
      return this.$store.state.ui.ModalSelectFont.visible;
    }
  },
  created: function() {},
  methods: {
    updateFontSize(e) {
      this.$store.commit("updateFontSize", e.target.value);
    },
    updateLineHeight(e) {
      this.$store.commit("updateLineHeight", e.target.value);
    },
    updateHeadline(e) {
      this.$store.commit("updateHeadline", e.target.value);
    },
    updateSelectedColor(index) {
      this.$store.commit("updateSelectedColor", index);
    },
    toggleVisibility() {
      this.$store.commit("toggleFontsModal");
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
