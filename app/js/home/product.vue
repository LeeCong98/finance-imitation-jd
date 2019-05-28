<template lang="html">
	<Panel :class="$style.panel" :title="title">
		<section :class="$style.content">
			<div :class="$style.arrow">更多尖货 ></div>
			<Slider :options="options" :items="commdItems" cname="product-slider"></Slider>
		</section>
	</Panel>
</template>

<script>
	import Panel from './../core/panel.vue'
	import Slider from './../core/slider.vue'
	import { commdItems } from './../../model/home_model.js'
	export default {
		data () {
			return {
				commdItems: commdItems,
				options: {
					paginationClickable: true,
					slidesPerView: 3,
					spaceBetween: 30,
					pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
				},
				title: '-新品推荐-'
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

	<style lang="scss">
	.product-slider {
		.swiper-container {
			box-sizing: border-box;
			padding-left: 24px;
			.swiper-slide {
				font-size: 0px;
				a {
					display: inline-block;
					width: 100%;
					img {
						width: 100%;
						display: block;
						height: 324px;
						border: 1px solid #fafafa;
					}
				}
			}
		} 
	}

	</style>

	<style lang="scss" module>
	.panel {
		position: relative;
		h4 {
			font-weight: 700;
		} 
		.content {
			padding-bottom: 40px;
			.arrow {
				max-width: 40%;
				font-size: 28px;
				color: #999;
				margin-right: 32px;
				background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
				background-size: 18px 28px;
				position: absolute;
				top: 66px;
				right: 15px;
				transform: translateY(-25px);
			}
		}
	} 

	</style>