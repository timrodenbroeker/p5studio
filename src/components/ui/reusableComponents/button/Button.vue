<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller" v-on:click="doThis">
      <button>{{ text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
    text: String,
    doThis: Function
  }
};
</script>

<style scoped lang="scss">
button {
  max-width: $uiButtonWidth;
}
</style>