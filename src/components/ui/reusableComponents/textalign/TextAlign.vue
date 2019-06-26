<template>
  <div class="text controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller align-options">
      <div
        class="align-option align-option-left"
        @click="setAlignment('LEFT')"
        v-bind:class="{  'active': alignment === 'LEFT'}"
      >
        <div class="align-option-row-1"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-3"></div>
      </div>
      <div
        class="align-option align-option-center"
        @click="setAlignment('CENTER')"
        v-bind:class="{  'active': alignment === 'CENTER'}"
      >
        <div class="align-option-row-1"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-3"></div>
      </div>
      <div
        class="align-option align-option-right"
        @click="setAlignment('RIGHT')"
        v-bind:class="{  'active': alignment === 'RIGHT'}"
      >
        <div class="align-option-row-1"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextAlign",
  props: {
    label: String,
    setAlignment: Function,
    alignment: String
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.align-options {
  display: flex;
  div {
    margin-right: 3px;
  }
}

.align-option {
  cursor: pointer;
  div {
    width: 20px;
    height: 1px;
    background: $uiMix;
    margin-bottom: 3px;
    &.align-option-row-3 {
      width: 11px;
    }
  }
  &.active {
    div {
      background: $uiSecondary;
    }
  }
}

.align-option-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.align-option-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.align-option-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
