<template>
  <div id="wrapper">
    <div id="poster">
      <vue-p5
        @setup="setup"
        @draw="draw"
        @preload="preload"
        @mousepressed="mousePressed"
        @mousereleased="mouseReleased"
        v-once
      ></vue-p5>
    </div>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
import CanvasRecorder from "../../utils/canvasRecorder";

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
    imageRotationX() {
      return this.$store.state.image.rotation.x;
    },
    imageRotationY() {
      return this.$store.state.image.rotation.y;
    },
    imageRotationZ() {
      return this.$store.state.image.rotation.z;
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

    currentImage() {
      var result = this.$store.state.image.selectedImage;

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

    updateImage() {
      return this.$store.state.image.updateImage;
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

      c.pathToImages = "images/";
      c.currentImagePath = c.pathToImages + this.currentImage;
      c.img = c.loadImage(c.currentImagePath);
    },
    setup(c) {
      // PGraphics: Image
      c.pgImage = c.createGraphics(this.width, this.height, c.WEBGL);
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

      // Create a capturer that exports a WebM video
      // c.capturer = new CCapture({ format: "webm" });
      c.recorder = new CanvasRecorder(c.canvas);
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
      // LOAD NEW IMAGE
      ////////////////////////////////////////////////////////
      if (this.updateImage == true) {
        c.currentImagePath = c.pathToImages + this.currentImage;

        c.img = c.loadImage(c.currentImagePath);

        this.$store.commit("updateImageFalse");
      }

      ////////////////////////////////////////////////////////
      // DRAGGING
      ////////////////////////////////////////////////////////
      if (c.dragging) {
        var newPos;
        if (this.selectedLayer == "TEXT") {
          newPos = {
            x: Math.floor(c.mouseX + c.headlineOffsetX),
            y: Math.floor(c.mouseY + c.headlineOffsetY)
          };
          this.$store.commit("updateHeadlinePos", newPos);
        } else if (this.selectedLayer == "IMAGE") {
          newPos = {
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

      // c.pgImage.directionalLight(255, 255, 255, 1, -1, 0);
      c.pgImage.imageMode(c.CENTER);
      c.pgImage.push();
      c.pgImage.translate(this.imagePos.x, this.imagePos.y);
      c.pgImage.translate(-c.width / 2, -c.height / 2);
      // c.pgImage.rotate();

      c.pgImage.texture(c.img);
      c.pgImage.rotateX(c.radians(this.imageRotationX));
      c.pgImage.rotateY(c.radians(this.imageRotationY));
      c.pgImage.rotateZ(c.radians(this.imageRotationZ));
      c.pgImage.plane(this.imageW, this.imageW * ratio);
      // c.pgImage.image(c.img, 0, 0, this.imageW, this.imageW * ratio);

      c.img.filter(c.GRAY);
      // c.pgImage.tint(0, 153, 204); // Tint blue
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

      ////////////////////////////////////////////////////////
      // RECORD CANVAS
      ////////////////////////////////////////////////////////

      if (c.frameCount == 10) {
        c.recorder.start();
      }
      if (c.frameCount == 60) {
        c.recorder.stop();
        c.recorder.save("busy_motion.webm");
      }
    },
    // mouseMoved(c) {},
    // mouseDragged(c) {},
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
