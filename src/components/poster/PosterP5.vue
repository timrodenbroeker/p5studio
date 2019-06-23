<template>
  <div id="wrapper">
    <div id="poster">
      <vue-p5
        @setup="setup"
        @draw="draw"
        @preload="preload"
        @mousemoved="mouseMoved"
        @mousedragged="mouseDragged"
        @mousepressed="mousePressed"
        @mousereleased="mouseReleased"
        v-once
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
    // DIMENSIONS

    width() {
      return this.$store.state.poster.w;
    },
    height() {
      return this.$store.state.poster.h;
    },

    // HEADLINE

    headlinePos() {
      return this.$store.state.headline.pos;
    },

    imagePos() {
      return this.$store.state.image.pos;
    },

    imageW() {
      return this.$store.state.image.w;
    },

    headline() {
      return this.$store.state.headline.headline;
    },

    fontSize() {
      return this.$store.state.headline.fontSize;
    },
    lineHeight() {
      return this.$store.state.headline.lineHeight;
    },

    // FONTS

    fontfiles() {
      return this.$store.state.headline.fontFiles;
    },
    currentFont() {
      var result = this.$store.state.headline.currentFont;
      return result;
    },

    // COLORS
    selectedColor() {
      var c = this.$store.state.colors.background.colors[
        this.$store.state.colors.background.selectedColor
      ];
      return c;
    },

    textColor() {
      var c = this.$store.state.colors.text.colors[
        this.$store.state.colors.text.selectedColor
      ];
      return c;
    },

    layers() {
      var layers = this.$store.state.ui.layers;
      return layers;
    },
    selectedLayer() {
      var layers = this.$store.state.ui.layers;
      var layerIndex = this.$store.state.ui.selectedLayer;
      var selectedLayer = layers[layerIndex];
      return selectedLayer;
    },
    updateFont() {
      return this.$store.state.headline.updateFont;
    },

    grid() {
      return this.$store.state.grid;
    },

    gridColor() {
      var c = this.$store.state.colors.grid.colors[
        this.$store.state.colors.grid.selectedColor
      ];
      return c;
    }

    // LAYERS

    // IMAGE
  },
  methods: {
    preload(c) {
      c.pathToFonts = "fonts/";
      c.currentFontPath = c.pathToFonts + this.currentFont;
      c.font = c.loadFont(c.currentFontPath);

      c.img = c.loadImage("images/6798728194_8967ebd8b2_o.jpg");
    },
    setup(c) {
      // PGraphics: Image
      c.pgImage = c.createGraphics(this.width, this.height);
      c.pgText = c.createGraphics(this.width, this.height);
      c.pgGrid = c.createGraphics(this.width, this.height);
      // c.frameRate(1);
      c.dragging = false;
      c.imageOffsetX = 0;
      c.imageOffsetY = 0;
      c.headlineOffsetX = 0;
      c.headlineOffsetY = 0;
      c.createCanvas(586, 810);
      c.imageMode(c.CENTER);
      // c.textFont(c.font);
    },
    draw(c) {
      ////////////////////////////////////////////////////////
      // BACKGROUND
      ////////////////////////////////////////////////////////
      c.background(this.selectedColor);

      ////////////////////////////////////////////////////////
      // LOAD NEW FONT
      ////////////////////////////////////////////////////////

      if (this.updateFont == true) {
        c.currentFontPath = c.pathToFonts + this.currentFont;
        c.font = c.loadFont(c.currentFontPath);

        this.$store.commit("updateFontFalse");
      }

      ////////////////////////////////////////////////////////
      // DRAGGING
      ////////////////////////////////////////////////////////
      if (c.dragging) {
        if (this.selectedLayer == "TEXT") {
          var newPos = {
            x: Math.floor(c.mouseX + c.headlineOffsetX),
            y: Math.floor(c.mouseY + c.headlineOffsetY)
          };
          this.$store.commit("updateHeadlinePos", newPos);
        } else if (this.selectedLayer == "IMAGE") {
          var newPos = {
            x: Math.floor(c.mouseX + c.imageOffsetX),
            y: Math.floor(c.mouseY + c.imageOffsetY)
          };

          this.$store.commit("updateImagePos", newPos);
        }
      }

      ////////////////////////////////////////////////////////
      // DISPLAY IMAGE
      ////////////////////////////////////////////////////////

      // Calculate Aspect Ration
      var ratio = c.img.height / c.img.width;
      c.pgImage.clear();
      c.pgImage.imageMode(c.CENTER);
      c.pgImage.push();
      c.pgImage.translate(this.imagePos.x, this.imagePos.y);
      c.pgImage.image(c.img, 0, 0, this.imageW, this.imageW * ratio);
      c.pgImage.pop();

      ////////////////////////////////////////////////////////
      // DISPLAY GRID
      ////////////////////////////////////////////////////////
      c.pgGrid.clear();
      if (this.grid.visible === true) {
        var cols = this.grid.cols;
        var rows = this.grid.rows;
        var stepX = c.width / cols;
        var stepY = c.height / rows;

        for (var y = 1; y < rows; y++) {
          for (var x = 1; x < cols; x++) {
            c.pgGrid.noFill();
            c.pgGrid.stroke(this.gridColor);
            c.pgGrid.strokeWeight(1);
            c.pgGrid.push();

            c.pgGrid.line(x * stepX, 0, x * stepX, c.height);
            c.pgGrid.pop();
            c.pgGrid.push();
            c.pgGrid.line(0, y * stepY, c.width, y * stepY);
            c.pgGrid.pop();
          }
        }
      }

      ////////////////////////////////////////////////////////
      // DISPLAY TEXT
      ////////////////////////////////////////////////////////
      c.pgText.clear();
      c.pgText.fill(this.textColor);
      c.pgText.noStroke();
      var fs = Math.floor(this.fontSize);
      var lh = this.lineHeight;
      c.pgText.textFont(c.font);
      c.pgText.textSize(fs);
      c.pgText.textLeading(fs * lh);
      c.pgText.textAlign(c.LEFT, c.TOP);
      c.pgText.push();
      c.pgText.translate(this.headlinePos.x, this.headlinePos.y);
      c.pgText.text(this.headline, 20, 20);
      c.pgText.pop();

      // DRAW IMAGELAYER
      c.image(c.pgImage, this.width / 2, this.height / 2);
      c.image(c.pgGrid, this.width / 2, this.height / 2);
      c.image(c.pgText, this.width / 2, this.height / 2);
    },
    mouseMoved(c) {},
    mouseDragged(c) {},
    mouseReleased(c) {
      // Quit dragging
      c.dragging = false;
    },
    mousePressed(c) {
      if (
        c.mouseX > 0 &&
        c.mouseX < this.width &&
        c.mouseY > 0 &&
        c.mouseY < this.height
      ) {
        c.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle

        if (this.selectedLayer == "TEXT") {
          c.headlineOffsetX = this.headlinePos.x - c.mouseX;
          c.headlineOffsetY = this.headlinePos.y - c.mouseY;
        } else if (this.selectedLayer == "IMAGE") {
          c.imageffsetX = this.imagePosX - c.mouseX;
          c.imageffsetY = this.imagePosY - c.mouseY;
        }
      }
    }
  },
  render(h) {
    return h(VueP5, { on: this });
  }
};
</script>

<style scoped lang="scss">
</style>
