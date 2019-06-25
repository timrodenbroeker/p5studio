<template>
  <div>
    <div class="layers" v-on:click="update()">
      <div class="layer" v-for="(option, index) in options">
        <div v-if="selected == index" class="inner active">{{option}}</div>
        <div v-else class="inner">{{option}}</div>
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
  padding-left: $uiPadding;
}
.layer {
  margin-right: 2px;
  .inner {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: $uiText;

    color: $uiMix;
    padding: 5px 10px;

    width: 100%;
    background: $uiMix;
    color: $uiBG;
    /* background: $uiMix; */
    cursor: pointer;

    &.active {
      background: $uiSecondary;
    }
  }
}
</style>
