<template>
  <div class="text-area controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <textarea :rows="rows" type="text" v-bind:value="value" @input="update"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    label: String,
    value: String,
    rows: Number,
    update: Function
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
textarea {
  resize: none;
  width: 100%;
  background: $uiMix;
  color: $uiBG;
  border: 1px solid $uiBG;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;

  &:focus {
    outline: none !important;
    border: 1px solid $uiSecondary;
  }
}
</style>
