<template lang="html">
	<Panel :class="$style.panel">
		<section :class="$style.content">
			<div>
				<Banner :img_src="item.catory" :cname="$style.banner"  />
				<shopItem 
					:item="item"
					v-for="item in item.list"
				  :key="item.catory"
				  :cname="$style.shopItem" />
			</div>
		</section>
	</Panel>
</template>

<script>
	import Panel from './../core/panel.vue'
	import Banner from './../public/banner.vue'
	import shopItem from './../public/shopItem.vue'
	export default {
		props: {
			item: {
				type: Object,
				default: {}
			}
		},
		data () {
			return {
				options: {
					paginationClickable: true,
					slidesPerView: 3,
					spaceBetween: 30,
					pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
				},
			}
		},
		methods: {

		},
		components: {
			shopItem,
			Panel,
			Banner
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
			display: none;
		} 
		.content {
	    overflow: hidden;
			padding-bottom: 40px;
			.banner {
				img {
					box-sizing: border-box;
					display: block;
					padding: 0px 15px;
					height: auto;
					width: 100%;
				}
			}
			.shopItem {
		    width: 50%;
		    display: inline-block;
		    float: left;
			}
		}
	} 

	</style>