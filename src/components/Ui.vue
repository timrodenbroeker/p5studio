<template>
  <div id="ui">
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
    <Group name="Arrangement">
      <LayerList
        v-bind:update="updateSelectedLayer"
        label="layers"
        v-bind:options="layers"
        v-bind:selected="selectedLayer"
      ></LayerList>
    </Group>
    <Group name="HEADLINE">
      <Position label="Position" v-bind:posX="posX" v-bind:posY="posY"/>
      <RangeSlider
        label="fontsize"
        v-bind:min="10"
        v-bind:max="350"
        v-bind:val="parseInt(fontSize)"
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

      <DropDown label="Font" v-bind:options="fontFiles" :change="updateCurrentFont()"/>

      <Button v-bind:doThis="toggleVisibility" label="Select Font" text="Open Library"/>
    </Group>
    <Group name="Image">
      <Button label="Select" text="Open Library"/>
      <RangeSlider label="Width"/>
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
import LayerList from "./ui/layerlist/LayerList.vue";

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
    LayerList
  },

  // computed

  computed: {
    fontSize() {
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
    ModalSelectFontVisible() {
      return this.$store.state.ui.ModalSelectFont.visible;
    },
    layers() {
      var layers = this.$store.state.ui.layers;
      console.log(layers);
      return layers;
    },
    selectedLayer() {
      var layer = this.$store.state.ui.selectedLayer;
      console.log("currentLayer: " + layer);
      return layer;
    }
  },
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
    updateTextColor(index) {
      this.$store.commit("updateTextColor", index);
    },
    toggleVisibility() {
      this.$store.commit("toggleFontsModal");
    },
    updateCurrentFont(val) {
      this.$store.commit("updateCurrentFont", val);
    },
    updateSelectedLayer() {
      console.log("aa");
      this.$store.commit("updateSelectedLayer");
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
