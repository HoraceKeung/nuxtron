<template>
	<section class="w-100 text-center d-flex position-absolute" style="bottom: 0px; top: 0px;">
		<div class="m-auto">
			<img width="256" class="mb-3" src="~/assets/icons/icon.png">
			<h1 class="text-uppercase primary">Welcome!</h1>
			<p class="secondary">This is Nuxtron!</p>
			<date-time />
			<nuxt-link to="/about">About</nuxt-link>
		</div>
	</section>
</template>

<script>
import DateTime from '~/components/DateTime'
export default {
	components: {DateTime}
}
</script>
