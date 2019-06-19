<template>
  <div id="posterWrapper">
    <div id="poster">
      <vue-p5 @setup="setup" @draw="draw"></vue-p5>
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
    headline() {
      return this.$store.state.typography.headline;
    },
    fontSize() {
      return this.$store.state.typography.fontSize;
    },
    lineHeight() {
      return this.$store.state.typography.lineHeight;
    },
    fontfiles() {
      return this.$store.state.typography.fontFiles;
    },
    selectedColor() {
      var c = this.$store.state.colors.colors[
        this.$store.state.colors.selectedColor
      ];

      return c;
    }
  },
  methods: {
    setup(c) {
      c.createCanvas(586, 810);
    },
    draw(c) {
      c.background(this.selectedColor);
      c.fill("#ffffff");

      var fs = Math.floor(this.fontSize);
      var lh = this.lineHeight;

      c.textSize(fs);
      c.textLeading(fs * lh);

      c.textAlign(c.LEFT, c.TOP);
      c.text(this.headline, 20, 20);
    }
  },
  render(h) {
    return h(VueP5, { on: this });
  }
};
</script>

<style scoped lang="scss">
#poster {
}
</style>
