<template>
  <div>
    <div id="silk" v-on:click="toggleVisibility"></div>
    <div class="modal">
      <div v-on:click="toggleVisibility" class="close"></div>
      <div>hahah</div>
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
.modal {
  padding: 25px;
}
</style>
