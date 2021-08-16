module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.(js|ts)x?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

//issuer: { test: /\.(js|ts)x?$/,},
//test: /\.(js|ts)x?$/,
// webpack(config) {