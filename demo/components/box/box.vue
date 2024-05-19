<template>
	<view>
		<view>
			---------弹出盒效果---------
		</view>
		<view class="box" :style="{height: state ? '400rpx' : '0'}"></view>
		<button size="mini" @click="put">
			关闭
		</button>
	</view>
</template>

<script>
	export default {
		name:"box",
		props:{
			state:{
				type: Boolean,
				default:true
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			put(){
				this.$emit("update:state", false);
			}
		}
	}
</script>

<style lang="scss">
	.box{
		height: 400rpx;
		width: 400rpx;
		background: #41a863;
	}
</style>