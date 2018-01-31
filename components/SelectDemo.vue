<template>
	<div>
		<v-select :options="options" :label="'label'" :value="selected" :on-change="update"></v-select>
	</div>
</template>

<script>
export default {
	props: {
		options: {type: Array, required: true}
	},
	computed: {
		selected () { return this.$store.state.selected }
	},
	methods: {
		update (value) {
			this.$store.commit('setSelected', value)
		}
	}
}
</script>

<style scoped>
</style>
