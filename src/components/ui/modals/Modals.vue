<template>
  <div id="modals">
    <div
      id="silk"
      @click="closeAllModals"
      v-bind:class="{'visible': ModalSelectFontVisible === true || ModalSelectImageVisible === true}"
    >
      <div class="silk-close">
        <h2>close</h2>
      </div>
    </div>
    <modal-select-font v-bind:class="{'inViewport': ModalSelectFontVisible === true}"></modal-select-font>
    <modal-select-image v-bind:class="{'inViewport': ModalSelectImageVisible === true}"></modal-select-image>
  </div>
</template>

<script>
import ModalSelectFont from "./selectFont/SelectFont.vue";
import ModalSelectImage from "./selectImage/SelectImage.vue";

export default {
  name: "Modals",
  components: {
    ModalSelectFont,
    ModalSelectImage
  },
  computed: {
    ModalSelectFontVisible() {
      return this.$store.state.ui.ModalSelectFont.visible;
    },
    ModalSelectImageVisible() {
      return this.$store.state.ui.ModalSelectImage.visible;
    }
  },
  methods: {
    closeAllModals() {
      this.$store.commit("closeAllModals");
    }
  }
};
</script>

<style lang="scss">
#silk {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  cursor: pointer;
  z-index: 9999999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;

  &.visible {
    opacity: 1;
    pointer-events: all;
  }
  .silk-close {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 30px;
    color: white;
    h2 {
      font-weight: normal;
    }
  }
}

.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.modal {
  position: absolute;
  top: 0;
  right: -50vw;
  background: $uiFG;
  width: 50vw;
  height: 100vh;
  overflow-y: scroll;
  z-index: 99999991;
  transition: right 0.5s ease;

  &.inViewport {
    right: 0;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
}
.slide-fade-leave-active {
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
}
</style>
