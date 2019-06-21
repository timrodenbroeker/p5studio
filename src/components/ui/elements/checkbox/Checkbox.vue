<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <div class="checkbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: String
  }
};
</script>

<style scoped lang="scss">
.checkbox {
  width: 15px;
  height: 15px;
  border: 1px solid $uiFG;
  cursor: pointer;
}
</style>
