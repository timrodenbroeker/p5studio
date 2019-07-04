<template>
  <div class="modal">
    <div v-on:click="toggleFontsModal" class="close"></div>
    <div class="fontList">
      <div class="font" v-for="font in fontFiles" v-bind:key="font" @click="updateFont(font)">
        <img v-bind:src="'svg/'+font+'.svg'" />
        <p>{{font}}</p>
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
}
.font {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;
  border-bottom: 1px solid black;
  font-size: 12px;
  img {
    width: 100%;
  }
  p {
    font-family: "Roboto Mono", monospace;
    margin: 0;
  }
  transition: all 0.4s ease;
  &:hover {
  }
}
</style>
