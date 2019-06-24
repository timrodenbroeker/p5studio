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

      <ColorList
        label="GRID"
        v-bind:colors="gridColors"
        v-bind:selectedColor="gridColor"
        v-bind:updateSelectedColor="updateGridColor"
      />
    </Group>
    <Group name="View">
      <RangeSlider
        label="zoom"
        v-bind:update="updateZoom"
        v-bind:min="0.3"
        v-bind:max="2"
        v-bind:val="parseFloat(zoom)"
        v-bind:step="0.01"
      />
      <RangeSlider
        label="Brightness"
        v-bind:update="updateBrightness"
        v-bind:min="0"
        v-bind:max="255"
        v-bind:val="parseInt(brightness)"
        v-bind:step="1"
      />
      <!-- <Checkbox label="Dark Mode"></Checkbox> -->
    </Group>
    <Group name="Grid">
      <Checkbox label="Show Grid" v-bind:checked="gridVisible" v-bind:toggle="toggleGridVisibility"></Checkbox>
      <RangeSlider
        label="ROWS"
        v-bind:update="updateGridRows"
        v-bind:min="1"
        v-bind:max="12"
        v-bind:val="parseInt(1)"
        v-bind:step="1"
      />
      <RangeSlider
        label="COLS"
        v-bind:update="updateGridCols"
        v-bind:min="1"
        v-bind:max="12"
        v-bind:val="parseInt(1)"
        v-bind:step="1"
      />
    </Group>
    <Group name="RENDER">
      <Button v-bind:doThis="savePNG" label="PNG" text="SAVE"/>
      <Button v-bind:doThis="saveJPG" label="JPG" text="SAVE"/>
      <VideoRecorder
        v-bind:recording="recording"
        v-bind:doThis="toggleRecord"
        label="VIDEO"
        text="RECORD"
      />
    </Group>
  </div>
</template>

<script>
import RangeSlider from "./ui/reusableComponents/slider/RangeSlider.vue";
import Button from "./ui/reusableComponents/button/Button.vue";
import DropDown from "./ui/reusableComponents/select/DropDown.vue";
import ColorList from "./ui/reusableComponents/color/ColorList.vue";
import Position from "./ui/reusableComponents/position/Position.vue";
import Group from "./ui/reusableComponents/group/Group.vue";
import Checkbox from "./ui/reusableComponents/checkbox/Checkbox.vue";
import VideoRecorder from "./ui/reusableComponents/videorecorder/VideoRecorder.vue";

export default {
  name: "UiRight",
  components: {
    RangeSlider,
    Button,
    Group,
    DropDown,
    ColorList,
    Position,
    Checkbox,
    VideoRecorder
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
    },
    zoom() {
      return this.$store.state.ui.zoom;
    },
    brightness() {
      return this.$store.state.ui.brightness;
    },
    gridVisible() {
      return this.$store.state.grid.visible;
    },
    gridColors() {
      return this.$store.state.colors.grid.colors;
    },
    gridColor() {
      return this.$store.state.colors.grid.selectedColor;
    },
    recording() {
      return this.$store.state.render.record;
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
    },
    updateZoom(val) {
      this.$store.commit("updateZoom", val);
    },
    updateBrightness(val) {
      this.$store.commit("updateBrightness", val);
    },
    updateGridCols(val) {
      this.$store.commit("updateGridCols", val);
    },
    updateGridRows(val) {
      this.$store.commit("updateGridRows", val);
    },
    toggleGridVisibility() {
      console.log("HEY");
      this.$store.commit("toggleGridVisibility");
    },
    updateGridColor(index) {
      this.$store.commit("updateGridColor", index);
    },
    toggleRecord() {
      this.$store.commit("toggleRecord");
    },
    savePNG() {
      this.$store.commit("savePNG");
    },
    saveJPG() {
      this.$store.commit("saveJPG");
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
