import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import fontFiles from './assets/fonts.json';
import imageCollections from './assets/images.json';

export default new Vuex.Store({
	state: {
		info: {
			version: '0.1.1',
		},
		// General Poster-settings
		poster: {
			ready: false,
			w: 586,
			h: 810,
		},
		////////////////////////////////////////////////////////
		// HEADLINE
		////////////////////////////////////////////////////////

		headline: {
			pos: {
				x: -5,
				y: -44,
			},
			fontSize: 272,
			lineHeight: 0.74,
			content: 'NAM\nJUNE\nPAIK',
			fontFiles: fontFiles,
			currentFont: 'Roboto-Light.ttf',
			updateFont: false,
			align: 'LEFT',
			rotation: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
		subline: {
			pos: {
				x: 586 / 2,
				y: 770,
			},
			fontSize: 22,
			lineHeight: 0.92,
			content: 'Subline',
			// fontFiles: fontFiles,
			// currentFont: fontFiles[0],
			// updateFont: false,
			currentFont: 'Roboto-Medium.ttf',
			align: 'CENTER',
			rotation: {
				x: 0,
				y: 0,
				z: 0,
			},
		},

		////////////////////////////////////////////////////////
		// IMAGE
		////////////////////////////////////////////////////////

		image: {
			imageCollections: imageCollections,
			selectedImage: 'technology/9460224502_3ca204a02b_o_kl.jpg',
			updateImage: false,
			pos: {
				x: 367,
				y: 467,
			},
			w: 787,
			rotation: {
				x: 139,
				y: 133,
				z: 37,
			},
		},

		////////////////////////////////////////////////////////
		// IMAGE
		////////////////////////////////////////////////////////

		image2: {
			imageCollections: imageCollections,
			selectedImage: 'technology/9460224502_3ca204a02b_o_kl.jpg',
			updateImage: false,
			pos: {
				x: 367,
				y: 467,
			},
			w: 300,
			rotation: {
				x: 139,
				y: 133,
				z: 37,
			},
		},

		////////////////////////////////////////////////////////
		// GRID
		////////////////////////////////////////////////////////

		grid: {
			visible: true,
			cols: 48,
			rows: 12,
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
			// colors: [
			// 	'#f1f1f1',
			// 	'#aaaaaa',
			// 	'#777777',
			// 	'#333333',
			// 	'#111111',
			// 	'#f43530',
			// 	'#2203a7',
			// 	'#7D75FF',
			// 	'#FFF587',
			// 	'#FF665A',
			// 	'#7D6B7D',
			// 	'#A3A1A8',
			// 	'#0669A4',
			// 	'#98BFAC',
			// 	'#28784F',
			// 	'#2955A0',
			// 	'#F2C641',
			// ],
			colors: ['#f1f1f1', '#111111', '#ff0000', '#2203a7'],
			background: {
				selectedColor: '#f1f1f1',
			},
			text: {
				selectedColor: '#ff0000',
			},
			grid: {
				selectedColor: '#aaaaaa',
			},
		},

		////////////////////////////////////////////////////////
		// UI
		////////////////////////////////////////////////////////

		ui: {
			// SelectedLayer
			layers: [
				{
					name: 'HEADLINE',
					visible: true,
				},
				{
					name: 'SUBLINE',
					visible: true,
				},
				{
					name: 'IMAGE',
					visible: true,
				},

				{
					name: 'IMAGE2',
					visible: true,
				},
				{
					name: 'GRID',
					visible: true,
				},
				{
					name: 'BASE',
					visible: true,
				},
			],
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
		// SUBLINE
		////////////////////////////////////////////////////////

		updateSublineFont(state, val) {
			state.subline.currentFont = val;
		},

		updateSublineColor(state, selectedColor) {
			state.colors.text.selectedColor = selectedColor;
		},

		updateSublineFontSize(state, fontSize) {
			state.subline.fontSize = fontSize;
		},
		updateSublinePos(state, newPos) {
			state.subline.pos = newPos;
		},

		updateSublineLineHeight(state, lineHeight) {
			state.subline.lineHeight = lineHeight;
		},

		updateSublineContent(state, subline) {
			state.subline.content = subline;
		},

		updateSublineCurrentFont(state, font) {
			state.subline.currentFont = font;
		},

		updateSublineFontTrue(state) {
			state.subline.updateFont = true;
		},
		updateSublineFontFalse(state) {
			state.subline.updateFont = false;
		},

		updateSublineTextAlign(state, val) {
			state.subline.align = val;
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
			if (state.ui.selectedLayer == 'IMAGE') {
				state.image.selectedImage = loc;
			} else {
				state.image2.selectedImage = loc;
			}
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
		// IMAGE 2
		////////////////////////////////////////////////////////

		updateImage2Pos(state, newPos) {
			state.image2.pos = newPos;
		},
		updateImage2W(state, val) {
			state.image2.w = val;
		},
		updateImage2(state, loc) {
			state.image2.selectedImage = loc;
		},
		updateImage2True(state) {
			state.image2.updateImage = true;
		},
		updateImage2False(state) {
			state.image2.updateImage = false;
		},
		updateImage2RotationX(state, val) {
			state.image2.rotation.x = val;
		},
		updateImage2RotationY(state, val) {
			state.image2.rotation.y = val;
		},
		updateImage2RotationZ(state, val) {
			state.image2.rotation.z = val;
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

		logState(state) {
			console.log(state);
		},

		updateReadyStatus(state) {
			console.log('OKAY I AM READY!');
			state.poster.ready = true;
		},
		toggleLayerVisibility(state, index) {
			state.ui.layers[index].visible = !state.ui.layers[index].visible;
		},
	},
});
