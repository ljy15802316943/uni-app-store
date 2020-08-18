<template>
	<view class="shopping-cart">
		<view class="shopping-box">
			<view class="home shopping-left" @touchstart="handleShoppingClick('首页')">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text class="shopping-text">首页</text>
			</view>
			<view class="shopping shopping-left" @tap="handleGuc('购物车')">
				<text class="yticon icon-gouwuche"></text>
				<text class="shopping-text">购物车</text>
			</view>
			<view class="collection shopping-left" :class="collection?'isActive':''" @tap="handleGuc('收藏')">
				<text class="yticon icon-shoucang"></text>
				<text class="shopping-text">收藏</text>
			</view>
			<view class="collection-button">
				<text @tap="handleTaoClick('立即购买')" style="border-right: 1px solid #FFFFFF;">立即购买</text>
				<text @tap="handleTaoClick('加入购物车')">加入购物车</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collection: false,
			};
		},
		mounted(){
			
		},
		methods: {
			handleShoppingClick (val) {
				if (val == '首页') {
					uni.switchTab({
						url: '/pages/home/home'
					});
				};
			},
			handleGuc(e) {
				if (e === '购物车') {
					uni.switchTab({
					    url: '/pages/shopping/shopping'
					});
				} else {
					this.collection = !this.collection;
					if (this.collection) {
						this.showToast('收藏成功');
					} else {
						this.showToast('取消成功');
					}
				}
			},
			// 点击应用
			handleTaoClick(e) {
				if (e === '加入购物车') {
					this.showToast('加入购物车');
				} else {
					this.showToast('购买成功');
				}
			},
			// 提示弹窗
			showToast(title) {
				uni.showToast({
				    title,
				    duration: 1500,
						mask: true
				});
			}
		}
	}
</script>

<style lang="less">
	.shopping-cart {
		width: 100%;
		height: 5rem;
		padding: 1rem;
		box-sizing: border-box;
		position: fixed;
		bottom: 0rpx;
		.shopping-box {
			width: 100%;
			height: 100%;
			background-color: rgba(255, 255, 255, 0.9);
			border-radius: 16rpx;
			box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
			display: flex;
			flex-direction: row;
			align-items: center;
			.collection {
				color: #606266;
			}
			.isActive {
				color: #fa436a;
				text {
					color: #fa436a !important;
				}
			}
			.collection-button {
				width: 12.2rem;
				height: 2rem;
				display: flex;
				border-radius: 200rpx;
				overflow: hidden;
				box-shadow: 0 10px 20px -8px #fa436a;
				box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
				background: -webkit-linear-gradient(left, #ffac30, #fa436a, #F56C6C);
				background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
				margin-left: 10px;
				margin-right: 10rpx;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				text {
					width: 50%;
					height: 24rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
			.shopping-left {
				margin-left: 0.5rem;
				width: 3.5rem;
				height: 3rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.shopping-text {
					font-size: 12px;
					color: #606266;
				}
				.yticon {
					font-size: 40rpx;
					color: #909399;
				}
				text {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
</style>
