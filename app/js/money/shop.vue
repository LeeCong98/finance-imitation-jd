<template>
	<Panel :title="title" :cname="$style.money_shop">
		<section class="clearfix">
				<shop-item v-for="(item, index) in items" :item="item" :cname="$style.item" :key="item.title">
				</shop-item>
		</section>
		<Panel :title="footerTitle" :cname="$style.footerPanel">
		</Panel>
	</Panel>
</template>

<script>
	import Panel from './../core/panel.vue'
	import shopItem from './../public/shopItem.vue'
	import { shopProduct } from './../../model/money_model.js' 
	export default {
		data () {
			return {
				title: '特色推荐',
				items: shopProduct,
				footerTitle: '京东金融出品'
			}
		},
		components: {
			shopItem,
			Panel
		},
		filters: {
			odd (data) {
				return data%2 === 0 ? 'item_odd' : 'item.even'
			}
		}
	}
</script>

<style lang="scss" module>
	.money_shop {
		h4 {
			text-align: left;
	    margin-left: 40px;
	    font-weight: 700;
	    font-size: 36px;
		}
		section {
			background: rgb(243, 245, 247);
			.item {
				width: 50%;
				float: left;
				margin-bottom: 8px;
			}
			.item:nth-child(odd) {
				padding-right: 4px;	
				border-right: 4px solid rgb(243, 245, 247);
			}
			.item:nth-child(even) {
				padding-left: 4px;
				box-sizing: border-box;
				border-left: 4px solid rgb(243, 245, 247);
			}
		}
		.footerPanel {
			> h4 {
				font-weight: 500;
				font-size: 24px;
				color: #b1b4bb;
				text-align: center;
				margin-bottom: 60px;
			}
		}
	}
</style>