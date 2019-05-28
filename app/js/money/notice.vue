<template lang="html">
	<div :class="$style.notice" >
		<img :src="noticeBanner.src" alt="">
	</div>
</template>

<script>
	import { notice } from './../../model/money_model.js'
	export default {
		data () {
			return {
				noticeBanner: notice[0]
			}
		}
	}
</script>

<style lang="scss" module>
	.notice {
    margin: 0 auto;
    height: 120px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    top: 100px;
    background: transparent;
    img {
    	display: block;
    	width: 100%;
    	margin: 0px auto;
    }
	}

</style>