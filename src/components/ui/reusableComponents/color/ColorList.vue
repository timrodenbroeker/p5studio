<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <div class="colorWrapper">
        <div v-for="(color, index) in colors" v-bind:key="index" class="color-border">
          <div
            v-if="selectedColor == color"
            v-on:click="updateSelectedColor(color)"
            class="color"
            v-bind:style="{background: color}"
          ></div>
          <div
            v-else
            v-on:click="updateSelectedColor(color)"
            class="color active"
            v-bind:style="{background: color}"
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
    selectedColor: String,
    updateSelectedColor: Function
  }
};
</script>

<style scoped lang="scss">
.colorWrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .color-border {
    border: 3px solid $uiBG;
  }

  .color {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: $uiSecondary;
    cursor: pointer;

    &.active {
      border-color: $uiMix;
    }
  }
}
</style>
