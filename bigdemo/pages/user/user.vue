<template>
	<view>
		<view class="shang">
			<text>
				浏览记录
			</text>
		</view>
		<view class="xia" v-for="item in hisArr">
			<newsbox :newitem="item"></newsbox>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hisArr: [],
			};
		},
		methods:{
			getHistory(){
				this.hisArr = uni.getStorageSync("history");
			}
		},
		mounted(){
			this.getHistory();
		}
	}
</script>

<style lang="scss">
	.shang{
		//background: rebeccapurple;
		height: 200rpx;
		display: flex;
		border-bottom: 1rpx solid gray;
		//padding-bottom: 30rpx;
		//flex-direction: column;//设置主轴方向为垂直方向
		justify-content: center;//设置子元素在主轴方向上居中
		align-items: center;//设置子元素在交叉轴方向居中，交叉轴方向就是与主轴垂直的方向
		text{
			font-size: 80rpx;
		}
	}
	.xia{
		padding: 30rpx;
	}
</style>
