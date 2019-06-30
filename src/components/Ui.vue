<template>
  <div id="ui">
    <div class="branding" style="margin-bottom: 30px;">
      <h1>
        p5studio
        <sup>{{version}}</sup>
      </h1>
    </div>

    <LayerList
      v-bind:update="updateSelectedLayer"
      label="layer"
      v-bind:options="layers"
      v-bind:selectedLayer="selectedLayer"
    ></LayerList>

    <!-- <Tabs v-model="layers"></Tabs> -->

    <Group name="HEADLINE" v-if="selectedLayer == 'HEADLINE'">
      <Position label="Position" v-bind:posX="headlinePosX" v-bind:posY="headlinePosY" />
      <TextArea
        v-bind:rows="3"
        label="text"
        :value="headlineContent"
        v-bind:text="headlineContent"
        v-bind:update="updateHeadlineContent"
      />

      <RangeSlider
        label="fontsize"
        v-bind:min="10"
        v-bind:max="350"
        v-bind:val="parseInt(headlineFontSize)"
        v-bind:update="updateHeadlineFontSize"
      />
      <RangeSlider
        label="lineheight"
        v-bind:min="0"
        v-bind:max="2"
        v-bind:val="parseFloat(headlineLineHeight)"
        v-bind:step="0.01"
        v-bind:update="updateHeadlineLineHeight"
      />
      <ColorList
        label="COLOR"
        v-bind:colors="colors"
        v-bind:selectedColor="headlineTextColor"
        v-bind:updateSelectedColor="updateHeadlineColor"
      />

      <!-- <DropDown label="Font" v-bind:options="fontFiles" :update="updateCurrentFont()"/> -->

      <DisplayString label="FONT" v-bind:text="headlineCurrentFont"></DisplayString>

      <Button v-bind:doThis="toggleFontsModal" label="Select Font" text="Open Library" />

      <TextAlign
        label="Align"
        v-bind:setAlignment="updateHeadlineTextAlign"
        v-bind:alignment="headlineTextAlign"
      />
    </Group>

    <Group name="SUBLINE" v-if="selectedLayer == 'SUBLINE'">
      <Position label="Position" v-bind:posX="sublinePosX" v-bind:posY="sublinePosY" />
      <TextArea
        v-bind:rows="3"
        label="text"
        :value="sublineContent"
        v-bind:text="sublineContent"
        v-bind:update="updateSublineContent"
      />

      <RangeSlider
        label="fontsize"
        v-bind:min="10"
        v-bind:max="350"
        v-bind:val="parseInt(sublineFontSize)"
        v-bind:update="updateSublineFontSize"
      />
      <RangeSlider
        label="lineheight"
        v-bind:min="0"
        v-bind:max="2"
        v-bind:val="parseFloat(sublineLineHeight)"
        v-bind:step="0.01"
        v-bind:update="updateSublineLineHeight"
      />
      <!-- <ColorList
        label="COLOR"
        v-bind:colors="colors"
        v-bind:selectedColor="sublineTextColor"
        v-bind:updateSelectedColor="updateSublineColor"
      />-->

      <!-- <DropDown label="Font" v-bind:options="fontFiles" :update="updateCurrentFont()"/> -->

      <DisplayString label="FONT" v-bind:text="sublineCurrentFont"></DisplayString>

      <!-- <Button v-bind:doThis="toggleFontsModal" label="Select Font" text="Open Library"/> -->

      <TextAlign
        label="Align"
        v-bind:setAlignment="updateSublineTextAlign"
        v-bind:alignment="sublineTextAlign"
      />
    </Group>

    <Group name="Image" v-if="selectedLayer == 'IMAGE'">
      <Position label="Position" v-bind:posX="imagePosX" v-bind:posY="imagePosY" />
      <Dropzone label="upload" text="drop a file"></Dropzone>
      <!-- <Position label="Position" v-bind:posX="posX" v-bind:posY="posY"/> -->
      <Button label="Select" text="Open Library" v-bind:doThis="toggleImagesModal" />
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

    <Group name="Image2" v-if="selectedLayer == 'IMAGE2'">
      <Position label="Position" v-bind:posX="image2PosX" v-bind:posY="image2PosY" />

      <!-- <Position label="Position" v-bind:posX="posX" v-bind:posY="posY"/> -->
      <Button label="Select" text="Open Library" v-bind:doThis="toggleImagesModal" />
      <RangeSlider
        label="Width"
        v-bind:min="0"
        v-bind:max="1700"
        v-bind:val="parseInt(image2W)"
        v-bind:step="1"
        v-bind:update="updateImage2W"
      />

      <RangeSlider
        label="Rotate X"
        v-bind:min="0"
        v-bind:max="360"
        v-bind:val="parseInt(image2RotationX)"
        v-bind:step="1"
        v-bind:update="updateImage2RotationX"
      />
      <RangeSlider
        label="Rotate Y"
        v-bind:min="0"
        v-bind:max="360"
        v-bind:val="parseInt(image2RotationY)"
        v-bind:step="1"
        v-bind:update="updateImage2RotationY"
      />
      <RangeSlider
        label="Rotate Z"
        v-bind:min="0"
        v-bind:max="360"
        v-bind:val="parseInt(image2RotationZ)"
        v-bind:step="1"
        v-bind:update="updateImage2RotationZ"
      />
    </Group>

    <Group name="GRID" v-if="selectedLayer  == 'GRID'">
      <Checkbox label="Show Grid" v-bind:checked="gridVisible" v-bind:toggle="toggleGridVisibility"></Checkbox>
      <ColorList
        label="COLORS"
        v-bind:colors="colors"
        v-bind:selectedColor="gridColor"
        v-bind:updateSelectedColor="updateGridColor"
      />

      <RangeSlider
        label="ROWS"
        v-bind:update="updateGridRows"
        v-bind:min="1"
        v-bind:max="48"
        v-bind:val="parseInt(1)"
        v-bind:step="1"
      />
      <RangeSlider
        label="COLS"
        v-bind:update="updateGridCols"
        v-bind:min="1"
        v-bind:max="48"
        v-bind:val="parseInt(1)"
        v-bind:step="1"
      />
    </Group>

    <Group name="BASE" v-if="selectedLayer == 'BASE'">
      <ColorList
        label="Background"
        v-bind:colors="colors"
        v-bind:selectedColor="selectedColor"
        v-bind:updateSelectedColor="updateSelectedColor"
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
import Checkbox from "./ui/reusableComponents/checkbox/Checkbox.vue";
import Position from "./ui/reusableComponents/position/Position.vue";

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
    Checkbox,
    TextAlign,
    ColorList,
    Position
  },

  // computed

  computed: {
    version() {
      return this.$store.state.info.version;
    },

    colors() {
      return this.$store.state.colors.colors;
    },

    selectedColor() {
      return this.$store.state.colors.background.selectedColor;
    },

    fontFiles() {
      return this.$store.state.headline.fontFiles;
    },

    ////////////////////////////////////////////////////////
    // HEADLINE
    ////////////////////////////////////////////////////////

    headlineTextColor() {
      return this.$store.state.colors.text.selectedColor;
    },

    headlineFontSize() {
      return this.$store.state.headline.fontSize;
    },
    headlinePosX() {
      return this.$store.state.headline.pos.x;
    },
    headlinePosY() {
      return this.$store.state.headline.pos.y;
    },

    headlineLineHeight() {
      return this.$store.state.headline.lineHeight;
    },
    headlineContent() {
      return this.$store.state.headline.content;
    },

    headlineCurrentFont() {
      var cf = this.$store.state.headline.currentFont;
      return cf;
    },

    headlineTextAlign() {
      return this.$store.state.headline.align;
    },

    ////////////////////////////////////////////////////////
    // SUBLINE
    ////////////////////////////////////////////////////////

    sublineTextColor() {
      return this.$store.state.colors.text.selectedColor;
    },

    sublineFontSize() {
      return this.$store.state.subline.fontSize;
    },
    sublinePosX() {
      return this.$store.state.subline.pos.x;
    },
    sublinePosY() {
      return this.$store.state.subline.pos.y;
    },

    sublineLineHeight() {
      return this.$store.state.subline.lineHeight;
    },
    sublineContent() {
      return this.$store.state.subline.content;
    },

    sublineCurrentFont() {
      var cf = this.$store.state.subline.currentFont;
      return cf;
    },

    sublineTextAlign() {
      return this.$store.state.subline.align;
    },

    ////////////////////////////////////////////////////////
    // LAYERS
    ////////////////////////////////////////////////////////

    layers() {
      var layers = this.$store.state.ui.layers;
      return layers;
    },
    selectedLayer() {
      return this.$store.state.ui.selectedLayer;
    },

    ////////////////////////////////////////////////////////
    // IMAGE
    ////////////////////////////////////////////////////////
    imagePosX() {
      return this.$store.state.image.pos.x;
    },
    imagePosY() {
      return this.$store.state.image.pos.y;
    },

    ModalSelectFontVisible() {
      return this.$store.state.ui.ModalSelectFont.visible;
    },
    imageW() {
      return this.$store.state.image.w;
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
    },

    ////////////////////////////////////////////////////////
    // IMAGE 2
    ////////////////////////////////////////////////////////
    image2PosX() {
      return this.$store.state.image2.pos.x;
    },
    image2PosY() {
      return this.$store.state.image2.pos.y;
    },

    image2W() {
      return this.$store.state.image2.w;
    },

    image2RotationX() {
      var r = this.$store.state.image2.rotation.x;
      return r;
    },
    image2RotationY() {
      var r = this.$store.state.image2.rotation.y;
      return r;
    },
    image2RotationZ() {
      var r = this.$store.state.image2.rotation.z;
      return r;
    },

    ////////////////////////////////////////////////////////
    // GRID
    ////////////////////////////////////////////////////////

    gridVisible() {
      return this.$store.state.grid.visible;
    },

    gridColor() {
      return this.$store.state.colors.grid.selectedColor;
    }
  },
  created: function() {},

  // Methods

  methods: {
    ////////////////////////////////////////////////////////
    // HEADLINE
    ////////////////////////////////////////////////////////

    updateHeadlineColor(val) {
      this.$store.commit("updateHeadlineColor", val);
    },
    updateHeadlineFontSize(e) {
      this.$store.commit("updateHeadlineFontSize", e.target.value);
    },
    updateHeadlineLineHeight(e) {
      this.$store.commit("updateHeadlineLineHeight", e.target.value);
    },
    updateHeadlineContent(e) {
      this.$store.commit("updateHeadlineContent", e.target.value);
    },
    updateHeadlineCurrentFont(val) {
      this.$store.commit("updateHeadlineCurrentFont", val);
    },
    updateHeadlineTextAlign(val) {
      this.$store.commit("updateHeadlineTextAlign", val);
    },

    ////////////////////////////////////////////////////////
    // / HEADLINE
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    // SUBLINE
    ////////////////////////////////////////////////////////

    updateSublineColor(val) {
      this.$store.commit("updateSublineColor", val);
    },
    updateSublineFontSize(e) {
      this.$store.commit("updateSublineFontSize", e.target.value);
    },
    updateSublineLineHeight(e) {
      this.$store.commit("updateSublineLineHeight", e.target.value);
    },
    updateSublineContent(e) {
      this.$store.commit("updateSublineContent", e.target.value);
    },
    updateSublineCurrentFont(val) {
      this.$store.commit("updateSublineCurrentFont", val);
    },
    updateSublineTextAlign(val) {
      this.$store.commit("updateSublineTextAlign", val);
    },

    ////////////////////////////////////////////////////////
    // / SUBLINE
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    // IMAGE
    ////////////////////////////////////////////////////////

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
    },

    ////////////////////////////////////////////////////////
    // IMAGE 2
    ////////////////////////////////////////////////////////

    updateImage2W(e) {
      this.$store.commit("updateImage2W", e.target.value);
    },

    updateImage2RotationX(e) {
      this.$store.commit("updateImage2RotationX", e.target.value);
    },
    updateImage2RotationY(e) {
      this.$store.commit("updateImage2RotationY", e.target.value);
    },
    updateImage2RotationZ(e) {
      this.$store.commit("updateImage2RotationZ", e.target.value);
    },

    ////////////////////////////////////////////////////////
    // /IMAGE 2
    ////////////////////////////////////////////////////////

    updateSelectedColor(index) {
      this.$store.commit("updateSelectedColor", index);
    },

    doSomethingStupid() {
      console.log("i've boiled your dog");
    },

    updateSelectedLayer(val) {
      this.$store.commit("updateSelectedLayer", val.name);
    },
    toggleFontsModal() {
      this.$store.commit("toggleFontsModal");
    },
    toggleImagesModal() {
      this.$store.commit("toggleImagesModal");
    },

    updateGridCols(val) {
      this.$store.commit("updateGridCols", val);
    },
    updateGridColor(val) {
      this.$store.commit("updateGridColor", val);
    },
    updateGridRows(val) {
      this.$store.commit("updateGridRows", val);
    },
    toggleGridVisibility() {
      this.$store.commit("toggleGridVisibility");
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
