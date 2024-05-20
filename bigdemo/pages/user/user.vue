<template>
	<view>
		<view class="shang">
			<text>
				浏览记录
			</text>
		</view>
		<view class="xia" v-for="(item, index) in historyArr">
			<newsbox :newitem="item" @click.native="toDetail(index)"></newsbox>
		</view>
		<view class="textitem" v-if="!historyArr.length">
			<view class="pic">
				<image src="../../static/images/nohis.png"></image>
			</view>
			<view class="text">
				<text>暂无浏览记录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyArr: [],
			};
		},
		methods: {
			getHistory() {
				this.historyArr = uni.getStorageSync("historyArr");
			},
			toDetail(index) {
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${this.historyArr[index].classid}&id=${this.historyArr[index].id}`
				});
			}
		},
		onShow() {
			this.getHistory();
		}
	}
</script>

<style lang="scss">
	.shang {
		//background: rebeccapurple;
		height: 200rpx;
		display: flex;
		border-bottom: 1rpx solid gray;
		//padding-bottom: 30rpx;
		//flex-direction: column;//设置主轴方向为垂直方向
		justify-content: center; //设置子元素在主轴方向上居中
		align-items: center; //设置子元素在交叉轴方向居中，交叉轴方向就是与主轴垂直的方向

		text {
			font-size: 80rpx;
		}
	}

	.xia {
		padding: 30rpx;
	}
	
	.textitem{
		.pic{
			padding: 60rpx;
		}
		.text{
			text-align: center;
			font-size: 40rpx;
		}
	}
</style>