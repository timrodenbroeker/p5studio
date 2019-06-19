<template>
  <div class="text-area controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <textarea :rows="rows" type="text" area :value="value" @input="update"/>
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
  color: $uiWhite;
  border: 0;
  font-size: 16px;
  padding: 5px;
}
</style>
