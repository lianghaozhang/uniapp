<template>
	<view class="detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<view class="author">编辑：{{detail.author}}</view>
			<view class="time">发布日期：{{detail.posttime}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		<view class="description">
			声明：本站的内容均采集与腾讯新闻，如果侵权请联系管理（513894357@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from "@/utils/tool.js"
	export default {
		data() {
			return {
				options: null,
				detail: {},
			};
		},
		onLoad(e) {
			this.getDetail(e);
			console.log(e.cid);
			console.log(e.id);
		},
		methods: {
			getDetail(e) {
				uni.showLoading({
					"title": "数据加载中"
				});
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/detail.php",
					data: {
						cid: e.cid,
						id: e.id
					},
					success: res => {
						console.log(res.data);
						res.data.posttime = parseTime(res.data.posttime);
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width: 100%"');
						this.detail = res.data;
						this.savehistory();
						uni.setNavigationBarTitle({
							"title": this.detail.title,
						})
					},
					complete: res => {
						uni.hideLoading();
					}
				});
			},
			savehistory() {
				//如果没有这个historyArr这个数组就初始化为空
				let arr = uni.getStorageSync("historyArr") || [];
				//拿到要在浏览历史中展示的数据
				let historyItem = {
					author: this.detail.author,
					picurl: this.detail.picurl,
					title: this.detail.title,
					id: this.detail.id,
					classid: this.detail.classid,
					lookTime: parseTime(Date.now())
				}

				//记录去重
				let index = arr.findIndex(i => {
					return i.id == this.detail.id;
				});
				if (index >= 0) {
					arr.splice(index, 1);
				}
				
				//往数组头部添加浏览记录
				arr.unshift(historyItem);
				//只显示最新的十条历史记录
				arr = arr.splice(0, 10);
				uni.setStorageSync("historyArr", arr);
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 30rpx;

		.title {
			font-size: 46rpx;
			color: #333;
		}

		.info {
			background: #F6F6F6;
			padding: 20rpx;
			font-size: 25rpx;
			color: #666;
			display: flex;
			justify-content: space-between;
			margin: 40rpx 0;
		}

		.content {
			padding-bottom: 50rpx;
			// img{
			// 	max-width: 100%;
			// }
		}

		.description {
			background: #FEF0F0;
			font-size: 26rpx;
			padding: 20rpx;
			color: #F89898;
			line-height: 1.8em;
		}
	}
</style>