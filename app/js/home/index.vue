<template lang="html">
    <div :class="$style.home">
        <Heador />
				<Hslider />
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Hslider from './hslider.vue'
export default {
	data () {
		return {

		}
	},
	methods: {

	},
	components: {
		Heador,
		Hslider
	}
}
</script>

<style lang="scss" module>
  .home{
    color: red;
    font-size: 80px;
  }
</style>
