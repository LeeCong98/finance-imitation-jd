<template lang="html">
	<div :class="[$style.shopItem, 'cname']">
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
				<div :class="$style.progress_inner" :style="{ width: item.progress }">
				</div>
				<span :class="$style.percent">{{  item.progress }}</span>
			</div>
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
		}
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
		  margin: 22px auto 10px;
			img {
				width: 100%;
		    margin: 0px auto;
			}
		}
		h5 {
			padding-left: 30px;
	    text-align: center;
	    text-align: left;
			font-family: PingFangSC-Regular;
	    letter-spacing: -5px;
	    font-size: 28px;
	    margin: 22px 0px;
	    height: 44rem;
	    line-height: 44rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
		}
		.price {
	    font-family: DIN-Bold;
	    color: #ff9a1c;
	    margin-bottom: 7px;
	    height: 1.0625rem;
	    line-height: 1.0625rem;
	    padding-left: 30px;
			.pro {
		    font-size: .6875rem;
    		color: #f92;
			}
			.up {
				font-family: STHeitiSC-Medium;
		    font-size: 24px;
		    color: #999;
		    margin-left: 10px;
			}
		}
		.rogress_warp {
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
		    display: inline-block;
		    height: 24px;
		    line-height: .24px;
		    text-align: center;
		    float: left;
		    margin-left: 6px;
	    }
		}
	}
</style>