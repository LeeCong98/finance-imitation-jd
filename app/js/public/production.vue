<template>
	<div class="cast_item">
		<h4>
		 <span class="title">{{ itemInfo.title }}</span>
		 <span class="pro_feature">{{ itemInfo.feature_icon }}</span>
		</h4>
		<h5>
			{{ itemInfo.percentage  }}
		</h5>
		<p class="pro_earnings">
			{{ itemInfo.pro_des}}
		</p>
		<slot />
	</div>
</template>
<script>
	export default {
		props: {
			itemInfo: {
				type: Object,
				default: {
					title: null,
					feature_icon: null,
					percentage: null,
					pro_des: null
				}
			}
		}
	}
</script>
<style lang="scss">
	.cast_item {
	  width: 50%;
    padding-left: 32px;
    height: 218px;
    box-sizing: border-box;
    float: left;
    position: relative;
	  h4 {
			font-family: PingFangSC-Medium;
	    color: #333;
	    height: 42px;
	    line-height: 42px;
	    box-sizing: border-box;
	    margin: 34px 0 16px;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    font-size: 32px;
	    .title {
				color: #333;
		    font-weight: 700;
		    font-size: 30px;
		    display: block;
		    float: left;
		    height: 42px;
		    line-height: 42px;
	    }
	  	.pro_feature {
	  		float: right;
				height: 34px;
		    line-height: 34px;
		    font-size: 22px;
		    padding: 0 8px;
		    color: #FF5155;
		    float: left;
		    position: relative;
		    top: 3px;
		    left: 8px;
		    text-align: center;
				&::before {
					min-width: 104px;
			    line-height: 34px;
			    content: '';
			    position: absolute;
			    top: 0;
			    left: 0;
			    width: 200%;
			    height: 200%;
			    display: block;
	        transform: scale(.5,.5);
			    -webkit-transform-origin: 0 0;
			    transform-origin: 0 0;
			    box-sizing: border-box;
			    border: 1px solid #FF5155
				}
	  	}
	  }
		h5 {
			font-weight: 700;
	    font-size: 44px;
	    height: 58px;
	    line-height: 58px;
	    color: #FF5155;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
		}
		p {
			font-size: 24px;
	    height: 34px;
	    line-height: 34px;
	    color: #999;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
		}
	}
</style>