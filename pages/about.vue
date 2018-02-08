<template>
	<section class="py-5 text-center">
		<nuxt-link to="/">Home</nuxt-link>
		<p>We are using Node.js {{nodeVersion}}</p>
		<p>This template is based on <a href="https://nuxtjs.org/guide/installation" target="_blank">nuxt starter template</a> and <a href="https://github.com/nuxt-community/electron-template" target="_blank">electron template</a>.</p>
		<p>Vuex persist functionality base on <a href="https://www.npmjs.com/package/vuex-persistfile" target="_blank">vuex-persistfile</a>.</p>
		<p><a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a> is included.</p>
		<p><a href="https://github.com/electron-userland/electron-builder" target="_blank">Electron builder</a> is included to build a ready for distribution Electron app.</p>
	</section>
</template>

<script>
export default {
	mounted () {
		this.$nextTick(() => {
			this.nodeVersion = process.versions.node
		})
	},
	data () {
		return {
			nodeVersion: null
		}
	}
}
</script>

<style scoped>
</style>
