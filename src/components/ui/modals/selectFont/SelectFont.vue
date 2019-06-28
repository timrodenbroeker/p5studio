<template>
  <div class="modal">
    <div v-on:click="toggleFontsModal" class="close"></div>
    <div class="fontList">
      <div
        class="font"
        v-for="font in fontFiles"
        v-bind:key="font"
        @click="updateFont(font)"
      >{{font}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSelectFont",

  computed: {
    fontFiles() {
      return this.$store.state.headline.fontFiles;
    }
  },
  methods: {
    toggleFontsModal() {
      this.$store.commit("toggleFontsModal");
    },
    updateFont: function(font) {
      this.$store.commit("updateHeadlineFont", font);
      this.$store.commit("toggleFontsModal");
      this.$store.commit("updateHeadlineFontTrue");
      // this.$store.state.headline.currentFont = font;
    }
  }
};
</script>

<style lang="scss">
.modal {
  padding: 25px;
}
.font {
  font-size: 30px;
  padding-bottom: 10px;
  cursor: pointer;
}
</style>
