<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <div class="layers">
        <div class="layer active">Text</div>
        <div class="layer">Image</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayerList",
  props: {
    label: String
  }
};
</script>

<style scoped lang="scss">
.layer {
  text-transform: uppercase;
  font-size: $uiText;
  padding: 3px;
  margin-bottom: 1px;
  width: 100%;
  max-width: $uiButtonWidth;
  background: $uiFG;
  cursor: pointer;

  &.active {
    background: $uiMix;
  }
}
</style>
