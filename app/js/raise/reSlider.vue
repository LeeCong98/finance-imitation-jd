<template>
	<Panel title="白条轮播图" :class="$style.panel">
		<Slider :items="SliderData" />
	</Panel>
</template>

<script>
	import Slider from './../core/slider.vue'
	import Panel from './../core/panel.vue'
	import { reiseProduct as SliderData } from './../../model/reise_model.js'
	export default {
		data () {
			return {
				SliderData
			}
		},
		methods: {

		},
		components: {
			Slider,
			Panel
		}
	}
</script>

<style lang="scss" module>
	section.panel {
		margin-top: 100px;
		> h4 {
			display: none;
		} 
	}

</style>