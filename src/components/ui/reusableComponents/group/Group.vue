<template>
  <div class="controller-group" v-bind:class="{ border: border, headline: headline }">
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
    name: String,
    border: Boolean,
    headline: Boolean
  }
};
</script>

<style scoped lang="scss">
.controller-group {
  margin-bottom: 5px;

  .group-header {
    cursor: pointer;
    padding-top: $uiPadding;
    padding-left: $uiPadding;
    /* border-top: 1px solid $uiMix; */
    margin-bottom: 1px;
    h2 {
      display: none;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      color: $uiFG;
      font-size: $uiGroupHead;
      text-transform: uppercase;
      margin: 0;
    }
  }
  &.headline {
    h2 {
      display: block;
    }
  }
  &.border {
    border-top: 1px solid $uiMix;
  }
}

.group-controllers {
  padding: $uiPadding;
}
</style>
