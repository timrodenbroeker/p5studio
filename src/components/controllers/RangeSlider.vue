<template>
  <div class="controller">
    <div class="controller-label">
      <label>FONT_SIZE</label>
    </div>
    <div class="controller-controller">
      <input type="range" min="20" max="160" :value="fontSize" @input="updateFontSize">
    </div>
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
</style>
