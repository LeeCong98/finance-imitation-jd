<template lang="html">
	<Panel title="轮播图" :cname="$style.panel">
		<section :class="$style.content">
			<Slider :cname="$style.slider" :items="items">
			</Slider>
		</section>
	</Panel>
</template>

<script>
	import Panel from './../core/panel.vue'
	import Slider from './../core/slider.vue'
	import { moneySlider as SliderData } from '../../model/money_model.js' 
	export default {
		data () {
			return {
				items: SliderData,
			}
		},
		components: {
			Panel,
			Slider
		}
	}
</script>

<style lang="scss" module>
	@import './../../css/element.scss';
	section.panel {
		@include panel;
		margin: 0px;
		h4 {
			display: none;
		}
		.content {
			.slider {
				a {
					display: block;
					height: 480px;
					img {
						height: 100%;
						padding-top: 30px;
					}
				}
			}
		}
	} 


</style>