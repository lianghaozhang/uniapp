<template>
	<view>
		<view class="out">
			<scroll-view  
			scroll-x 
			show-scrollbar="false">
				<view>国内</view>
				<view>国际</view>
				<view>体育</view>
				<view>科技</view>
				<view>时尚</view>
				<view>游戏</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.out{
		height: 100rpx;
		width: 100%;
		background: #f5f7f9;
		scroll-view{
			display: flex;
			white-space: nowrap;
			view{
				// height: 100rpx;
				// width: 100rpx;
				// background: greenyellow;
				display: inline-block;
				font-size: 40rpx;
				padding: 20rpx 30rpx;
			}
		}
	}
</style>
