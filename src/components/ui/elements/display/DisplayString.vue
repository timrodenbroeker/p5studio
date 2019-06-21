<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <div class="display">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayString",
  props: {
    label: String,
    text: String
  }
};
</script>

<style scoped lang="scss">
.display {
  color: white;
  font-size: 12px;
  color: $uiFG;
  * {
    padding-right: 10px;
    display: inline;
  }
}
</style>
