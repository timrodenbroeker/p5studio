import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		fontSize: 80,
		headline: 'LOREM IPSUM',
	},
	mutations: {
		updateFontSize(state, fontSize) {
			state.fontSize = fontSize;
		},
	},
	actions: {},
});
