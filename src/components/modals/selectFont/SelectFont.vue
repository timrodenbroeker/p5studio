<template>
  <div id="silk">
    <div class="modal">
      <div v-on:click="toggleVisibility" class="close"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSelectFont",
  methods: {
    toggleVisibility() {
      this.$store.commit("toggleFontsModal");
    }
  }
};
</script>

<style lang="scss">
</style>
