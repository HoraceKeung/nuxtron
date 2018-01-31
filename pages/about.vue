<template>
	<section>
		<nuxt-link to="/">Home</nuxt-link>
		<p>We are using Node.js {{nodeVersion}}</p>
		<p v-if="selected">Selected {{selected.label}} with value of {{selected.value}}</p>
	</section>
</template>

<script>
export default {
	computed: {
		selected () { return this.$store.state.selected }
	},
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
