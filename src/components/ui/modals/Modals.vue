<template>
  <div id="modals">
    <transition name="slide-fade">
      <modal-select-font v-if="ModalSelectFontVisible == true"></modal-select-font>
    </transition>
  </div>
</template>

<script>
import ModalSelectFont from "./selectFont/SelectFont.vue";

export default {
  name: "Modals",
  components: {
    ModalSelectFont
  },
  computed: {
    ModalSelectFontVisible() {
      return this.$store.state.ui.ModalSelectFont.visible;
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
  right: 0;
  background: white;
  width: 50%;
  height: 100%;
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
