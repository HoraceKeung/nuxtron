<template>
	<section class="py-5 text-center">
		<nuxt-link to="/">Home</nuxt-link>
		<p>We are using Node.js {{nodeVersion}}</p>
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
