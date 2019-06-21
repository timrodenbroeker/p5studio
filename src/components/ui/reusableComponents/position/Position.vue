<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller positions">
      <div class>x:</div>
      <div class>{{posX}}</div>
      <div class>y:</div>
      <div class>{{posY}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Position",
  props: {
    label: String,
    posX: Number,
    posY: Number
  }
};
</script>

<style scoped lang="scss">
.positions {
  color: white;
  font-size: 12px;
  color: $uiFG;
  * {
    padding-right: 10px;
    display: inline;
  }
}
</style>
