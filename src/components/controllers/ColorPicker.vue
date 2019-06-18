<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <div class="colorWrapper">
        <div class="color" v-for="color in colors">{{color}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: {
    label: String,
    colors: Array
  }
};
</script>

<style scoped lang="scss">
.colorWrapper {
  width: 100%;
  display: flex;

  .color {
    width: 30px;
    height: 30px;
    margin: 0 5px 5px 0;
    border: 1px solid white;
  }
}
</style>
