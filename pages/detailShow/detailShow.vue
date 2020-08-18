<template>
	<view class="detail-show">
		<scroll-view :scroll-x="true">	
			<swiper class="swiper-box" :indicator-dots="true">
				<swiper-item class="swiper-item" v-for="(item, index) in swiperList" :key="index">
					<image :src="item.image" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			
			<view class="content-box1">
				<view class="title">
					<text>恒源祥2019春季长袖白色t恤 新款春装</text>
				</view>
				<view class="money">
					<text class="text1">￥341.6</text>
					<text class="text2">¥488</text>
					<text class="text3">7折</text>
				</view>
				<view class="content">
					<text class="text3">销量: 108</text>
					<text class="text3">库存: 4690</text>
					<text class="text3">浏览量: 768</text>
				</view>
			</view>
			<view class="share-immediately">
				<view class="text-icon">
					<text style="font-size: 28rpx;color: #FFFFFF;" class="yticon icon-xingxing text-icon1"></text>
					<text style="font-size: 24rpx;color: red;">返</text>
				</view>
				<text style="font-size: 28rpx; color: #606266;margin: 0 10rpx;">该商品分享可领49减10红包</text>
				<text class="yticon icon-bangzhu1"></text>
				<view class="lijiShare" @tap="handleShare">
					<text>立即分享</text>
					<text class="yticon icon-you"></text>
				</view>
			</view>
			<!-- 分享组件 -->
			<Share ref="refShare"></Share>
			
			<view class="Buy-type" @tap="handleBuyType">
				<view class="font-size">
					<text style="color: #606266;">购买类型</text>
				</view>
				<view class="font-size" style="margin: 0 1.5rem;">
					<text>{{buyType.sizeListValue}}</text>
					<text style="margin: 0 10rpx">{{buyType.sizeColorListValue}}</text>
				</view>
				<view class="yticon icon-you yticon-icon-you"></view>
			</view>
			<!-- 购买类型组件 -->
			<BuyType ref="refBuyType" @getBuyType="getBuyType" :buyType="buyType"></BuyType>
			<view class="coupons">
				<text class="font-size" style="color: #606266;">优惠卷</text>
				<text class="font-size" style="width: 5rem; color: #606266;">领取优惠券</text>
			</view>
			<view class="sales-promotion-activity">
				<view class="left">
					<text class="font-size">促销活动</text>
				</view>
				<view class="right">
					<text class="font-size">新人首单送20元无门槛代金券</text>
					<text class="font-size">订单满50减10</text>
					<text class="font-size">订单满100减30</text>
					<text class="font-size">单笔购买满两件免邮费</text>
				</view>
			</view>
			<view class="service">
				<view class="left">
					<text class="font-size">服务</text>
				</view>
				<view class="right">
					<text class="font-size">7天无理由退换货 ·</text>
					<text class="font-size" style="margin: 0rpx 20rpx;">假一赔十 ·</text>
				</view>
			</view>
			<view class="evaluation">
				<view class="">
					<text style="font-size: 28rpx;">评价</text>
					<text class="font-size" style="margin: 0rpx; 5rpx">(86)</text>
					<text class="font-size" style="font-size: 30rpx; position: absolute; right: 2rem;">好评率 100%</text>
					<text class="yticon icon-you yticon-icon-you"></text>
				</view>
				<view class="evaluation-image">
					<view class="head-portrait">
						<image src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
					</view>
					<view class="evaluation-right-content">
						<text style="font-size: 14px;color: #606266;">Leo yo</text>
						<text style="font-size: 14px;color: #303133; margin: 20rpx 0rpx;">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
						<view class="right-bottom">
							<text style="font-size: 12px;color: #909399;">购买类型：XL 红色</text>
							<text style="font-size: 12px;color: #909399;position: absolute;right: 1rem;">2019-04-01 19:21</text>
						</view>
					</view>
				</view>
			</view>
			<view class="image-detail">
				<view class="title">
					<text>图文详情</text>
				</view>
				<view class="image">
					<image style="width: 100%;height: 25rem;" :src="item.image" mode="" v-for="(item, index) in imageDetailList" :key="index"></image>
				</view>
			</view>
			<ShoppingCart ref="ShoppingCart"></ShoppingCart>
		</scroll-view>
	</view>
</template>

