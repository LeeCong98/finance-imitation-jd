<template lang="html">
    <div :class="$style.home">
      <Heador />
			<Hslider />
			<Handpick />
			<Borrow />
			<Product />
			<Life :title="lifeMenu[0].comTitle" :items="lifeMenu.slice(1)" />
			<Footor />
			<Navbar />
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Hslider from './hslider.vue'
import Handpick from './handpick.vue'
import Borrow from './borrow.vue'
import Product from './product.vue'
import Life from './../public/life.vue'
import { lifeMenu } from './../../model/home_model.js'
import Footor from './../public/footer.vue'
import Navbar from './../public/navbar.vue'
export default {
	data () {
		return {
			lifeMenu,
		}
	},
	methods: {

	},
	components: {
		Heador,
		Hslider,
		Handpick,
		Borrow,
		Product,
		Life,
		Footor,
		Navbar
	}
}
</script>

<style lang="scss" module>
  .home{
    color: red;
    font-size: 80px;
    padding-bottom: 100px;
  }
</style>
