<template lang="html">
    <div :class="$style.home">
        <Heador />
				<Hslider />
				<Handpick />
				<Borrow />
				<Product />
				<Life />
				<Footer />
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Hslider from './hslider.vue'
import Handpick from './handpick.vue'
import Borrow from './borrow.vue'
import Product from './product.vue'
import Life from './life.vue'
import Footor from './../public/footer.vue'
export default {
	data () {
		return {

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
		Footor
	}
}
</script>

<style lang="scss" module>
  .home{
    color: red;
    font-size: 80px;
  }
</style>
