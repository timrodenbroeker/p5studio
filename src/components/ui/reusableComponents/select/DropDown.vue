<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{ label }}</label>
    </div>
    <div class="controller-controller">
      <select name="top5" size="1" @update="onupdate($event)">
        <option v-for="option in options">{{option}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    label: String,
    options: Array,
    update: Function
  },

  methods: {
    onupdate(event) {}
  }
};
</script>

<style scoped lang="scss">
</style>
