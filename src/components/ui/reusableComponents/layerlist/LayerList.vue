<template>
  <div>
    <div class="layers">
      <div
        class="layer"
        v-for="(option, index) in options"
        v-bind:key="index"
        v-on:click="update(option)"
      >
        <div v-if="selectedLayer == option.name" class="inner active">
          <div class="layer-name">{{option.name}}</div>
          <div v-on:click="toggleLayerVisibility(index)">
            <div class="text-hide" v-if="option.visible == true">HIDE</div>
            <div class="text-hidden" v-else>HIDDEN</div>
          </div>
        </div>
        <div v-else class="inner" v-bind:class="{ visible: option.visible }">
          <div class="layer-name">{{option.name}}</div>
          <div v-on:click="toggleLayerVisibility(index)">
            <div class="text-hide" v-if="option.visible == true">HIDE</div>
            <div class="text-hidden" v-else>HIDDEN</div>
          </div>
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
    selectedLayer: String,
    update: Function
  },
  methods: {
    toggleLayerVisibility(index) {
      console.log("cclicked");
      this.$store.commit("toggleLayerVisibility", index);
    }
  }
};
</script>

<style scoped lang="scss">
.layers {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: $uiPadding;
  padding-right: $uiPadding;
  &:hover {
    .layer {
      .inner {
        color: $uiFG;
        border-color: $uiFG !important;
      }
    }
  }
}
.layer {
  .inner {
    display: flex;
    justify-content: space-between;
    font-family: $uiFontSans, sans-serif;
    text-transform: uppercase;
    font-size: $uiText;
    padding: 10px 10px;
    width: 100%;
    background: $uiBG;
    color: $uiFG;
    border-left: 1px solid $uiMix;
    border-right: 1px solid $uiMix;
    border-top: 1px solid $uiMix;
    cursor: pointer;
    transition: all 0.2s ease;

    .text-hidden {
      color: $uiSecondary;
    }

    .layer-name {
      /* font-weight: bold; */
    }

    &:hover {
      background: $uiFG !important;
      border-color: $uiBG !important;
      color: $uiBG !important;
    }

    &.active {
      border-color: $uiFG !important;
      color: $uiBG !important;
      background: $uiFG !important;
    }
  }
  &:last-child {
    .inner {
      border-bottom: 1px solid $uiMix;
    }
  }
}
</style>
