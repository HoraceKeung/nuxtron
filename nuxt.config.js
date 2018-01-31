module.exports = {
	mode: 'spa',
	loading: false,
	/*
	** Electron Settings
	*/
	electron: {
		width: 1024,
		height: 768
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Extend only webpack config for client-bundle
			if (isClient) {
				config.target = 'electron-renderer'
			}
		}
	},
	css: [
		'bootstrap/dist/css/bootstrap.css',
		'@/assets/css/global.css'
	],
	plugins: ['~/plugins/main.js'],
	router: {
		middleware: 'routeGuard'
	}
}
