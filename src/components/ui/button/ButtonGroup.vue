<template>
  <div class="controller-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Group"
};
</script>

<style scoped lang="scss">
.controller-group {
  padding: 1 5px;
  border: 2px solid $uiFG;
}
</style>
