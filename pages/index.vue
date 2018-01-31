<template>
	<div>
		<h1 class="text-uppercase primary">Welcome!</h1>
		<p class="secondary">This is Nuxtron!</p>
		<nuxt-link to="/about">About page</nuxt-link>
		<select-demo :options="options"/>
	</div>
</template>

<script>
import SelectDemo from '~/components/SelectDemo'
export default {
	components: {SelectDemo},
	data () {
		return {
			options: [
				{label: 'Apple', value: 6},
				{label: 'Orange', value: 3},
				{label: 'Banana', value: 7}
			]
		}
	}
}
</script>
