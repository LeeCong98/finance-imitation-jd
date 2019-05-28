<template lang="html">
	<Panel title="公司信息" :class="$style.panel">
		<div :class="$style.help">
			<img :src="footerInfo.footerBanner.img_src" alt="404">
		</div>
		<ol :class="$style.terminalVersion">
			<li v-for="item in footerInfo.version" :key="item.vTitle">
				<img :src="item.icon_src" alt="404">
				<em>{{ item.vTitle }}</em>
			</li>
		</ol>
		<dl :class="$style.copyright">
			<dt>{{ cpInfo[0]  }}</dt>
			<dd v-for="description in cpInfo.slice(1)" :key="">
				{{ description }}
			</dd>
		</dl>
	</Panel>
</template>

<script>
	import Panel from './../core/panel.vue'
	import { footerInfo, copyright as cpInfo } from './../../model/home_model.js'
	export default {
		data () {
			return {
				title: '-公司信息-',
				footerInfo: footerInfo,
				cpInfo: cpInfo
			}
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
	> h4 {
		display: none;
	}
	.help {
		@include flex;
		img {
			width: 100%;
		}
	}
	.terminalVersion {
		margin-bottom: 30px;
		margin-top: 40px; 
		display: flex;
		font-size: 24px;
		color: #666;
		@include flex(row);
		li {
			flex: 1;
			text-align: center;
			em {
				display: block;
				line-height: 60px;
			}
		}
	}
	.copyright {
		font-size: 24px;
		dd, dt {
			background: #F5F5F5;
    	text-align: center;
		  font-size: 24px;
	    line-height: 1.6;
	    padding: 24px 32px;
	    text-align: center;
	    color: #999;
	    position: relative;
	    box-sizing: border-box;
		  &::after {
		  	content: '';
		  	position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 2px;
		    display: block;
		    transform: scaleY(.5);
		    -webkit-transform-origin: 0 0;
		    transform-origin: 0 0;
		    background: #DDD;
		    -webkit-transform: scaleY(.5);
		    -ms-transform: scaleY(.5);
		  }
		}
	}
} 

</style>