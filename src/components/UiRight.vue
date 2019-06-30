<template>
  <div id="uiRight">
    <Group name="View" headline>
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

    <Group name="OUTPUT" headline border>
      <Button v-bind:doThis="logState" label="STATE" text="LOG TO CONSOLE" />
      <Button v-bind:doThis="savePNG" label="PNG" text="SAVE" />
      <Button v-bind:doThis="saveJPG" label="JPG" text="SAVE" />
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
    zoom() {
      return this.$store.state.ui.zoom;
    },
    brightness() {
      return this.$store.state.ui.brightness;
    },

    recording() {
      return this.$store.state.render.record;
    }
  },
  created: function() {},

  // Methods

  methods: {
    logState() {
      this.$store.commit("logState");
    },
    doSomethingStupid() {
      console.log("i've boiled your dog");
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
  z-index: 99999;
  top: 0;
  padding-top: 25px;
  right: 0;
  width: $uiWidth;
  background: $uiBG;
  height: 100vh;
}
</style>
