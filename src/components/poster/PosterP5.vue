<template>
  <div id="posterWrapper">
    <div id="poster">
      <h1 v-bind:style="{ fontSize: fontSize + 'px' }">{{headline}}</h1>
      <div id="canvasWrapper"></div>
    </div>
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  name: "PosterP5",
  computed: {
    headline() {
      return this.$store.state.headline;
    },
    fontSize() {
      return this.$store.state.fontSize;
    }
  },
  methods: {
    setup(sketch) {
      sketch.background("green");
      sketch.text("Hello p5!", 20, 20);
    }
  },
  render(h) {
    return h(VueP5, { on: this });
  }
};
</script>

<style scoped lang="scss">
#poster {
  width: $posterW;
  height: $posterH;
  background: #2203a7;
  padding: 20px;
}

h1 {
  font-size: 40px;
  line-height: 100%;
  color: white;
  margin: 0;
}
</style>
