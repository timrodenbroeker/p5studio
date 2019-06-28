<template>
  <div>
    <div class="layers">
      <div class="layer" v-for="(option, index) in options" v-on:click="update(option)">
        <div v-if="selectedLayer == option" class="inner active">{{option}}</div>
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
    selectedLayer: String,
    update: Function
  }
};
</script>

<style scoped lang="scss">
.layers {
  width: 100%;
  display: flex;
  padding-left: $uiPadding;
  &:hover {
    .layer {
      .inner {
        background: $uiFG;
      }
    }
  }
}
.layer {
  margin-right: 2px;

  .inner {
    font-family: $uiFontSans, sans-serif;
    text-transform: uppercase;
    font-size: $uiText;
    color: $uiMix;
    padding: 5px 10px;
    width: 100%;
    background: $uiMix;
    color: $uiBG;
    cursor: pointer;
    transition: background 0.2s ease;

    &.active {
      background: $uiSecondary !important;
    }
  }
}
</style>
