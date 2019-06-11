// vue.config.js
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
			  @import "@/scss/style.scss";
			`,
			},
		},
	},
};
