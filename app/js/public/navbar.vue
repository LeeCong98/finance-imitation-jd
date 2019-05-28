<template>
	<Panel title="导航" :class="$style.panel">
		<nav >
			<ul :class="$style.content">
				<router-link :to="{ name: item.href }" tag="li" v-for="item in navIems" :key="item.navTitle">
					<img :src="item.img_src" alt="404">
					<em>{{ item.navTitle }}</em>
				</router-link>
			</ul>
		</nav>	
	</Panel>	
</template>

<script>
	import Panel from './../core/panel.vue'
	import { navbarData as navIems } from './../../model/main_model.js'
	export default {
		data () {
			return {
				navIems: navIems
			}
		},
		methods: {

		},
		components: {
			Panel
		}
	}
</script>

<style lang="scss" module>
	@import './../../css/element.scss';
	.panel {
		@include panel;
		position: fixed;
    margin: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100px;
		> h4 {
			display: none;
		}
		.content {	
			@include flex(row);
			justify-content: space-around;
			li {
				flex: 1;
				text-align: center;
				display: block;
				height: inherit;
				overflow: hidden;
				text-align: center;
				flex: 1;
				-ms-flex: 1;
				-webkit-flex: 1;
				box-flex: 1;
				-ms-box-flex: 1;
				-webkit-box-flex: 1;
				position: relative;
				img {
					width: 44px;
					height: 44px;
					display: block;
			    margin: 12px auto 6px;
				}
				em {
					display: block;
			    color: #4668FF;
					font-size: 22px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
	}
</style>