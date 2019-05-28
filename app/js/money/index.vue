<template lang="html">
    <div :class="$style.home">
      <Heador />
      <Notice />
      <Mslider />
      <money-menu :items="menuData" :cname="$style.moneyMenu" />
      <Ada />
      <Finance />
      <Shop />
			<Navbar />
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Mslider from './../money/mslider.vue'
import Navbar from './../public/navbar.vue'
import Notice from './../money/notice.vue'
import moneyMenu from './../public/menuItems.vue'
import Ada from './../money/ada.vue'
import Finance from './../money/finance.vue'
import Shop from './../money/shop.vue'
import { moneyMenu as menuData } from './../../model/money_model.js'
export default {
	data () {
		return {
			 menuData :  menuData 
		}
	},
	methods: {

	},
	components: {
		Heador,
		Navbar,
		Mslider,
		Notice,
		moneyMenu,
		Ada,
		Finance,
		Shop
	}
}
</script>

<style lang="scss" module>
  .home{
    color: red;
    font-size: 80px;
    padding-bottom: 100px;
    .moneyMenu {
			padding-top: 40px;
    }
  }
</style>
