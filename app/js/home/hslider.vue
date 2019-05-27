<template lang="html">
	<article class="hlider">
		<Slider :cname="$style.slider" :items="items"></Slider>
		<section :class="$style.list">
			<div 
				:class="$style.item"
				v-for="item in entries"
				:key="item.href"
			>
				<router-link :to="{ name: items.href }" tag="div">
					<img :src="item.img" :alt="item.title" />
					<h4>{{ item.title }}</h4>
				</router-link>
			</div>
		</section>
	</article>
</template>
<script>
	import Slider from '../core/slider.vue'
	// #引入数据model
	import { items, entries} from '../../model/home_model.js'
	export default {
		data () {
			// #注意后续数据的更新;
			return {
				items: items,
				entries: entries
			}
			// #注意后续数据的更新;
		},
		components: {
			Slider
		}
	}
</script>
<style lang="scss" module>
	@import '../../css/element.scss';
	.slider {
		margin-top: 105px;
		img {
			display: block;
			width: 100%;
		}
	}
	.list {
		@include list(row);
		background: white;
		> div {
			width: 25%;
			padding-top: 30px;
		}
		.item {
			text-align: center;
			display: block;
			cursor: pointer;
			 img {
			   width: 90px;
			   height: 90px;
			 }
			 h4 {
			 	margin-top: 12px;
			 	font-size: 26px;
			 	color: #666;
			 }
		}
	}
</style>