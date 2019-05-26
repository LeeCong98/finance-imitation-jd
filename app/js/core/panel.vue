<template lang="html">
	<section :class="[panelClass, cname]">
		<h4>{{ title }}</h4>
		<slot />	
	</section>
</template>
<script>
	export default {
		props: {
			cname: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			}
		}
		data () {
			return {
				panelClass: 'panel'
			}
		},
		methods: {

		}
	}
</script>
<style lang="scss">
	@import '../../element.scss';
	.panel {
		@include 'panel';
	}
</style>