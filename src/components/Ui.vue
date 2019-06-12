<template>
  <div id="ui">
    <RangeSlider
      label="fontsize"
      v-bind:min="10"
      v-bind:max="140"
      v-bind:val="70"
      v-bind:update="updateFontSize"
    />
    <TextArea
      v-bind:rows="4"
      label="headline"
      v-bind:text="headline"
      v-bind:update="updateHeadline"
    />
  </div>
</template>

<script>
import RangeSlider from "./controllers/RangeSlider.vue";
import TextArea from "./controllers/TextArea.vue";

export default {
  name: "Ui",
  components: {
    RangeSlider,
    TextArea
  },
  computed: {
    fontSize() {
      return this.$store.state.fontSize;
    },
    headline() {
      return this.$store.state.headline;
    }
  },
  created: function() {},
  methods: {
    updateFontSize(e) {
      this.$store.commit("updateFontSize", e.target.value);
    },
    updateHeadline(e) {
      this.$store.commit("updateHeadline", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
#ui {
  width: $uiWidth;
  background: $uiBG;
  height: 100vh;
  padding: 25px;
}
</style>
