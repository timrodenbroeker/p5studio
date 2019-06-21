<template>
  <div id="ui">
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
      <Position label="Position" v-bind:posX="posX" v-bind:posY="posY"/>
      <Button label="Select" text="Open Library"/>
      <RangeSlider
        label="Width"
        v-bind:min="0"
        v-bind:max="1000"
        v-bind:val="parseInt(imageW)"
        v-bind:step="1"
        v-bind:update="updateImageW"
      />
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
import LayerList from "./ui/elements/layerlist/LayerList.vue";

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
    layers() {
      var layers = this.$store.state.ui.layers;
      console.log(layers);
      return layers;
    },
    selectedLayer() {
      var layer = this.$store.state.ui.selectedLayer;
      console.log("currentLayer: " + layer);
      return layer;
    },

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

    ModalSelectFontVisible() {
      return this.$store.state.ui.ModalSelectFont.visible;
    },
    imageW() {
      return this.$store.state.image.w;
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
    updateSelectedLayer() {
      console.log("aa");
      this.$store.commit("updateSelectedLayer");
    },
    toggleVisibility() {
      this.$store.commit("toggleFontsModal");
    },
    updateCurrentFont(val) {
      this.$store.commit("updateCurrentFont", val);
    },
    updateImageW(e) {
      this.$store.commit("updateImageW", e.target.value);
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
