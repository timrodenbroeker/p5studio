import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import fontFiles from './assets/fonts.json';

export default new Vuex.Store({
	state: {
		// General Poster-settings
		poster: {
			w: 586,
			h: 810,
		},
		////////////////////////////////////////////////////////
		// HEADLINE
		////////////////////////////////////////////////////////

		headline: {
			pos: {
				x: 0,
				y: -40,
			},
			fontSize: 220,
			lineHeight: 0.92,
			headline: 'ABC\nDEF',
			fontFiles: fontFiles,
			currentFont: fontFiles[0],
			updateFont: false,
		},

		image: {
			pos: {
				x: 586 / 2,
				y: 810 / 2,
			},
			w: 500,
			selectedImage: 'images/6798728194_8967ebd8b2_o.jpg',
		},

		// Colors

		colors: {
			background: {
				colors: ['#2203a7', '#f1f1f1', '#111111'],
				selectedColor: 2,
			},
			text: {
				colors: ['#2203a7', '#f1f1f1', '#111111'],
				selectedColor: 0,
			},
			grid: {
				colors: ['#2203a7', '#f1f1f1', '#111111'],
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
			zoom: 1,
			brightness: 0,
		},

		////////////////////////////////////////////////////////
		// GRID
		////////////////////////////////////////////////////////

		grid: {
			visible: true,
			cols: 4,
			rows: 4,
		},
	},

	mutations: {
		////////////////////////////////////////////////////////
		// HEADLINE
		////////////////////////////////////////////////////////

		updateHeadlinePos(state, newPos) {
			state.headline.pos = newPos;
		},
		updateFontSize(state, fontSize) {
			state.headline.fontSize = fontSize;
		},
		updateFont(state, font) {
			state.headline.currentFont = font;
		},
		updateLineHeight(state, lineHeight) {
			state.headline.lineHeight = lineHeight;
		},
		updateCurrentFont(state, val) {
			state.headline.currentFont = val;
		},

		updateHeadline(state, headline) {
			state.headline.headline = headline;
		},
		updateTextColor(state, selectedColor) {
			state.colors.text.selectedColor = selectedColor;
		},

		updateFontTrue(state) {
			state.headline.updateFont = true;
		},
		updateFontFalse(state) {
			state.headline.updateFont = false;
		},

		////////////////////////////////////////////////////////
		// IMAGE
		////////////////////////////////////////////////////////

		updateImagePos(state, newPos) {
			state.image.pos = newPos;
		},
		updateImageW(state, val) {
			state.image.w = val;
		},

		////////////////////////////////////////////////////////
		// IMAGE
		////////////////////////////////////////////////////////

		////////////////////////////////////////////////////////
		// LAYERS
		////////////////////////////////////////////////////////
		updateSelectedLayer(state) {
			if (state.ui.selectedLayer < state.ui.layers.length - 1) {
				state.ui.selectedLayer++;
			} else {
				state.ui.selectedLayer = 0;
			}
		},

		////////////////////////////////////////////////////////
		// COLORS
		////////////////////////////////////////////////////////

		updateSelectedColor(state, selectedColor) {
			state.colors.background.selectedColor = selectedColor;
		},

		////////////////////////////////////////////////////////
		// GRID
		////////////////////////////////////////////////////////

		updateGridCols(state, val) {
			state.grid.cols = val.target.value;
		},
		updateGridRows(state, val) {
			state.grid.rows = val.target.value;
		},

		toggleGridVisibility(state) {
			state.grid.visible = !state.grid.visible;
		},
		updateGridColor(state, selectedColor) {
			state.colors.grid.selectedColor = selectedColor;
		},
		////////////////////////////////////////////////////////
		// VIEW
		////////////////////////////////////////////////////////

		updateZoom(state, val) {
			state.ui.zoom = val.target.value;
		},
		updateBrightness(state, val) {
			state.ui.brightness = val.target.value;
		},

		////////////////////////////////////////////////////////
		// MODALS
		////////////////////////////////////////////////////////

		toggleFontsModal(state, val) {
			state.ui.ModalSelectFont.visible = !state.ui.ModalSelectFont.visible;
		},

		// ui.fontsModal
	},
});
