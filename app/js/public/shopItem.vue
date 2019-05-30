<template lang="html">
	<div :class="[$style.shopItem, cname]">
		<div :class="$style.img_product">
			<img :src="item.img_src" alt="404">
		</div>
		<h5>
			{{ item.title }}
		</h5>
		<div :class="$style.price">
			<span :class="$style.pro">￥</span>
				{{ item.price }}
			<span :class="$style.up">起</span>
		</div>
		<div :class="$style.progress_warp">
			<div :class="$style.progress">
					<div :class="$style.progress_inner" :style="{ width: parseInt(item.progress) > 100 ? '100%' : item.progress }">
				</div>
			</div>
			<span :class="$style.percent">{{  parseInt(item.progress) + '%' }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		props: {
			item: {
				default: {
					img_src: null,
					title: null,
					price: null,
					progress: null
				},
				type: Object
			},
			cname: {
				type: String,
				default: ''
			}
		},
	}
</script>

<style lang="scss" module>
	.shopItem {
		background: #fff;
	  overflow: hidden;
	  position: relative;
	  box-sizing: border-box;
		.img_product {
			width: 100%;
		  height: 100%;
		  margin: 20px auto 10px;
			img {
				width: 100%;
		    margin: 0px auto;
		    padding: 0px 44px;
		    box-sizing: border-box;
			}
		}
		h5 {
			padding-left: 30px;
	    text-align: center;
	    text-align: left;
			font-family: PingFangSC-Regular;
	    font-size: 28px;
	    margin: 22px 0px;
	    height: 44px;
	    line-height: 44px;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    color: #333;
		}
		.price {
	    font-family: DIN-Bold;
	    color: #ff9a1c;
	    margin-bottom: 7px;
	    height: 1.0625rem;
	    line-height: 1.0625rem;
	    padding-left: 30px;
	    font-size: 30px;
			.pro {
		    font-size: 20px;
    		color: #f92;
			}
			.up {
				font-family: STHeitiSC-Medium;
		    font-size: 24px;
		    color: #999;
		    margin-left: 10px;
			}
		}
		.progress_warp {
	    height: 30px;
	    padding: 0 30px;
	    margin-bottom: 26px;
	    .progress {
  	    width: 70%;
		    height: 10px;
		    margin-top: 10px;
		    background: #f3f5f7;
		    border-radius: 5px;
		    float: left;
		    .progress_inner {
		    	font-weight: 700;
			    width: 50%;
			    height: 10px;
			    background-image: linear-gradient(270deg,#f55 1%,#ff9c31);
			    border-radius: .625rem;
		    }
	    }
	    .percent {
  	    font-size: 20px;
		    color: #999;
		    letter-spacing: 3px;
		    height: 24px;
		    line-height: 24px;
		    text-align: center;
		    float: left;
		    margin-left: 6px;	
	    }
		}
	}
</style>