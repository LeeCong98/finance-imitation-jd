<template lang="html">
	<div :class="[$style.banner, cname]">
		<img :src="img_src" alt="404">
	</div>
</template>
<script>
	export default {
		props: {
			img_src: {
				type: String,
				default: ''
			},
			cname: {
				default: '',
				type: String
			}
		},
		data () {
			return {}
		},
		methods: {

		},
		components: {

		}
	}

</script>
<style lang="scss" module>
	.banner {
		display: block;
		img {
			display: block;
			height: 100%;
		}
	}

</style>