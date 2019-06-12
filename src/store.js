import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		fontSize: 60,
		headline: 'LOREM IPSUM',
	},
	mutations: {
		updateFontSize(state, fontSize) {
			state.fontSize = fontSize;
		},
		updateHeadline(state, headline) {
			state.headline = headline;
		},
	},
	actions: {},
});
