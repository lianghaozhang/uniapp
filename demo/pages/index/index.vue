<template>
	<view>
		<myheader :da="'首页标题'" :xiao="'index page'" @ipt="f"></myheader>
		<button @click="open">
			打开
		</button>
		<!-- <box :state="state" @closebox="close"></box> -->
		<box :state.sync="state"></box>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				state: false
			}
		},
		onLoad() {

		},
		methods: {
			f(e){
				console.log(e);
			},
			open(){
				this.state = true;
			},
			// close(e){
			// 	this.state = e;
			// }
		}
	}
</script>

<style lang="scss">

</style>