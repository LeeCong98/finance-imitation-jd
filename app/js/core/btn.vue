<template lang="html">
	<div :class="[btnName, cname]">
		<slot  />
	</div>
</template>
<script>
	export default {
		props: {
			cname: {
				type: String,
				default: "",
			}
		},
		data () {
			return {
				btnName: 'btn',
			}
		},
		methods: {

		},
		filters: {

		},
		watch: {

		}
	}
</script>
<style lang="scss">
	// 引用之前mixin
	@import "../../css/element.scss";
	.btn {
		@include btn;
	}

</style>