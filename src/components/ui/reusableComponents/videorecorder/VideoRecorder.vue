<template>
  <div class="text controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <button>RECORD</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextAlign",
  props: {
    label: String
  },

  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
