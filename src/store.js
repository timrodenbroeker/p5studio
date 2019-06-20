import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import fontFiles from './assets/fonts.json';

export default new Vuex.Store({
	state: {
		// General Poster-settings
		poster: {
			posterW: 586,
			posterH: 810,
		},
		// THe Headline

		headline: {
			posX: 0,
			posY: -40,
			fontSize: 220,
			lineHeight: 0.92,
			headline: 'ABC\nDEF',
			fontFiles: fontFiles,
			currentFont: 'Pilowlava-Regular.otf',
		},

		image: {
			posX: 0,
			posY: 0,
			width: 400,
			selectedImage: 'images/6798728194_8967ebd8b2_o.jpg',
		},

		// Colors

		colors: {
			background: {
				colors: ['#ff0000', '#2203a7', '#f1f1f1', '#111111'],
				selectedColor: 2,
			},
			text: {
				colors: ['#ff0000', '#2203a7', '#f1f1f1', '#111111'],
				selectedColor: 0,
			},
		},

		ui: {
			// SelectedLayer
			layers: ['TEXT', 'IMAGE'],
			selectedLayer: 0,

			// Modals
			ModalSelectFont: {
				visible: false,
			},
		},
	},

	mutations: {
		// headline.posX

		updateHeadlinePosX(state, posX) {
			state.headline.posX = posX;
		},

		// headline.posY

		updateHeadlinePosY(state, posY) {
			state.headline.posY = posY;
		},

		// headline.fontSize

		updateFontSize(state, fontSize) {
			state.headline.fontSize = fontSize;
		},

		// headline.lineHeight

		updateLineHeight(state, lineHeight) {
			state.headline.lineHeight = lineHeight;
		},

		// headline.currentFont

		updateCurrentFont(state, val) {
			state.headline.currentFont = val;
		},

		// headline.headline

		updateHeadline(state, headline) {
			state.headline.headline = headline;
		},

		// headline.color

		updateSelectedColor(state, selectedColor) {
			state.colors.background.selectedColor = selectedColor;
		},

		updateTextColor(state, selectedColor) {
			state.colors.text.selectedColor = selectedColor;
		},

		// ui.fontsModal

		toggleFontsModal(state, val) {
			state.ui.ModalSelectFont.visible = !state.ui.ModalSelectFont.visible;
			console.log(state);
		},

		updateSelectedLayer(state) {
			if (state.ui.selectedLayer < state.ui.layers.length - 1) {
				state.ui.selectedLayer++;
			} else {
				state.ui.selectedLayer = 0;
			}
		},
	},
});
