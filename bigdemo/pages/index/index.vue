<template>
	<view class="out">
		<scroll-view scroll-x>
			<view :class="navIndex == index ? 'xuanzhong' : ''" v-for="(item, index) in titleArr" :key="index"
				@click="gaoliang(index)">{{item.classname}}</view>
		</scroll-view>

		<view class="content">
			<view class="row" v-for="(item, index) in itemArr" :key="index">
				<newsbox :newitem="item" @click.native="toDetail(index)"></newsbox>
			</view>
			<view v-if="!itemArr.length">
				<image src="../../static/images/nodata.png" style="padding: 20rpx;"></image>
				<text style="padding-top: 10rpx; font-size: 60rpx; display: flex; justify-content: center;">暂无数据</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleArr: [],
				navIndex: 0,
				itemArr: [],
				state: false,
				flag: 0,
				currentPage: 1
			}
		},
		onLoad() {

		},
		methods: {
			gaoliang(index) {
				//console.log(index);
				this.navIndex = index;
				this.currentPage = 1;
				this.itemArr = [],
					this.getNewList(index);
			},
			getNewList(index) {
				let cid = 50 + index;
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: cid,
						num: 10,
						page: this.currentPage
					},
					success: res => {
						//console.log(res.data);
						//常规写法
						// let oldArr = this.itemArr;
						// let newArr = oldArr.concat(res.data);
						//ES6的写法，前面三个点表示把数组展开
						this.itemArr = [...this.itemArr, ...res.data];
					}
				});
			},
			toDetail(index) {
				// console.log(this.navIndex);
				// console.log(index);
				// console.log(this.itemArr[index]);
				// console.log(this.itemArr[index].id);
				let cid = 50 + this.navIndex;
				let id = this.itemArr[index].id;
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${cid}&id=${id}`
				})

			},
			getNavData() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						this.titleArr = res.data;
					}
				});
				this.getNewList();
			}
		},
		mounted() {
			this.getNavData();
		},
		onReachBottom() {
			this.currentPage++;
			this.getNewList();
		}
	}
</script>

<style lang="scss">
	scroll-view {
		height: 120rpx;
		background: #f5f7f9;
		white-space: nowrap;

		position: fixed;
		top: var(--window-top);
		left: 0;
		z-index: 10;

		// 去掉导航栏的滑动条
		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 4px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			display: block;
		}

		view {
			display: inline-block;
			font-size: 40rpx;
			padding: 0 30rpx;
			line-height: 100rpx;
			color: #333;
		}
	}

	.xuanzhong {
		display: inline-block;
		font-size: 40rpx;
		color: #2b9939;
		padding: 20rpx 30rpx;
	}

	.content {
		padding: 30rpx;
		padding-top: 130rpx;

		.row {
			padding: 15rpx 0;
		}
	}
</style>