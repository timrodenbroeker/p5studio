<template>
  <div id="ui">
    <div class="branding">
      <h1>
        p5studio
        <sup>0.0.1</sup>
      </h1>
    </div>

    <Group name="SELECT">
      <LayerList
        v-bind:update="updateSelectedLayer"
        label="layer"
        v-bind:options="layers"
        v-bind:selected="selectedLayer"
      ></LayerList>
    </Group>

    <Group name="headline">
      <!-- <Position label="Position" v-bind:posX="posX" v-bind:posY="posY"/> -->
      <RangeSlider
        label="fontsize"
        v-bind:min="10"
        v-bind:max="350"
        v-bind:val="parseInt(headlineFontSize)"
        v-bind:update="updateFontSize"
      />
      <RangeSlider
        label="lineheight"
        v-bind:min="0"
        v-bind:max="2"
        v-bind:val="parseFloat(lineHeight)"
        v-bind:step="0.01"
        v-bind:update="updateLineHeight"
      />

      <TextArea
        v-bind:rows="4"
        label="headline"
        :value="headline"
        v-bind:text="headline"
        v-bind:update="updateHeadline"
      />

      <!-- <DropDown label="Font" v-bind:options="fontFiles" :update="updateCurrentFont()"/> -->

      <DisplayString label="FONT" v-bind:text="currentFont"></DisplayString>

      <Button v-bind:doThis="toggleFontsModal" label="Select Font" text="Open Library"/>
    </Group>
    <Group name="Image">
      <Dropzone label="upload" text="drop a file"></Dropzone>
      <!-- <Position label="Position" v-bind:posX="posX" v-bind:posY="posY"/> -->
      <Button label="Select" text="Open Library" v-bind:doThis="toggleImagesModal"/>
      <RangeSlider
        label="Width"
        v-bind:min="0"
        v-bind:max="1700"
        v-bind:val="parseInt(imageW)"
        v-bind:step="1"
        v-bind:update="updateImageW"
      />

      <RangeSlider
        label="Rotate X"
        v-bind:min="0"
        v-bind:max="360"
        v-bind:val="parseInt(imageRotationX)"
        v-bind:step="1"
        v-bind:update="updateImageRotationX"
      />
      <RangeSlider
        label="Rotate Y"
        v-bind:min="0"
        v-bind:max="360"
        v-bind:val="parseInt(imageRotationY)"
        v-bind:step="1"
        v-bind:update="updateImageRotationY"
      />
      <RangeSlider
        label="Rotate Z"
        v-bind:min="0"
        v-bind:max="360"
        v-bind:val="parseInt(imageRotationZ)"
        v-bind:step="1"
        v-bind:update="updateImageRotationZ"
      />
    </Group>
  </div>
</template>

<script>
import RangeSlider from "./ui/reusableComponents/slider/RangeSlider.vue";
import TextArea from "./ui/reusableComponents/text/TextArea.vue";
import Button from "./ui/reusableComponents/button/Button.vue";
import DropDown from "./ui/reusableComponents/select/DropDown.vue";
import ColorList from "./ui/reusableComponents/color/ColorList.vue";
import Position from "./ui/reusableComponents/position/Position.vue";
import Group from "./ui/reusableComponents/group/Group.vue";
import LayerList from "./ui/reusableComponents/layerlist/LayerList.vue";
import DisplayString from "./ui/reusableComponents/display/DisplayString.vue";
import Dropzone from "./ui/reusableComponents/dropzone/Dropzone.vue";

export default {
  name: "Ui",
  components: {
    RangeSlider,
    TextArea,
    Button,
    Group,
    DropDown,
    ColorList,
    Position,
    LayerList,
    DisplayString,
    Dropzone
  },

  // computed

  computed: {
    layers() {
      var layers = this.$store.state.ui.layers;

      return layers;
    },
    selectedLayer() {
      var layer = this.$store.state.ui.selectedLayer;

      return layer;
    },

    headlineFontSize() {
      return this.$store.state.headline.fontSize;
    },
    posX() {
      return this.$store.state.headline.posX;
    },
    posY() {
      return this.$store.state.headline.posY;
    },
    lineHeight() {
      return this.$store.state.headline.lineHeight;
    },
    headline() {
      return this.$store.state.headline.headline;
    },
    fontFiles() {
      return this.$store.state.headline.fontFiles;
    },

    ModalSelectFontVisible() {
      return this.$store.state.ui.ModalSelectFont.visible;
    },
    imageW() {
      return this.$store.state.image.w;
    },
    currentFont() {
      var cf = this.$store.state.headline.currentFont;
      return cf;
    },
    imageRotationX() {
      var r = this.$store.state.image.rotation.x;
    },
    imageRotationY() {
      var r = this.$store.state.image.rotation.y;
    },
    imageRotationZ() {
      var r = this.$store.state.image.rotation.z;
    }
  },
  created: function() {},

  // Methods

  methods: {
    doSomethingStupid() {
      console.log("i've boiled your dog");
    },
    updateFontSize(e) {
      this.$store.commit("updateFontSize", e.target.value);
    },
    updateLineHeight(e) {
      this.$store.commit("updateLineHeight", e.target.value);
    },
    updateHeadline(e) {
      this.$store.commit("updateHeadline", e.target.value);
    },
    updateSelectedLayer() {
      this.$store.commit("updateSelectedLayer");
    },
    toggleFontsModal() {
      this.$store.commit("toggleFontsModal");
    },
    toggleImagesModal() {
      this.$store.commit("toggleImagesModal");
    },
    updateCurrentFont(val) {
      this.$store.commit("updateCurrentFont", val);
    },
    updateImageW(e) {
      this.$store.commit("updateImageW", e.target.value);
    },

    updateImageRotationX(e) {
      this.$store.commit("updateImageRotationX", e.target.value);
    },
    updateImageRotationY(e) {
      this.$store.commit("updateImageRotationY", e.target.value);
    },
    updateImageRotationZ(e) {
      this.$store.commit("updateImageRotationZ", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
#ui {
  position: fixed;
  left: 0;
  top: 0;
  width: $uiWidth;
  background: $uiBG;
  height: 100vh;

  .controller-label {
    font-size: $uiText;
  }
}
</style>
