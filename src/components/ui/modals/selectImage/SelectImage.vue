<template>
  <div class="modal">
    <div v-on:click="toggleImagesModal" class="close"></div>
    <div class="imageList">
      <img
        v-for="(image, index) in imageFiles"
        v-bind:src="'images/' + image"
        v-bind:key="image"
        @click="updateImage(image)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSelectImage",

  computed: {
    imageFiles() {
      return this.$store.state.image.imageFiles;
    }
  },
  methods: {
    toggleImagesModal() {
      this.$store.commit("toggleImagesModal");
    },
    updateImage: function(image) {
      this.$store.commit("updateImage", image);
      this.$store.commit("toggleImagesModal");
      this.$store.commit("updateImageTrue");
    }
  }
};
</script>

<style lang="scss">
.modal {
  padding: 25px;
}

.imageList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  img {
    width: 100%;
    cursor: pointer;
  }
}
.image {
  cursor: pointer;
}
</style>
