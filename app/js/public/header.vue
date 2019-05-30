<template lang="html">
	<div :class="$style.header">
		<span :class="$style.left">
			<a href="#">
				<em>注册</em>
			</a>
			&nbsp; | &nbsp;
			<a href="#"> 
				<em>登录</em>
			</a>
		</span>
		<btn :class="$style.btnDown" to="{ name: 'down'}">App下载</btn>	
	</div>
</template>
<script>
	import btn from '../core/btn.vue'
	export default {
		data () {
			return {
			}
		},
		methods: {

		},
		components: {
			btn,
		}
	}

</script>
<style lang="scss" module>
	.header {
		color: #666;
		height: 100px;
		line-height: 100px;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		background: url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
		background-color: white;
		background-size: auto 50%;
		font-size: 32px;
		z-index: 100;
		.left {
			font-size: 28px;
			height: 30px;
			line-height: 30px;
			margin: 17px 0 0 18px;
			a {
				color: inherit;
			}
		}
		.btnDown {
			float: right;
			font-size: 24px;
			border-width: 0px;
			height:56px;
			line-height: 56px;
			min-width: 120px;
			padding: 0px;
			border-radius: 4px;
			margin: 28px 24px 0 0;
		}
	}

</style>