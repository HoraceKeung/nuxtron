<template>
	<div>
		<p>{{display}}</p>
	</div>
</template>

<script>
export default {
	computed: {
		display () {
			if (this.now) {
				const y = this.now.getFullYear()
				const m = this.now.getMonth() + 1
				const d = this.now.getDate()
				const hour = this.now.getHours()
				const min = this.now.getMinutes()
				const sec = this.now.getSeconds()
				return y + '/' + m + '/' + d + ', ' + hour + ':' + min + ':' + sec
			}
			return ''
		}
	},
	mounted () {
		this.$nextTick(() => {
			this.setNow()
			this.interval = setInterval(() => { this.setNow() }, 1000)
		})
	},
	methods: {
		setNow () {
			this.now = new Date()
		}
	},
	data () {
		return {
			now: null,
			interval: null
		}
	},
	beforeDestroy () {
		clearInterval(this.interval)
	}
}
</script>

<style scoped>
</style>
