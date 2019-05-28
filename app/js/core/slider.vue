<template lang="html">
	<section :class="['swiper',cname]">
		<swiper :options="options">
			<swiper-slide v-for="item in items">
				<router-link :to="{name: item.href }">
          <img :src="item.src" alt="">
        </router-link>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<slot />
	</section>
</template>

<script>
	// introduce vue-awesome-swiper
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	// end introduce vue-awecome-swiper
	export default {
		props: {
			options: {
				type: Object,
				default() {
	        return {
	          autoplay: {
	          	disableOnInteraction: false,
	          },
	          loop: true,
	          pagination: {
	            el: ".swiper-pagination"
	          },
	          notNextTick: false
	        }
      	}
			},
			items: {
				type: Array,
				default () {
					return [{href: null, src: null}]
				}
			},
			cname: {
				type: String,
				default: ''
			}
		},
		data () {
			return {

			}
		},
		created () {
			
		},
		components: {
			swiper: swiper,
			swiperSlide: swiperSlide
		}
	}
</script>

<style lang="scss">
	@import "~swiper/dist/css/swiper.css";
</style>