<template lang="html">
	<div :class="[$style.items, cname]">
		<Item v-for="item in items" :item="item" :key="item.title"  />
	</div>
</template>

<script>
	import Item from './menu.vue'
	export default {
		props: {
			items: {
				default () {
					return [{

					}]
				},
				type: Array
			},
			cname: {
				default: '',
				type: String
			}
		},
		data () {
			return {

			}
		},
		components: {
			Item
		}
	}
</script>

<style lang="scss" module>
	.items {
    width: 100%;
    min-height: 4.21875rem;
    overflow: hidden;
    background-color: #fff;
    display: -ms-flexbox;
    display: flex;

	}
</style>