<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <div class="colorWrapper">
        <div v-for="(color, index) in colors" class="color-border">
          <div
            v-if="selectedColor == index"
            v-on:click="updateSelectedColor(index)"
            class="color"
            v-bind:style="{background: color}"
          ></div>
          <div
            v-else
            v-on:click="updateSelectedColor(index)"
            class="color active"
            v-bind:style="{background: color, borderColor: color}"
          ></div>
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
    colors: Array,
    selectedColor: Number,
    updateSelectedColor: Function
  }
};
</script>

<style scoped lang="scss">
.colorWrapper {
  width: 100%;
  display: flex;

  .color-border {
    border: 3px solid $uiBG;
  }

  .color {
    width: 26px;
    height: 26px;
    border-radius: 100%;
    border-width: 4px;
    border-style: solid;
    border-color: $uiSecondary;
    cursor: pointer;

    &.active {
      border-color: $uiBG;
    }
  }
}
</style>
