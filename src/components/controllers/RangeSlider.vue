<template>
  <div class="range-slider">
    <label>FONT_SIZE</label>
    <input type="range" min="20" max="100" :value="fontSize" @input="updateFontSize">
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  computed: {
    fontSize() {
      return this.$store.state.fontSize;
    }
  },
  methods: {
    updateFontSize(e) {
      this.$store.commit("updateFontSize", e.target.value);
    }
  }
};
</script>

<style scoped>
.range-slider {
}
</style>
