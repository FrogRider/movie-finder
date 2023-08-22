// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@element-plus/nuxt',
		'@pinia/nuxt',
		'nuxt-lodash',
	],
	devtools: { enabled: false },
	css: ['@/assets/css/main.scss'],
})
