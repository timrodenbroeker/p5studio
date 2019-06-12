<template>
  <div class="text-area controller">
    <div class="controller-label">
      <label>Text</label>
    </div>
    <div class="controller-controller">
      <input type="text" area :value="headline" @input="updateHeadline">
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  computed: {
    headline() {
      return this.$store.state.healine;
    }
  },
  methods: {
    updateHeadline(e) {
      this.$store.commit("updateHeadline", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
input {
  background: #d3d3d3;
  border: 0;
  min-height: 40px;
}
</style>
