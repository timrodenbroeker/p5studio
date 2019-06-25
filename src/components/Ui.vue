<template>
  <div id="ui">
    <div class="branding" style="margin-bottom: 30px;">
      <h1>
        p5studio
        <sup>0.0.1</sup>
      </h1>
    </div>

    <LayerList
      v-bind:update="updateSelectedLayer"
      label="layer"
      v-bind:options="layers"
      v-bind:selected="selectedLayer"
    ></LayerList>

    <!-- <Tabs v-model="layers"></Tabs> -->

    <Group name="headline" v-if="layers[selectedLayer] == 'TEXT'">
      <!-- <Position label="Position" v-bind:posX="posX" v-bind:posY="posY"/> -->
      <TextArea
        v-bind:rows="3"
        label="headline"
        :value="headline"
        v-bind:text="headline"
        v-bind:update="updateHeadline"
      />

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
      <ColorList
        label="COLOR"
        v-bind:colors="textColors"
        v-bind:selectedColor="textColor"
        v-bind:updateSelectedColor="updateTextColor"
      />

      <!-- <DropDown label="Font" v-bind:options="fontFiles" :update="updateCurrentFont()"/> -->

      <DisplayString label="FONT" v-bind:text="currentFont"></DisplayString>

      <Button v-bind:doThis="toggleFontsModal" label="Select Font" text="Open Library"/>

      <TextAlign label="Align"/>
    </Group>
    <!-- 
    <Group name="Subline" v-if="layers[selectedLayer] == 'TEXT'">
      <TextArea
        v-bind:rows="3"
        label="subline"
        :value="subline"
        v-bind:text="subline"
        v-bind:update="updateSubline"
      />
    </Group>-->
    <Group name="Image" v-if="layers[selectedLayer] == 'IMAGE'">
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
import ColorList from "./ui/reusableComponents/color/ColorList.vue";
import Group from "./ui/reusableComponents/group/Group.vue";
import LayerList from "./ui/reusableComponents/layerlist/LayerList.vue";
import DisplayString from "./ui/reusableComponents/display/DisplayString.vue";
import Dropzone from "./ui/reusableComponents/dropzone/Dropzone.vue";
import TextAlign from "./ui/reusableComponents/textalign/TextAlign.vue";

export default {
  name: "Ui",
  components: {
    RangeSlider,
    TextArea,
    Button,
    Group,
    LayerList,
    DisplayString,
    Dropzone,
    TextAlign,
    ColorList
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
    subline() {
      return this.$store.state.subline.text;
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
      return r;
    },
    imageRotationY() {
      var r = this.$store.state.image.rotation.y;
      return r;
    },
    imageRotationZ() {
      var r = this.$store.state.image.rotation.z;
      return r;
    }
  },
  created: function() {},

  // Methods

  methods: {
    updateTextColor(index) {
      this.$store.commit("updateTextColor", index);
    },
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
    updateSubline(e) {
      this.$store.commit("updateSubline", e.target.value);
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
  z-index: 99999;
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
