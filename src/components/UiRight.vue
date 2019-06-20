<template>
  <div id="uiRight">
    <Group name="View">
      <Checkbox label="Dark Mode"></Checkbox>
    </Group>
    <Group name="Export">
      <Checkbox label="Frame"></Checkbox>
      <Button v-bind:doThis="() => {}" label="PNG" text="SAVE"/>
      <Button v-bind:doThis="() => {}" label="JPG" text="SAVE"/>
    </Group>
  </div>
</template>

<script>
import RangeSlider from "./ui/slider/RangeSlider.vue";
import TextArea from "./ui/text/TextArea.vue";
import Button from "./ui/button/Button.vue";
import DropDown from "./ui/select/DropDown.vue";
import ColorList from "./ui/color/ColorList.vue";
import Position from "./ui/position/Position.vue";
import Group from "./ui/group/Group.vue";
import Checkbox from "./ui/checkbox/Checkbox.vue";

export default {
  name: "UiRight",
  components: {
    RangeSlider,
    TextArea,
    Button,
    Group,
    DropDown,
    ColorList,
    Position,
    Checkbox
  },

  // computed

  computed: {},
  created: function() {},

  // Methods

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
    },
    updateCurrentFont(val) {
      this.$store.commit("updateCurrentFont", val);
    }
  }
};
</script>

<style scoped lang="scss">
#uiRight {
  position: fixed;
  top: 0;
  right: 0;
  width: $uiWidth;
  background: $uiBG;
  height: 100vh;
}
</style>
