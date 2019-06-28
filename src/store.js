import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import fontFiles from './assets/fonts.json';
import imageCollections from './assets/images.json';

export default new Vuex.Store({
	state: {
		info: {
			version: '0.0.2',
		},
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
			content: 'ABC\nDEF',
			fontFiles: fontFiles,
			currentFont: fontFiles[0],
			updateFont: false,
			align: 'LEFT',
			rotation: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
		text2: {
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
			align: 'LEFT',
			rotation: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
		////////////////////////////////////////////////////////
		// SUBLINE
		////////////////////////////////////////////////////////

		subline: {
			text: '',
		},

		////////////////////////////////////////////////////////
		// IMAGE
		////////////////////////////////////////////////////////

		image: {
			imageCollections: imageCollections,
			selectedImage: 'technology/28093851899_dfeb9407b3_o.jpg',
			updateImage: false,
			pos: {
				x: 586 / 2,
				y: 810 / 2,
			},
			w: 500,
			rotation: {
				x: 0,
				y: 0,
				z: 0,
			},
		},

		////////////////////////////////////////////////////////
		// GRID
		////////////////////////////////////////////////////////

		grid: {
			visible: true,
			cols: 4,
			rows: 4,
		},
		render: {
			record: false,
			savePNG: false,
			saveJPG: false,
		},

		////////////////////////////////////////////////////////
		// COLORS
		////////////////////////////////////////////////////////

		colors: {
			colors: ['#f1f1f1', '#111111', '#f43530', '#2203a7'],
			background: {
				selectedColor: '#111111',
			},
			text: {
				selectedColor: '#f1f1f1',
			},
			grid: {
				selectedColor: '#f43530',
			},
		},

		////////////////////////////////////////////////////////
		// UI
		////////////////////////////////////////////////////////

		ui: {
			// SelectedLayer
			layers: ['BASE', 'HEADLINE', 'IMAGE', 'GRID'],
			selectedLayer: 'HEADLINE',

			// Modals
			ModalSelectFont: {
				visible: false,
			},
			ModalSelectImage: {
				visible: false,
			},
			zoom: 1,
			brightness: 0,
		},
	},

	mutations: {
		////////////////////////////////////////////////////////
		// HEADLINE
		////////////////////////////////////////////////////////

		updateHeadlineFont(state, val) {
			state.headline.currentFont = val;
		},

		updateHeadlineColor(state, selectedColor) {
			state.colors.text.selectedColor = selectedColor;
		},

		updateHeadlineFontSize(state, fontSize) {
			state.headline.fontSize = fontSize;
		},
		updateHeadlinePos(state, newPos) {
			state.headline.pos = newPos;
		},

		updateHeadlineLineHeight(state, lineHeight) {
			state.headline.lineHeight = lineHeight;
		},

		updateHeadlineContent(state, headline) {
			state.headline.content = headline;
		},

		updateHeadlineCurrentFont(state, font) {
			state.headline.currentFont = font;
		},

		updateHeadlineFontTrue(state) {
			state.headline.updateFont = true;
		},
		updateHeadlineFontFalse(state) {
			state.headline.updateFont = false;
		},

		updateHeadlineTextAlign(state, val) {
			state.headline.align = val;
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
		updateImage(state, loc) {
			state.image.selectedImage = loc;
		},
		updateImageTrue(state) {
			state.image.updateImage = true;
		},
		updateImageFalse(state) {
			state.image.updateImage = false;
		},
		updateImageRotationX(state, val) {
			state.image.rotation.x = val;
		},
		updateImageRotationY(state, val) {
			state.image.rotation.y = val;
		},
		updateImageRotationZ(state, val) {
			state.image.rotation.z = val;
		},

		////////////////////////////////////////////////////////
		// LAYERS
		////////////////////////////////////////////////////////
		updateSelectedLayer(state, val) {
			state.ui.selectedLayer = val;
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

		toggleImagesModal(state, val) {
			state.ui.ModalSelectImage.visible = !state.ui.ModalSelectImage.visible;
		},

		toggleRecord(state) {
			state.render.record = !state.render.record;
		},
		savePNG(state) {
			state.render.savePNG = true;
		},
		saveJPG(state) {
			state.render.saveJPG = true;
		},
		stopSaving(state) {
			state.render.saveJPG = false;
			state.render.savePNG = false;
		},

		closeAllModals(state) {
			state.ui.ModalSelectImage.visible = false;
			state.ui.ModalSelectFont.visible = false;
		},

		// ui.fontsModal
	},
});
