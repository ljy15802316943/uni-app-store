<template>
	<view class="goodsList">
		<view class="navigation">
			<view class="title" v-for="(item, index) in titleList" :key="index">
				<view class="title-box" :class="{'title-box-activate': titleBoxIndex == index}" @click.stop="titleBoxClick(index)">
					<text>{{item.content}}</text>
					<view v-if="item.content == '价格'" class="price">
						<view class="yticon icon-shang active" :class="{'yticonIconShangActive': (yticonIconShangIndex === 1 && index === 2)}" @click.stop="yticonIconShang(1)"></view>
						<view style="transform: scaleY(-1);" class="yticon icon-shang xia" :class="{'yticonIconShangActive': (yticonIconShangIndex === 2 && index === 2)}" @click.stop="yticonIconShang(2)"></view>
					</view>
				</view>
			</view>
			<view class="title-icon yticon icon-fenlei1" @click="classityNavgetoClick(true)"></view>
		</view>
	
		<view class="goods-list">
			<view class="goods-list-item" v-for="(item, index) in goodsList" :key="index" @click="goodsListClick(item.title)">
				<image :src="item.image" mode="aspectFill"></image>
				<text class="title text-overflow">{{item.title}}</text>
				<view class="list-bottom">
					<text class="list-bottom-text1">￥{{item.price}}</text>
					<text class="list-bottom-text2">已售 {{item.sales}}</text>
				</view>
			</view>
		</view>
		<text class="load-more">{{msg}}</text>
		
		<view class="classfty-box" :class="classifyShow?'isActive':''">
			<view class="Mongolia" @click="classityNavgetoClick">
			</view>
			<view class="classfty-content">
				<scroll-view scroll-y>
					<view class="cateLists" v-for="(item, index) in cateLists" :key="index" @click="cateListsClick(index)">
						<text :class="{'text-activate': cateListsIndex == index}">{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleList: [
					{content: '综合排序'},
					{content: '销量优先'},
					{content: '价格'},
				],
				titleBoxIndex: 0,
				yticonIconShangIndex: 0,
				goodsList: [],
				msg: '没有更多数据了',
				loadingTitle: '加载中',
				cateLists: [{name: 1}],
				classifyShow: false,
				cateListsIndex: null,
				timeId: null,
				project: true,//防止高频点击
			}
		},
		mounted () {
			this.getGoodsList();
			this.$api.json('cateList').then( res => {
				if (res) {
					this.cateLists = res;
				};
			});
		},
		methods: {
			titleBoxClick (index) {
				this.titleBoxIndex = index;
				if (this.titleBoxIndex == 2) {
					this.yticonIconShangIndex = 1;
					uni.showLoading({
						title: this.loadingTitle
					});
					this.goodsList.sort(this.compare2("price"));
					uni.hideLoading();
				} else if (this.titleBoxIndex == 1) {
					uni.showLoading({
						title: this.loadingTitle
					});
					this.goodsList.sort(this.compare2("sales"));
					uni.hideLoading();
					this.yticonIconShangIndex = 0;
				} else {
					this.yticonIconShangIndex = 0;
				}
			},
			yticonIconShang(val) {
				if (this.titleBoxIndex == 2) {
					this.yticonIconShangIndex = val;
					if (val == 1) {
						uni.showLoading({
							title: this.loadingTitle
						});
						this.goodsList.sort(this.compare2("price"));
						uni.hideLoading();
					} else {
						uni.showLoading({
							title: this.loadingTitle
						});
						this.goodsList.sort(this.compare("price"));
						uni.hideLoading();
					}
				} 
			},
			// 获取商品列表数据
			getGoodsList () {
				uni.showLoading({title: this.loadingTitle});
				this.$api.json('goodsList').then( res => {
					if (res) {
						uni.hideLoading();
						this.goodsList = res;
					};
				});
			},
			goodsListClick (title) {
				this.$api.json('goodsList').then( res => {
					if (res) {
						uni.hideLoading();
						this.goodsList = res;
					};
				});
				uni.navigateTo({
					url: '/pages/detailShow/detailShow?text=' + encodeURIComponent(JSON.stringify(title))
				});
			},
			// 分类导航
			classityNavgetoClick (val) {
				if (val) {
					// 防止高频点击
					if (this.project) {
						this.project = false;
						this.classifyShow = !this.classifyShow;
						clearTimeout(this.timeId);
						this.timeId = setTimeout(() => {
							this.project = true;
						},500)
					}
				} else {
					this.classifyShow = false;
				};
			},
			cateListsClick (index) {
				this.cateListsIndex = index;
			},
			//这是比较函数
			compare(p){ 
			    return (m,n) => {
			        var a = m[p];
			        var b = n[p];
			        return a - b; //升序
			    }
			},
			//这是比较函数
			compare2(p){ 
			    return (m,n) => {
			        var a = m[p];
			        var b = n[p];
			        return b - a; //降序
			    }
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #f8f8f8;
	}
	.goodsList {
		width: 750rpx;
		height: 100%;
		.navigation {
			width: 750rpx;
			height: 88rpx;
			background-color: #FFFFFF;
			display: flex;
			position: fixed;
			top: 44px;
			// top: calc(100% - 88rpx - constant(safe-area-inset-top));
			left: 0;
			z-index: 99;
			.title {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				color: #303133;
				.title-box {
					height: 100%;
					width: 4rem;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: row;
					border-bottom: 1px solid #FFFFFF;
					.yticon {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 32rpx;
						height: 14rpx;
						margin-left: 4rpx;
						font-size: 28rpx;
						color: #888;
					}
					.yticonIconShangActive {
						color: #fa436a;
					}
				}
				.title-box-activate {
					border-bottom: 1px solid #fa436a;
					color: #fa436a;
				}
				
			}
			.title-icon {
				width: 80rpx;
				height: 100%;
				font-size: 48rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				&::after {
					content: '';
					position: absolute;
					top: 0.66rem;
					background-color: #ededed;
					width: 1rpx;
					height: 38rpx;
					right: 80rpx;
				}
			}
		}
		.goods-list {
			width: 750rpx;
			height: auto;
			margin-top: 100rpx;
			padding: 0.5rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			.goods-list-item {
				width: 47%;
				min-height: 70px;
				flex-direction: column;
				overflow: hidden;
				text-overflow: ellipsis;
				image {
					width: 100%;
					height: 360rpx;
				}
				.title {
					margin: 20rpx 0rpx;
					font-size: 34rpx;
					color: #303133;
				}
				.list-bottom {
					display: flex;
					justify-content: space-between;
					.list-bottom-text1 {
						font-size: 34rpx;
						color: #fa436a;
					}
					.list-bottom-text2 {
						font-size: 26rpx;
						color: #909399;
						margin-bottom: 50rpx;
						margin-top: 8rpx;
						margin-right: 10rpx;
					}
 				}
			}
		}
		
		.classfty-box {
			width: 100%;
			height: 15rem;
			position: fixed;
			display: flex;
			flex-direction: row;
			left: 0;
			bottom: 0;
			z-index: 999;
			transition: 0.5s all;
			visibility: hidden;
			.Mongolia {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 1;
				transition: 0.2s 0.3s;
				opacity: 0;
			}
			.classfty-content {
				width: 80%;
				height: 15rem;
				position: absolute;
				right: 0;
				bottom: 0;
				background-color: #FFFFFF;
				z-index: 2;
				transition: 0.3s;
				transform: translateX(100%);
				scroll-view {
					width: 100%;
					height: 100%;
					.cateLists {
						width: 100%;
						height: 2rem;
						display: flex;
						align-items: center;
						border-bottom: 1px solid #ededed;
						text {
							font-size: 30rpx;
							color: #555;
							margin-left: 30rpx;
						}
						.text-activate {
							color: #fa436a !important;
						}
					}
				}
			}
		}
		
		// 进入动画
		.isActive {
			transition: 0.5s all;
			visibility: inherit;
			// 蒙层
			.Mongolia {
				transition: 0.2s;
				opacity: 1;
			}
			// 内容
			.classfty-content {
				transition: 0.3s 0.2s;
				transform: translateX(0%);
			}
		}
		@keyframes myfirst3 {
			0%   {
				opacity: 1;
				visibility: inherit;
			}
			100% {
				opacity: 0;
				visibility: hidden;
			}
		}
		@keyframes myfirst4 {
			0%   {
				transform: translateX(100%);
			}
			100% {
				transform: translateX(0%);
			}
		}
		
	}
</style>
