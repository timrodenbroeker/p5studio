<template>
  <div class="controller">
    <div class="controller-label">
      <label>{{label}}</label>
    </div>
    <div class="controller-controller">
      <input type="range" min="min" max="max" :value="val" @input="update">
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    label: String,
    min: Number,
    max: Number,
    val: Number,
    update: Function
  }
};
</script>

<style scoped lang="scss">
.controller-controller {
  input {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 20px; /* Specified height */
    background: $uiFG; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 1; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
    transition: opacity 0.2s;
    margin: 0;

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 13px; /* Set a specific slider handle width */
      height: 13px; /* Slider handle height */
      border-radius: 100%;
      background: #ff0000; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }

    &::-moz-range-thumb {
      width: 13px; /* Set a specific slider handle width */
      height: 13px; /* Slider handle height */
      background: #ff0000; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
  }

  &:hover input {
    opacity: 1; /* Fully shown on mouse-over */
  }
}

.controller-controller:hover input {
}
</style>
