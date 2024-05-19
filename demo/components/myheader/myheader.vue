<template>
	<view>
		<view class="out">
			<view>
				<view class="da">
					{{da}}
				</view>
				<view class="xiao">
					{{xiao}}
				</view>
				<view class="line">
					---------
				</view>
			</view>
		</view>
		<u--input
		   placeholder="请输入内容"
		   border="surround"
		   clearable
		   @input="ipt"
		 ></u--input>
		 <view class="outline">
		 	---------
		 </view>
	</view>
</template>

<script>
	export default {
		name:"myheader",
		props:{
			da:{
				type:String,
				default:"默认大标题",
			},
			xiao:{
				type:String,
				default:"默认副标题",
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			ipt(e){
				console.log(e);
				this.$emit("ipt", e);
			}
		}
	}
</script>

<style lang="scss">
	.out{
		background: skyblue;
		.da{
			font-size: 50rpx;
			text-align: center;
		}
		
		.xiao{
			margin-top: 10rpx;
			font-size: 35rpx;
			text-align: center;
		}
		
		.line{
			font-size: 60rpx;
			margin-top: 10rpx;
			color: red;
			text-align: center;
		}
	}
	
	.outline{
		font-size: 60rpx;
		margin-top: 10rpx;
		color: red;
		text-align: center;
	}
</style>