<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <button>{{ text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
    text: String
  }
};
</script>

<style scoped lang="scss"></style>