<template>
	<view class="buy-type">
		<view :class="{'mengcheng': buyTypeState}" @tap="handleShowBuyType"></view>
		<view class="popup-window" :class="{'popup-show': buyTypeState}">
			<view class="top">
				<view class="image">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg" mode="aspectFill"></image>
				</view>
				<view class="content-right">
					<view class="">
						<text style="color: #fa436a;">¥328.00</text>
					</view>
					<view class="">
						<text>库存：188件</text>
					</view>
					<view class="">
						<text>已选:</text>
						<text style="margin: 0rpx 10rpx;">{{sizeListValue}}</text>
						<text>{{sizeColorListValue}}</text>
					</view>
				</view>
			</view>
			<view class="size">
				<view class="">
					<text style="font-size: 30rpx; color: #606266;">尺寸</text>
				</view>
				<view class="size-box">
					<view class="size-list" :class="{'size-index': sizeIndex == index}" v-for="(item, index) in sizeList" :key="index" @tap="handleSizeClick(index, item.content)">
						<text>{{item.content}}</text>
					</view>
				</view>
			</view>
			<view class="color">
				<view class="">
					<text style="font-size: 30rpx; color: #606266;">颜色</text>
				</view>
				<view class="color-box">
					<view class="color-list" :class="{'color-index': colorIndex == index}" v-for="(item, index) in sizeColorList" :key="index" @tap="handleSizeColorClick(index, item.content)">
						<text>{{item.content}}</text>
					</view>
				</view>
			</view>
			<view class="complete" @tap="handleShowBuyType">
				<text>完成</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			buyType: {
				type: Object
			}
		},
		data() {
			return {
				buyTypeState: false,
				sizeList: [ // 尺寸
				],
				sizeListValue: '',
				sizeColorList: [ // 颜色
				],
				sizeColorListValue: '',
				sizeIndex: 0, // 尺寸被点击的列表
				colorIndex: 0, // 颜色被点击的列表
				timeId: null,
				project:true,//防止高频点击
			};
		},
		created() {
			this.sizeList = this.buyType.sizeList;
			this.sizeListValue = this.buyType.sizeListValue;
			this.sizeColorList = this.buyType.sizeColorList;
			this.sizeColorListValue = this.buyType.sizeColorListValue;
		},
		methods: {
			// 显示弹窗
			handleShowBuyType () {

				if (this.project) {
					this.project = false;
					this.buyTypeState = !this.buyTypeState;
					if (!this.buyTypeState) {
						// 传参给父组件
						let data = {
							sizeListValue: this.sizeListValue,
							sizeColorListValue: this.sizeColorListValue
						};
						this.$emit('getBuyType', data);
					}
					clearTimeout(this.timeId);
					this.timeId = setTimeout(() => {
						this.project = true;
					},200)
				}
			},
			// 点击尺寸列表
			handleSizeClick (index, content) {
				this.sizeIndex = index;
				this.sizeListValue = content;
			},
			// 点击颜色列表
			handleSizeColorClick (index, content) {
				this.colorIndex = index;
				this.sizeColorListValue = content;
			}
		}
	}
</script>

<style lang="less">
	.buy-type {
		.mengcheng {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.4);
			position: fixed;
			top: 0;
			left: 0;
			transition: .3s;
		}
		// 显示弹窗动画
		.popup-show {
			transform: translateY(0) !important;
		}
		// 隐藏弹窗动画
		.popup-window {
			width: 100%;
			height: auto;
			background-color: #FFFFFF;
			border-radius: 10rpx 10rpx 0 0;
			position: fixed;
			bottom: 0rpx;
			transition: .3s;
			transform: translateY(110%);
			z-index: 999;
			.top {
				width: 100%;
				height: 5rem;
				padding: 0 1rem;
				display: flex;
				flex-direction: row;
				box-sizing: border-box;
				.image {
					width: 170rpx;
					height: 170rpx;
					position: relative;
					top: -30rpx;
					border-radius: 10rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.content-right {
					margin: 0rem 0.8rem;
					margin-top: 0.5rem;
					display: flex;
					flex-direction: column;
					text {
						font-size: 13px;
						color: #606266;
					}
				}
			}
			.size {
				display: flex;
				flex-direction: column;
				padding: 0.5rem 1rem;
				box-sizing: border-box;
				.size-box {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					margin-top: 10rpx;
					.size-index {
						color: #fa436a !important;
						background-color: #fbebee !important;
					}
					.size-list {
						height: 60rpx;
						min-width: 60rpx;
						margin: 10rpx 0;
						margin-right: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #808080;
						background-color: #eee;
						border-radius: 100rpx;
						padding: 0 10rpx;
						box-sizing: border-box;
						font-size: 28rpx;
					}
				}
			}
			.color {
				display: flex;
				flex-direction: column;
				padding: 0.5rem 1rem;
				box-sizing: border-box;
				.color-box {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					margin-top: 10rpx;
					.color-index {
						color: #fa436a !important;
						background-color: #fbebee !important;
					}
					.color-list {
						height: 60rpx;
						min-width: 60rpx;
						margin: 10rpx 0;
						margin-right: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #808080;
						background-color: #eee;
						border-radius: 100rpx;
						padding: 0 10rpx;
						box-sizing: border-box;
						font-size: 28rpx;
					}
				}
			}
			.complete {
				height: 4rem;
				padding: 1rem;
				box-sizing: border-box;
				text {
					width: 100%;
					height: 100%;
					background-color: #fa436a;
					color: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50rpx;
				}
			}
		}
	}
</style>
