<template>
  <Panel :class="$style.panel" title="神券满">
    <section :class="$style.content">
     	<div :class="$style.entry">
     		 <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
     	</div>
     	<Banner :img_src="bannerInfo.img_src" :cname="$style.bannerImg" />
    </section>
  </Panel>
</template>

<script>
	import Panel from "../core/panel"
	import Banner from './../public/banner.vue'
	import { bannerArr } from './../../model/money_model.js'
	export default {
		data () {
			return {
				bannerInfo: bannerArr[0]
			}
		},
	  components: {
	    Panel,
	    Banner
	  },
	}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
  	.entry {
  		img {
  			width: 100%;
  			height: 230px;
  			display: block;
  		}
  	}
  	.bannerImg {
  		margin-top: 40px;
  		height: 170px;
  	}
  }
}
</style>
