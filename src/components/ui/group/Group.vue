<template>
  <div class="controller-group">
    <div class="group-header">
      <h2>{{name}}</h2>
    </div>
    <div class="group-controllers">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group",
  props: {
    name: String
  }
};
</script>

<style scoped lang="scss">
.controller-group {
  margin-bottom: 25px;
}

.group-controllers {
  padding: $uiPadding;
}

.group-header {
  cursor: pointer;
  padding-top: $uiPadding;
  padding-left: $uiPadding;
  border-top: 1px solid $uiMix;
  margin-bottom: 1px;
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    color: $uiFG;
    font-size: $uiGroupHead;
    text-transform: uppercase;
    margin: 0;
  }
}
</style>
