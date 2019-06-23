<template>
  <div>
    <div id="silk" v-on:click="toggleFontsModal"></div>
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
      this.$store.commit("updateFont", font);
      this.$store.commit("toggleFontsModal");
      this.$store.commit("updateFontTrue");
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
  font-size: 20px;
  cursor: pointer;
}
</style>
