<template>
	<Panel :title="title" :cname="$style.money_shop">
		<section>
				<shop-item v-for="(item, index) in items" :item="item" :class="index | odd" :cname="$style.item" :key="item.title">
				</shop-item>
		</section>
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
				items: shopProduct
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
			.item {
				width: 50%;
			}
		}
	}
</style>