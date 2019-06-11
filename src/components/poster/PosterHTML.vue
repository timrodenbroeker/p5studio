<template>
  <div id="posterWrapper">
    <div id="poster">
      <h1 v-bind:style="{ fontSize: fontSize + 'px' }">{{headline}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosterHTML",
  computed: {
    headline() {
      return this.$store.state.headline;
    },
    fontSize() {
      return this.$store.state.fontSize;
    }
  }
};
</script>

<style scoped lang="scss">

#posterWrapper {
  width: calc(100vw - #{$uiWidth};
  display: flex;
  align-items: center;
  justify-content: center;
}
#poster {
  width: $posterW;
  height: $posterH;
  background: #2203a7;
  padding: 20px;
}

h1 {
  font-size: 40px;
  line-height: 100%;
  color: white;
  margin: 0;
}
</style>
