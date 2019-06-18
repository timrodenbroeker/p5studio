import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fontSize: 60,
    headline: "LOREM IPSUM",
    fontFiles: ["helvetica.ttf", "fututra.ttf", "suisse.ttf"],
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    selectedColor: 0
  },
  mutations: {
    updateFontSize(state, fontSize) {
      state.fontSize = fontSize;
    },
    updateHeadline(state, headline) {
      state.headline = headline;
    },
    updateSelectedColor(state, selectedColor) {
      state.selectedColor = selectedColor;
    }
  },
  actions: {}
});
