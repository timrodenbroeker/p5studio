<template>
  <div id="wrapper">
    <div id="poster" v-bind:class="{ ready: ready }">
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
// import VueP5 from "./VueP5";
import CanvasRecorder from "../../utils/canvasRecorder";
// import "p5/lib/addons/p5.sound";
// import * as p5moduleDom from "p5/lib/addons/p5.dom";
// import p5 from "p5";
// import "p5/lib/addons/p5.sound";

export default {
  name: "PosterP5",
  components: {
    "vue-p5": VueP5
  },
  computed: {
    fontfiles() {
      return this.$store.state.headline.fontFiles;
    },

    ////////////////////////////////////////////////////////
    // HEADLINE
    ////////////////////////////////////////////////////////

    headlinePos() {
      return this.$store.state.headline.pos;
    },

    headlineContent() {
      return this.$store.state.headline.content;
    },

    headlineFontSize() {
      return this.$store.state.headline.fontSize;
    },
    headlineLineHeight() {
      return this.$store.state.headline.lineHeight;
    },

    headlineTextAlign() {
      return this.$store.state.headline.align;
    },

    headlineCurrentFont() {
      var result = this.$store.state.headline.currentFont;
      return result;
    },

    headlineTextColor() {
      var c = this.$store.state.colors.text.selectedColor;

      return c;
    },
    headlineUpdateFont() {
      return this.$store.state.headline.updateFont;
    },

    ////////////////////////////////////////////////////////
    // SUBLINE
    ////////////////////////////////////////////////////////

    sublinePos() {
      return this.$store.state.subline.pos;
    },

    sublineContent() {
      return this.$store.state.subline.content;
    },

    sublineFontSize() {
      return this.$store.state.subline.fontSize;
    },
    sublineLineHeight() {
      return this.$store.state.subline.lineHeight;
    },

    sublineTextAlign() {
      return this.$store.state.subline.align;
    },

    sublineCurrentFont() {
      var result = this.$store.state.subline.currentFont;
      return result;
    },

    sublineTextColor() {
      var c = this.$store.state.colors.text.selectedColor;

      return c;
    },
    sublineUpdateFont() {
      return this.$store.state.subline.updateFont;
    },

    ////////////////////////////////////////////////////////
    // GENERAL
    ////////////////////////////////////////////////////////

    width() {
      return this.$store.state.poster.w;
    },
    height() {
      return this.$store.state.poster.h;
    },

    ////////////////////////////////////////////////////////
    // IMAGE
    ////////////////////////////////////////////////////////

    currentImage() {
      var result = this.$store.state.image.selectedImage;

      return result;
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

    updateImage() {
      return this.$store.state.image.updateImage;
    },

    ////////////////////////////////////////////////////////
    // IMAGE 2
    ////////////////////////////////////////////////////////

    currentImage2() {
      var result = this.$store.state.image2.selectedImage;

      return result;
    },
    image2Pos() {
      return this.$store.state.image2.pos;
    },
    image2RotationX() {
      return this.$store.state.image2.rotation.x;
    },
    image2RotationY() {
      return this.$store.state.image2.rotation.y;
    },
    image2RotationZ() {
      return this.$store.state.image2.rotation.z;
    },

    image2W() {
      return this.$store.state.image2.w;
    },

    updateImage2() {
      return this.$store.state.image2.updateImage;
    },
    // FONTS

    ////////////////////////////////////////////////////////
    // HEADLINE
    ////////////////////////////////////////////////////////

    // COLORS
    selectedColor() {
      var c = this.$store.state.colors.background.selectedColor;

      return c;
    },

    layers() {
      var layers = this.$store.state.ui.layers;
      return layers;
    },
    selectedLayer() {
      var selectedLayer = this.$store.state.ui.selectedLayer;
      return selectedLayer;
    },
    draggable() {
      var selectedLayer = this.$store.state.ui.selectedLayer;
      if (selectedLayer == "TEXT" || selectedLayer == "IMAGE") return draggable;
    },

    grid() {
      return this.$store.state.grid;
    },

    gridColor() {
      var c = this.$store.state.colors.grid.selectedColor;
      return c;
    },
    recording() {
      return this.$store.state.render.record;
    },
    savePNG() {
      return this.$store.state.render.savePNG;
    },
    saveJPG() {
      return this.$store.state.render.saveJPG;
    },
    ready() {
      return this.$store.state.poster.ready;
    },
    checkLayerVisibility_IMAGE() {
      var layers = this.$store.state.ui.layers;
      let obj = layers.find(obj => obj.name == "IMAGE");
      return obj.visible;
    },
    checkLayerVisibility_IMAGE2() {
      var layers = this.$store.state.ui.layers;
      let obj = layers.find(obj => obj.name == "IMAGE2");
      return obj.visible;
    },
    checkLayerVisibility_HEADLINE() {
      var layers = this.$store.state.ui.layers;
      let obj = layers.find(obj => obj.name == "HEADLINE");
      return obj.visible;
    },
    checkLayerVisibility_SUBLINE() {
      var layers = this.$store.state.ui.layers;
      let obj = layers.find(obj => obj.name == "SUBLINE");
      return obj.visible;
    },

    checkLayerVisibility_GRID() {
      var layers = this.$store.state.ui.layers;
      let obj = layers.find(obj => obj.name == "GRID");
      return obj.visible;
    }

    // IMAGE
  },
  methods: {
    preload(c) {
      c.pathToFonts = "fonts/";

      // HEADLINE

      c.currentFontPath = c.pathToFonts + this.headlineCurrentFont;
      c.font = c.loadFont(c.currentFontPath);
      c.fontSecondary = c.loadFont(c.pathToFonts + "SpaceMono-Bold.ttf");

      // SUBLINE

      c.sublineFontPath = c.pathToFonts + this.sublineCurrentFont;
      c.sublineFont = c.loadFont(c.sublineFontPath);

      // IMAGES

      c.pathToImages = "images/";
      c.currentImagePath = c.pathToImages + this.currentImage;
      c.img = c.loadImage(c.currentImagePath);

      c.currentImage2Path = c.pathToImages + this.currentImage2;
      c.img2 = c.loadImage(c.currentImage2Path);
    },
    setup(c) {
      // c.pixelDensity(3);
      // PGraphics: Image
      c.pgImage = c.createGraphics(this.width, this.height, c.WEBGL);
      c.pgImage2 = c.createGraphics(this.width, this.height, c.WEBGL);
      c.pgText = c.createGraphics(this.width, this.height);
      c.pgGrid = c.createGraphics(this.width, this.height);
      // c.frameRate(1);
      c.dragging = false;
      c.imageOffsetX = 0;
      c.imageOffsetY = 0;
      c.image2OffsetX = 0;
      c.image2OffsetY = 0;
      c.headlineOffsetX = 0;
      c.headlineOffsetY = 0;
      c.sublineOffsetX = 0;
      c.sublineOffsetY = 0;
      c.createCanvas(586, 810);
      c.imageMode(c.CENTER);

      c.recordingStarted = false;
      // c.textFont(c.font);

      // Create a capturer that exports a WebM video
      // c.capturer = new CCapture({ format: "webm" });
      c.recorder = new CanvasRecorder(c.canvas);
      this.$store.commit("updateReadyStatus");
    },
    draw(c) {
      ////////////////////////////////////////////////////////
      // BACKGROUND
      ////////////////////////////////////////////////////////

      c.background(this.selectedColor);

      ////////////////////////////////////////////////////////
      // LOAD NEW FONT
      ////////////////////////////////////////////////////////

      if (this.headlineUpdateFont == true) {
        c.currentFontPath = c.pathToFonts + this.headlineCurrentFont;
        console.log(c.currentFontPath);
        c.font = c.loadFont(c.currentFontPath);

        this.$store.commit("updateHeadlineFontFalse");
      }
      ////////////////////////////////////////////////////////
      // LOAD NEW IMAGE
      ////////////////////////////////////////////////////////
      if (this.updateImage == true) {
        c.currentImagePath = c.pathToImages + this.currentImage;
        c.img = c.loadImage(c.currentImagePath);
        this.$store.commit("updateImageFalse");
      }

      if (this.updateImage2 == true) {
        c.currentImage2Path = c.pathToImages + this.currentImage2;
        c.img2 = c.loadImage(c.currentImage2Path);
        this.$store.commit("updateImage2False");
      }

      ////////////////////////////////////////////////////////
      // DRAGGING
      ////////////////////////////////////////////////////////
      if (c.dragging) {
        // HEADLINE
        if (this.selectedLayer == "HEADLINE") {
          var newPos;
          newPos = {
            x: Math.floor(c.mouseX + c.headlineOffsetX),
            y: Math.floor(c.mouseY + c.headlineOffsetY)
          };
          this.$store.commit("updateHeadlinePos", newPos);
        }

        // SUBLINE
        else if (this.selectedLayer == "SUBLINE") {
          var newPos;
          newPos = {
            x: Math.floor(c.mouseX + c.sublineOffsetX),
            y: Math.floor(c.mouseY + c.sublineOffsetY)
          };
          this.$store.commit("updateSublinePos", newPos);
        }

        // IMAGE
        else if (this.selectedLayer == "IMAGE") {
          var newPos;
          newPos = {
            x: Math.floor(c.mouseX + c.imageOffsetX),
            y: Math.floor(c.mouseY + c.imageOffsetY)
          };
          this.$store.commit("updateImagePos", newPos);
        }

        // IMAGE
        else if (this.selectedLayer == "IMAGE2") {
          var newPos;
          newPos = {
            x: Math.floor(c.mouseX + c.image2OffsetX),
            y: Math.floor(c.mouseY + c.image2OffsetY)
          };
          this.$store.commit("updateImage2Pos", newPos);
        }
      }
      ////////////////////////////////////////////////////////
      // DISPLAY IMAGE
      ////////////////////////////////////////////////////////
      c.pgImage.clear();
      if (this.checkLayerVisibility_IMAGE == true) {
        // Calculate Aspect Ration

        // c.pgImage.directionalLight(255, 255, 255, 1, -1, 0);
        var ratio = c.img.height / c.img.width;
        c.pgImage.imageMode(c.CENTER);
        c.pgImage.push();
        c.pgImage.noStroke();
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
      }

      ////////////////////////////////////////////////////////
      // DISPLAY IMAGE2
      ////////////////////////////////////////////////////////

      // Calculate Aspect Ration
      var ratio2 = c.img.height / c.img.width;
      c.pgImage2.clear();
      if (this.checkLayerVisibility_IMAGE2 == true) {
        // c.pgImage.directionalLight(255, 255, 255, 1, -1, 0);
        c.pgImage2.imageMode(c.CENTER);
        c.pgImage2.push();
        c.pgImage2.noStroke();
        c.pgImage2.translate(this.image2Pos.x, this.image2Pos.y);
        c.pgImage2.translate(-c.width / 2, -c.height / 2);
        // c.pgImage.rotate();

        c.pgImage2.texture(c.img2);
        c.pgImage2.rotateX(c.radians(this.image2RotationX));
        c.pgImage2.rotateY(c.radians(this.image2RotationY));
        c.pgImage2.rotateZ(c.radians(this.image2RotationZ));
        c.pgImage2.plane(this.image2W, this.image2W * ratio2);
        // c.pgImage.image(c.img, 0, 0, this.imageW, this.imageW * ratio);

        c.img2.filter(c.GRAY);
        // c.pgImage.tint(0, 153, 204); // Tint blue
        c.pgImage2.pop();
      }

      ////////////////////////////////////////////////////////
      // DISPLAY HEADLINE
      ////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////
      // DISPLAY GRID
      ////////////////////////////////////////////////////////
      c.pgGrid.clear();
      if (this.checkLayerVisibility_GRID == true) {
        if (this.grid.visible === true) {
          var cols = this.grid.cols;
          var rows = this.grid.rows;
          var stepX = c.width / cols;
          var stepY = c.height / rows;

          for (var y = 1; y < rows; y++) {
            for (var x = 1; x < cols; x++) {
              c.pgGrid.noFill();
              c.pgGrid.stroke(this.gridColor);
              c.pgGrid.strokeWeight(0.6);
              c.pgGrid.push();

              c.pgGrid.line(x * stepX, 0, x * stepX, c.height);
              c.pgGrid.pop();
              c.pgGrid.push();
              c.pgGrid.line(0, y * stepY, c.width, y * stepY);
              c.pgGrid.pop();
            }
          }
        }
      }
      ////////////////////////////////////////////////////////
      // DISPLAY HEADLINE
      ////////////////////////////////////////////////////////

      c.pgText.clear();
      if (this.checkLayerVisibility_HEADLINE == true) {
        console.log("HEADLINE VISIBLE");
        if (this.headlineTextAlign == "LEFT") {
          c.pgText.textAlign(c.LEFT, c.TOP);
        } else if (this.headlineTextAlign == "CENTER") {
          c.pgText.textAlign(c.CENTER, c.TOP);
        } else if (this.headlineTextAlign == "RIGHT") {
          c.pgText.textAlign(c.RIGHT, c.TOP);
        }
        c.pgText.fill(this.headlineTextColor);
        c.pgText.noStroke();
        var fs = Math.floor(this.headlineFontSize);
        var lh = this.headlineLineHeight;
        c.pgText.textFont(c.font);
        c.pgText.textSize(fs);
        c.pgText.textLeading(fs * lh);

        c.pgText.push();
        c.pgText.translate(this.headlinePos.x, this.headlinePos.y);

        c.pgText.text(this.headlineContent, 0, 0);
        c.pgText.pop();
      }

      ////////////////////////////////////////////////////////
      // DISPLAY SUBLINE
      ////////////////////////////////////////////////////////

      if (this.checkLayerVisibility_SUBLINE == true) {
        if (this.sublineTextAlign == "LEFT") {
          c.pgText.textAlign(c.LEFT, c.TOP);
        } else if (this.sublineTextAlign == "CENTER") {
          c.pgText.textAlign(c.CENTER, c.TOP);
        } else if (this.sublineTextAlign == "RIGHT") {
          c.pgText.textAlign(c.RIGHT, c.TOP);
        }
        c.pgText.fill(this.headlineTextColor);
        c.pgText.noStroke();
        var fs = Math.floor(this.sublineFontSize);
        var lh = this.sublineLineHeight;
        c.pgText.textFont(c.sublineFont);
        c.pgText.textSize(fs);
        c.pgText.textLeading(fs * lh);

        c.pgText.push();
        c.pgText.translate(this.sublinePos.x, this.sublinePos.y);

        c.pgText.text(this.sublineContent, 0, 0);
        c.pgText.pop();
      }

      ////////////////////////////////////////////////////////
      // THE IMAGE-STACK
      ////////////////////////////////////////////////////////
      c.image(c.pgGrid, this.width / 2, this.height / 2);
      c.image(c.pgImage2, this.width / 2, this.height / 2);

      c.image(c.pgImage, this.width / 2, this.height / 2);

      c.image(c.pgText, this.width / 2, this.height / 2);

      ////////////////////////////////////////////////////////
      // RECORD CANVAS
      ////////////////////////////////////////////////////////

      if (this.recording === true && c.recordingStarted === false) {
        c.recorder.start();
        c.recordingStarted = true;
      }

      if (c.recordingStarted === true && this.recording === false) {
        c.recorder.stop();
        c.recorder.save("p5studioExport.webm");
        c.recordingStarted = false;
      }

      ////////////////////////////////////////////////////////
      // SAVE PNG / JPG
      ////////////////////////////////////////////////////////

      if (this.savePNG === true) {
        c.save("poster.png");
        this.$store.commit("stopSaving");
      }
      if (this.saveJPG === true) {
        c.save("poster.jpg");
        this.$store.commit("stopSaving");
      }

      ////////////////////////////////////////////////////////
      // LOG FRAMERATE
      ////////////////////////////////////////////////////////

      // console.log(c.getFrameRate());

      ////////////////////////////////////////////////////////
      // HANDLE UPLOAD
      ////////////////////////////////////////////////////////
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

        if (this.selectedLayer == "HEADLINE") {
          c.headlineOffsetX = this.headlinePos.x - c.mouseX;
          c.headlineOffsetY = this.headlinePos.y - c.mouseY;
        } else if (this.selectedLayer == "IMAGE") {
          c.imageOffsetX = this.imagePos.x - c.mouseX;
          c.imageOffsetY = this.imagePos.y - c.mouseY;
        } else if (this.selectedLayer == "IMAGE2") {
          c.image2OffsetX = this.image2Pos.x - c.mouseX;
          c.image2OffsetY = this.image2Pos.y - c.mouseY;
        } else if (this.selectedLayer == "SUBLINE") {
          c.sublineOffsetX = this.sublinePos.x - c.mouseX;
          c.sublineOffsetY = this.sublinePos.y - c.mouseY;
        }
        // If so, keep track of relative location of click to corner of rectangle

        // if (this.selectedLayer == "TEXT") {
        //   c.headlineOffsetX = this.headlinePos.x - c.mouseX;
        //   c.headlineOffsetY = this.headlinePos.y - c.mouseY;
        // } else if (this.selectedLayer == "IMAGE") {
        //   c.imageffsetX = this.imagePosX - c.mouseX;
        //   c.imageffsetY = this.imagePosY - c.mouseY;
        // }
      }
    }
  },
  render(h) {
    return h(VueP5, { on: this });
  }
};
</script>
