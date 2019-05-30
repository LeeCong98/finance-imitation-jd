<template>
  <Panel :class="[$style.panel, cname]" title="白条" >
    <div :class="$style.content">
      <img  :src="entryObj.img_src" alt="404">
      <p :class="$style.borrowTitle">{{ entryObj.title }}</p>
     	<div :class="$style.maximum">
     		 <span>¥</span>
         {{ entryObj.moneyMaximum }}
     	</div>
      <button type="button" :class="$style.entry">
        {{ entryObj.handler }} 
      </button>
    </div>
  </Panel>
</template>

<script>
	import Panel from "../core/panel"
	import { bannerObj} from './../../model/ious_model.js'
	export default {
		data () {
			return {
        entryObj: bannerObj
			}
		},
    props: {
      cname: {
        type: String,
        default: ''
      }
    },
	  components: {
	    Panel
	  },
	}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
  }
  .content {
    position: relative;
    color: #fff;
    padding: 0px 26px;
    .borrowTitle {
      position: absolute;
      top: 18%;
      left: 10%;
      font-size: 30px;
    }
    .maximum {
      position: absolute;
      top: 30%;
      left: 10%;
      font-size: 80px;
      font-family: DINAlternate-Bold;
      text-shadow: 0 0.3125rem 0.3125rem rgba(63,39,0,.2);
      span {
        font-size: 60px;
        margin-right: -20px;
      }
    }
  	.entry {
      position: absolute;
      top: 56%;
      left: 10%;
      font-size: 26px;
      font-weight: 500;
      width: 180px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      background: url(//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png) 0 0 no-repeat;
      background-size: 100% 100%;
      color: white;
      padding: 0px;
      border: none;
      cursor: pointer;
  	}
  	> img {
  		width: 100%;
  	}
  }
}
</style>
