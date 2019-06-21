<template>
  <div class="text controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <input type="text" :value="value" @input="update">
    </div>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String,
    value: String,
    update: Function
  },
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
input {
  background: #d3d3d3;
  color: white;
  border: 0;
}
</style>
