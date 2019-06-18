<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <div class="colorWrapper">
        <div v-for="(color, index) in colors">
          <div class="color active" v-bind:style="{background: color, borderColor: color}"></div>
        </div>
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

    border-width: 5px;
    border-style: solid;
    cursor: pointer;

    &.active {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
