import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	buildModules: ['@nuxt/typescript-build'],
	ssr: false,
	alias: {
		'@': resolve(__dirname, './'),
	},
	app: {
		baseURL: '/movie-finder/',
		buildAssetsDir: 'assets',
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@element-plus/nuxt',
		'@pinia/nuxt',
		'nuxt-lodash',
	],
	devtools: { enabled: false },
	css: ['~/assets/css/main.scss'],
})
