import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		typography: {
			fontSize: 60,
			lineHeight: 1,
			headline: 'Hello!',
			fontFiles: ['helvetica.ttf', 'futura.ttf', 'suisse.ttf'],
		},
		colors: {
			colors: ['#ff0000', '#2203a7'],
			selectedColor: 0,
		},
		ui: {
			ModalSelectFont: {
				visible: true,
			},
		},
	},
	mutations: {
		updateFontSize(state, fontSize) {
			state.typography.fontSize = fontSize;
		},
		updateLineHeight(state, lineHeight) {
			state.typography.lineHeight = lineHeight;
		},
		updateHeadline(state, headline) {
			state.typography.headline = headline;
		},
		updateSelectedColor(state, selectedColor) {
			state.colors.selectedColor = selectedColor;
		},
		toggleFontsModal(state, val) {
			state.ui.ModalSelectFont.visible = !state.ui.ModalSelectFont.visible;
		},
	},
	actions: {},
});
