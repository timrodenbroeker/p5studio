<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <div class="layers" v-on:click="update()">
        <div class="layer" v-for="(option, index) in options">
          <div v-if="selected == index" class="inner active">{{option}}</div>
          <div v-else class="inner">{{option}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayerList",
  props: {
    label: String,
    options: Array,
    selected: Number,
    update: Function
  }
};
</script>

<style scoped lang="scss">
.layers {
  width: 100%;
  display: flex;
}
.layer {
  .inner {
    text-transform: uppercase;
    font-size: $uiText;
    padding: 3px 10px;
    margin-bottom: 1px;
    width: 100%;

    background: $uiFG;
    cursor: pointer;

    &.active {
      background: $uiSecondary;
    }
  }
}
</style>
