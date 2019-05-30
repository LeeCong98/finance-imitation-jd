<template lang="html">
	<div :class="$style.reise">
	  <Heador />
		<reSlider /> 
		<reTextSlider />
		<Diyly />
		<Commend :item="item" v-for="item in commendData" :key="item.catgory"/>
		<More />
		<Navbar />
	</div>
</template>

<script>
	import Heador from './../public/header.vue'
	import Navbar from './../public/navbar.vue'
	import reSlider from './reSlider.vue' 
	import Diyly from './daily.vue'
	import reTextSlider from './../raise/reTextSlider.vue'
	import More from './more.vue'
	import Commend from './../raise/commend.vue'
	import {
		productOne,
		productTwo,
		productThree } from './../../model/reise_model.js'
	export default {
		data () {
			return {
				 commendData: [productOne, productTwo, productThree]
			}
		},
		methods: {

		},
		components: {
			Heador,
			Navbar,
			reSlider,
			Diyly,
			Commend,
			reTextSlider,
			More
		}
}
</script>

<style lang="scss" module>
	.reise {
		padding-bottom: 100px;
	}	
</style>
