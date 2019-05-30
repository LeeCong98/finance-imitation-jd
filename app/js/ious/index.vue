<template lang="html">
    <div :class="$style.ious" >
      <Heador  />
      <Borrow :cname="$style.borrow" />
      <finance-ious></finance-ious>
    	<Life :title=" lifeData[0].comTitle" :items="lifeData.slice(1)" :cname="$style.life_more" />
			<Navbar />
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Borrow from './../ious/borrow.vue'
import financeIous from './../ious/finance_ious.vue'
import Navbar from './../public/navbar.vue'
import Life from './../public/life.vue'
import {lifeData } from './../../model/ious_model.js'
export default {
	data () {
		return {
			 lifeData
		}
	},
	methods: {

	},
	components: {
		Heador,
		Navbar,
		financeIous,
		Borrow,
		Life
	}
}
</script>

<style lang="scss" module>
.ious{
	color: red;
	font-size: 80px;
	padding-bottom: 100px;
	background: url(//m.jr.jd.com/vip/borrowMoney/css/i/bj.png) 0 0 no-repeat;
	background-size: 100% auto;
	.borrow {
		padding-top: 100px;
		background: rgba(255,255,255,0);
		margin: 0px;
		> h4 {
			display: none;
		}
		> div {
			margin-top: 40px;
		}
	}
	.life_more {
		ul {
			li {
				img {
					width: 76px;
					height: 76px;
				}
			}
		}
	}
}
</style>

<style lang="scss">
section.panel-container {
	> h4 {
		text-align: left;
		margin-left: 40px;
		font-weight: 600;
	}
}
</style>
