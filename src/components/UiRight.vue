<template>
  <div id="uiRight">
    <Group name="Colors">
      <ColorList
        label="Background"
        v-bind:colors="colors"
        v-bind:selectedColor="selectedColor"
        v-bind:updateSelectedColor="updateSelectedColor"
      />

      <ColorList
        label="Text"
        v-bind:colors="textColors"
        v-bind:selectedColor="textColor"
        v-bind:updateSelectedColor="updateTextColor"
      />
    </Group>
    <Group name="View">
      <RangeSlider label="zoom" v-bind:update="doSomethingStupid"/>
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
import RangeSlider from "./ui/elements/slider/RangeSlider.vue";
import TextArea from "./ui/elements/text/TextArea.vue";
import Button from "./ui/elements/button/Button.vue";
import DropDown from "./ui/elements/select/DropDown.vue";
import ColorList from "./ui/elements/color/ColorList.vue";
import Position from "./ui/elements/position/Position.vue";
import Group from "./ui/elements/group/Group.vue";
import Checkbox from "./ui/elements/checkbox/Checkbox.vue";

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

  computed: {
    colors() {
      return this.$store.state.colors.background.colors;
    },
    selectedColor() {
      return this.$store.state.colors.background.selectedColor;
    },
    textColors() {
      return this.$store.state.colors.text.colors;
    },
    textColor() {
      return this.$store.state.colors.text.selectedColor;
    }
  },
  created: function() {},

  // Methods

  methods: {
    doSomethingStupid() {
      console.log("i've boiled your dog");
    },
    updateSelectedColor(index) {
      this.$store.commit("updateSelectedColor", index);
    },
    updateTextColor(index) {
      this.$store.commit("updateTextColor", index);
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
