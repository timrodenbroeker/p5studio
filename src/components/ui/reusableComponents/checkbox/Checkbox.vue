<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <div v-on:click="toggle" v-if="checked" class="checkbox checked"></div>
      <div v-else v-on:click="toggle" class="checkbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: String,
    checked: Boolean,
    toggle: Function
  }
};
</script>

<style scoped lang="scss">
.checkbox {
  width: 15px;
  height: 15px;
  border: 1px solid $uiFG;
  cursor: pointer;

  &.checked {
    background: $uiSecondary;
  }
}
</style>
