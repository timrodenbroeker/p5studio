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
      return this.$store.state.headline;
    },
    fontSize() {
      return this.$store.state.fontSize;
    }
  },
  methods: {
    setup(c) {
      c.createCanvas(586, 810);
    },
    draw(c) {
      c.background("#2203a7");
      c.fill("#ffffff");

      var fs = Math.floor(this.fontSize);

      c.textSize(fs);

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
