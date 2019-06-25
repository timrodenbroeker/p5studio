<template>
  <div class="text controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller align-options">
      <div class="align-option align-option-left active">
        <div class="align-option-row-1"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-3"></div>
      </div>
      <div class="align-option align-option-center">
        <div class="align-option-row-1"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-2"></div>
        <div class="align-option-row-3"></div>
      </div>
      <div class="align-option align-option-right">
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
    label: String
  },
  data: {
    options: ["LEFT", "CENTER", "RIGHT"]
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
    margin-bottom: 2px;
    &.align-option-row-3 {
      width: 13px;
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
