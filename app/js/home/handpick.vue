<template>
	<div :class="$style.hanpick_container">
		<Panel :title="title" :cname="$style.panel">
			<section :class="[$style.content, 'clearfix']">
				<div v-for="item in pro_items" :key="item.title" :class="$style.pro_items">
					<router-link :to="{ name: 'home'}" tag="div" :class="$style.item">
						<money-cast :itemInfo="item"></money-cast>
					</router-link>
				</div>
			</section>
		</Panel>
	</div>
</template>

<script>
	import Panel from '../core/panel.vue'
	import moneyCast from '../public/production.vue'
	import { production } from './../../model/home_model.js'
	export default {
		data () {
			return {
				title: '-理财精选-',
				pro_items:  production
			}
		}, 
		components: {
			moneyCast,
			Panel
		},
	}
</script>

<style lang="scss" module>
.hanpick_container {
	section.panel {
		height: auto;
		margin: 0px;
		padding-top:20px;
		> h4 {
			font-weight: 700;
		}
		.content {
			overflow: hidden;
			position: relative;
			&::before {
				content: "";
				display: block;
				width:  100%;
				height: 0px;
				border: 1px solid #f5f5f5;
				position: relative;
				top: 218px;
			}
			&::after {
				content: "";
				display: block;
				width: 0px;
				height: 436px;
				position: absolute;
				border: 1px solid #f5f5f5;
				left: 50%;
				top: 20px;
				transform: translateX(-1px);
			}
			.pro_items {
				float: left;
				width: 50%;
			}
			.item {
				overflow: hidden;
				> div {
					width: 100%;
				}
			}
		}
	}
}
</style>