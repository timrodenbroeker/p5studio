<template>
  <div id="posterWrapper">
    <div id="poster">
      <vue-p5
        @setup="setup"
        @draw="draw"
        @preload="preload"
        @mousemoved="mouseMoved"
        @mousedragged="mouseDragged"
        @mousepressed="mousePressed"
        @mousereleased="mouseReleased"
      ></vue-p5>
    </div>
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  name: "PosterP5",
  components: {
    "vue-p5": VueP5
  },
  computed: {
    posterW() {
      return this.$store.state.poster.posterW;
    },
    posterH() {
      return this.$store.state.poster.posterW;
    },
    headline() {
      return this.$store.state.headline.headline;
    },
    headlinePosX() {
      return this.$store.state.headline.posX;
    },
    headlinePosY() {
      return this.$store.state.headline.posY;
    },
    fontSize() {
      return this.$store.state.headline.fontSize;
    },
    lineHeight() {
      return this.$store.state.headline.lineHeight;
    },
    fontfiles() {
      return this.$store.state.headline.fontFiles;
    },
    currentFont() {
      var result = this.$store.state.headline.currentFont;
      console.log(result);
      return result;
    },
    selectedColor() {
      var c = this.$store.state.colors.colors[
        this.$store.state.colors.selectedColor
      ];

      return c;
    }
  },
  methods: {
    preload(c) {
      var path = "fonts/Pilowlava-Regular.otf";

      c.font = c.loadFont(path);
    },
    setup(c) {
      c.dragging = false;
      c.offsetX = 0;
      c.offsetY = 0;
      c.createCanvas(586, 810);
      // c.textFont(c.font);
    },
    draw(c) {
      // Adjust location if being dragged
      if (c.dragging) {
        this.$store.commit("updateHeadlinePosX", c.mouseX + c.offsetX);
        this.$store.commit("updateHeadlinePosY", c.mouseY + c.offsetY);
      }

      c.background(this.selectedColor);

      c.fill("#ffffff");

      var fs = Math.floor(this.fontSize);
      var lh = this.lineHeight;
      c.textFont(c.font);
      c.textSize(fs);
      c.textLeading(fs * lh);
      c.textAlign(c.LEFT, c.TOP);
      c.push();
      c.translate(this.headlinePosX, this.headlinePosY);
      c.text(this.headline, 20, 20);
      c.pop();
    },
    mouseMoved(c) {
      // console.log("mouse moved" + c.mouseX);
    },
    mouseDragged(c) {},
    mouseReleased(c) {
      // Quit dragging
      c.dragging = false;
    },
    mousePressed(c) {
      if (
        c.mouseX > 0 &&
        c.mouseX < this.posterW &&
        c.mouseY > 0 &&
        c.mouseY < this.posterH
      ) {
        c.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        c.offsetX = this.headlinePosX - c.mouseX;
        c.offsetY = this.headlinePosY - c.mouseY;
      }
    }
  },
  render(h) {
    return h(VueP5, { on: this });
  }
};
</script>

<style scoped lang="scss">
#poster {
  width: 100%;
  max-width: $posterW;
  max-height: $posterH;

  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  canvas {
    width: 100% !important;
  }
}
</style>
