<template lang="html">
	<Panel :title="公司信息" :class="$style.panel">
		<div>
			<img src="" alt="">

		</div>
	</Panel>
</template>

<script>
	import Panel from './../core/panel.vue'
	export default {
		data () {
			return {
				title: '-公司信息-',

			}
		}
	}
</script>

<style lang="scss" module>
	@import './../../css/element.scss';
	.panel {
		@include panel;
		> h4 {
			display: none;
		}
	} 

</style>