<script>
	import Share from '../../components/share.vue'; //分享
	import BuyType from '../../components/buyType.vue'; //购买类型
	import ShoppingCart from '../../components/shoppingCart.vue'; // 购物车
	export default {
		components: {
			Share,
			BuyType,
			ShoppingCart,
		},
		data() {
			return {
				swiperList: [
					{image: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'},
					{image: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'},
					{image: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'}
				],
				buyType: {
					sizeList: [ // 尺寸
						{content: 'XS'},
						{content: 'S'},
						{content: 'M'},
						{content: 'L'},
						{content: 'XL'},
						{content: 'XXL'}
					],
					sizeListValue: 'XS',
					sizeColorList: [ // 颜色
						{content: '白色'},
						{content: '珊瑚粉'},
						{content: '草木绿'},
					],
					sizeColorListValue: '白色',
				},
				imageDetailList: [
					{image: 'https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg'},
					{image: 'https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg'},
					{image: 'https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg'},
					{image: 'https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg'},
					{image: 'https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg'},
				],
				text: ''
			}
		},
		onLoad(val) {
			this.text = JSON.parse(decodeURIComponent(val.text));
		},
		onReady () {
			this.$api.msg(this.text);
		},
		methods: {
			// 点击显示分享
			handleShare () {
				this.$refs.refShare.handleShowShare(); 
			},
			// 点击触摸类型
			handleBuyType () {
				this.$refs.refBuyType.handleShowBuyType();
			},
			// 获取buyType传过来的数据
			getBuyType (data) {
				this.buyType.sizeListValue = data.sizeListValue;
				this.buyType.sizeColorListValue = data.sizeColorListValue;
			}
		}
	}
</script>

<style lang="less">
	page {
		width: 750rpx;
		height: 100%;
		background-color: #f8f8f8;
	}
	.detail-show {
		.right-1rem {
			margin-right: 1rem;
		}
		.swiper-box {
			width: 100%;
			height: 722rpx;;
			.swiper-item {
				width: 100%;
				height: 100%;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	
		.content-box1 {
			width: 100%;
			height: auto;
			padding: 1rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			.title {
				font-size: 32rpx;
				color: #303133;
				height: 50rpx;
				line-height: 50rpx;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.money {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin: 10rpx 0rpx;
				.text2 {
					margin: 0 10rpx;
				}
				.text3 {
					align-items: center;
					padding: 2px 5px;
					background: #fa436a;
					font-size: 12px;
					color: #fff;
					border-radius: 3px;
					box-sizing: border-box;
				}
			}
			.content {
				width: 90%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				height: 1rem;
				align-items: flex-end;
			}
		}
		.share-immediately {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 2rem;
			width: 750rpx;
			padding: 0 1rem;
			box-sizing: border-box;
			background-color: #fbebf6;
			position: relative;
			.text-icon {
				width: 2rem;
				height: auto;
				border: 1px solid #fa436a;
				border-radius: 5rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				overflow: hidden;
				z-index: 100;
				&::before {
					position: absolute;
					left: 0.9rem;
					z-index: 88;
					content: '';
					width: 1rem;
					height: 1rem;
					background-color: #fa436a;
					border-radius: 50%;
				}
				.text-icon1 {
					z-index: 99;
					margin-left: -0.2rem;
				}
			}
			.lijiShare {
				width: 4.5rem;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				right: 1rem;
				text {
					font-size: 28rpx; 
					color: #fa436a; 
				}
			}
		}
		.Buy-type {
			height: 2rem;
			background-color: #FFFFFF;
			padding: 0 1rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 1px solid #E4E7ED;
		}
		.coupons {
			height: 2rem;
			background-color: #FFFFFF;
			padding: 0 1rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 1px solid #E4E7ED;
			.font-size {
				width: 4.5rem;
			}
		}
		.sales-promotion-activity {
			width: 100%;
			height: auto;
			display: flex;
			flex-direction: row;
			padding: 0.5rem 1rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			border-bottom: 1px solid #E4E7ED;
			.left {
				width: 4.5rem;
				height: 5.5rem;
				display: flex;
				align-items: center;
			}
			.right {
				height: 5.5rem;
				display: flex;
				flex-direction: column;
				.font-size {
					margin: 5rpx 0rpx;
				}
			}
		}
		.service {
			width: 100%;
			height: 2rem;
			padding: 1rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			border-bottom: 1px solid #E4E7ED;
			display: flex;
			flex-direction: row;
			align-items: center;
			.left {
				width: 4.5rem;
			}
		}
		.evaluation {
			margin-top: 0.5rem;
			width: 100%;
			height: auto;
			background-color: #FFFFFF;
			padding: 1rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			.evaluation-image {
				margin-top: 0.5rem;
				display: flex;
				flex-direction: row;
				.head-portrait {
					width: 152rpx;
					height: 80rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.evaluation-right-content {
					margin-left: 0.5rem;
					display: flex;
					flex-direction: column;
					.right-bottom {
						display: flex;
						align-items: center;
					}
				}
			}
		}
		.image-detail {
			margin-top: 0.5rem;
			width: 100%;
			height: auto;
			background-color: #FFFFFF;
			.title {
				width: 100%;
				height: 2rem;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 15px;
				color: #303133;
				&::after {
					position: absolute;
					left: 50%;
					top: 50%;
					-webkit-transform: translateX(-50%);
					transform: translateX(-50%);
					width: 150px;
					height: 0;
					content: '';
					border-bottom: 1px solid #ccc;
				}
			}
		}
	}
</style>
