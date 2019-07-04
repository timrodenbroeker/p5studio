<template>
  <div class="modal imagesModal">
    <div v-on:click="toggleImagesModal" class="close"></div>

    <div>
      <div class="cat" v-for="(collection, i) in imageCollections" v-bind:key="i">
        <h2>{{collection.dir}}</h2>
        <div class="imageList">
          <img
            v-for="(image, j) in collection.files"
            v-bind:key="j"
            v-bind:src="'images/' + collection.dir + '/' + image"
            @click="updateImage(collection.dir, image)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSelectImage",

  computed: {
    imageCollections() {
      return this.$store.state.image.imageCollections;
    }
  },
  methods: {
    toggleImagesModal() {
      this.$store.commit("toggleImagesModal");
    },
    updateImage: function(dir, image) {
      this.$store.commit("updateImage", dir + "/" + image);
      this.$store.commit("toggleImagesModal");
      this.$store.commit("updateImageTrue");
      this.$store.commit("updateImage2True");
    }
  }
};
</script>

<style lang="scss">
.cat {
  padding: 10px;
  border-bottom: 1px solid black;
}
.imagesModal {
  h2 {
    font-weight: normal;
    text-transform: uppercase;
    font-size: calc(16px + 3vw);
  }
}
.imageList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  img {
    width: 100%;
    cursor: pointer;
  }
  margin-bottom: 25px;
}
.image {
  cursor: pointer;
}
</style>
