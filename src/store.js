import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import fontFiles from './assets/fonts.json';

export default new Vuex.Store({
	state: {
		poster: {
			posterW: 586,
			posterH: 810,
		},
		headline: {
			posX: 0,
			posY: 0,
			fontSize: 250,
			lineHeight: 0.82,
			headline: 'ABC\nDEF',
			fontFiles: fontFiles,
			currentFont: 'Pilowlava-Regular.otf',
		},
		colors: {
			colors: ['#ff0000', '#2203a7'],
			selectedColor: 0,
		},
		ui: {
			ModalSelectFont: {
				visible: false,
			},
		},
	},
	mutations: {
		updateHeadlinePosX(state, posX) {
			console.log(posX);
			state.headline.posX = posX;
		},
		updateHeadlinePosY(state, posY) {
			state.headline.posY = posY;
		},

		updateFontSize(state, fontSize) {
			state.headline.fontSize = fontSize;
		},
		updateLineHeight(state, lineHeight) {
			state.headline.lineHeight = lineHeight;
		},
		updateCurrentFont(state, val) {
			console.log(val);
			state.headline.currentFont = val;
		},
		updateHeadline(state, headline) {
			state.headline.headline = headline;
		},
		updateSelectedColor(state, selectedColor) {
			state.colors.selectedColor = selectedColor;
		},
		toggleFontsModal(state, val) {
			state.ui.ModalSelectFont.visible = !state.ui.ModalSelectFont.visible;
		},
	},
});
