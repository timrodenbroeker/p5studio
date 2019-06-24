<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller" v-on:click="doThis">
      <button v-bind:class="{ recording: recording }">
        <div v-if="recording">RECORDING</div>
        <div v-else>RECORD</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoRecorder",
  props: {
    label: String,
    text: String,
    doThis: Function,
    recording: Boolean
  }
};
</script>

<style scoped lang="scss">
button {
  @keyframes blink {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  max-width: $uiButtonWidth;

  &.recording {
    animation: blink 1s linear infinite;
    background: red;
  }
}
</style>