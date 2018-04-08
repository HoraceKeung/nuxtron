<template>
	<section class="container">
		<img width="256" src="~/assets/icons/icon.png">
		<h1>{{name}}</h1>
		<h2>{{description}}</h2>
		<a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary">Documentation</a>
		<a href="https://github.com/nuxt/nuxt.js" target="_blank" class="btn btn-primary">GitHub</a>
		<a href="https://electronjs.org/" target="_blank" class="btn btn-secondary">Electron</a>
		<a href="https://github.com/electron-userland/electron-builder" target="_blank" class="btn btn-secondary">Electron Builder</a>
	</section>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.btn {
	margin: 0 8px;
}
</style>
