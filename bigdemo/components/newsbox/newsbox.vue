<template>
	<view class="newsbox">
		<view class="pic">
			<image :src="newitem.picurl" mode="aspectFill"></image>
		</view>
		<view class="text">
			<view class="title">{{newitem.title}}</view>
			<view class="info">
				<text>{{newitem.author}}</text>
				<text v-if="newitem.hits">{{newitem.hits}}浏览</text>
				<text v-else>{{newitem.lookTime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newsbox",
		props:{
			newitem:{
				type:Object,
				default(){
					return {
						title: "默认标题默认标题默认标题默认标题默认标题默认标题",
						picurl: "../../static/images/nopic.jpg",
						author: "xxx",
						hits: "999"
					}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.newsbox {
		display: flex;
		.pic {
			width: 230rpx;
			height: 160rpx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		.text{
			flex: 1;
			padding-left: 20rpx;
			display: flex;
			flex-direction: column;//设置主轴方向为列方向，就是垂直方向
			justify-content: space-between;//子元素在主轴方向上的对齐方式为两端对齐，其他子元素均匀分布
			
			.title{
				font-size: 38rpx;
				color: #333;
				//padding: 30rpx;
				
				//超过两行的用省略号表示
				text-overflow:-o-ellipsis-lastline;
				overflow: hidden;
				text-overflow:ellipsis;
				display: -webkit-box;
				-webkit-line-clamp:2;
				line-clamp:2;
				-webkit-box-orient:vertical;
			}
			.info{
				color: #999;
				font-size: 27rpx;
				text{
					padding-right: 30rpx;
				}
			}
		}
	}
</style>