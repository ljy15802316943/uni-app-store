<template>
	<view class="app">
		<view v-if="goodsList.length < 1" class="data-empty">
			<view class="view1">
				<image src="/static/emptyCart.jpg" mode="aspectFill"></image>
			</view>
			<view class="view2">
				<text style="font-size: 26rpx;color: #C0C4CC;">空空如也</text>
				<text style="font-size: 26rpx;color: #fa436a;" @click="goLogin">去登陆></text>
			</view>
		</view>
		
		<view v-if="goodsList.length > 0" class="shopping-cart">
			<view class="goods-box">
				<view class="goods-item" v-for="(item, index) in goodsList" :key="index">
					<!-- 购物按钮 -->
					<view class="yticon icon-xuanzhong2 checkbox" 
					:class="{'checkbox-activate': item.checkboxState}"
					@click="handleCheckbox(index, item.checkboxState, item.price)"
					></view>
					<!-- 删除按钮 -->
					<view class="del-btn yticon icon-fork delete" @click="handleDelete(index)"></view>
					<view class="img">
						<image :src="item.img" mode="aspectFill"></image>
					</view>
					<view class="content">
						<text class="text-font text-color text-overflow">{{item.title}}</text>
						<text class="text-font" style="color: #909399; margin: 4rpx 0;">{{item.goodsType}}</text>
						<text class="text-font text-color">￥{{item.price}}</text>
						<view class="content-num">
							<text class="minus" :class="{'exid-activate': !exidState}" @click="handleExid('-',item.num, index)">-</text>
							<text class="num">{{item.num}}</text>
							<text class="plus-sign" :class="{'exid-activate': exidState}" @click="handleExid('+',item.num, index)">+</text>
						</view>
					</view>
				</view>
			</view>
			<view class="balance" :class="someState?'isActive':'isActive2'">
				<view class="jiesuan">
					<view class="jiesuan-box">
						<view class="yticon icon-xuanzhong2 checkbox" 
						:class="{'checkbox-activate': checkboxStateBox}"
						@click="handleCheckboxB"
						></view>
						<view class="clear" :class="{'clear-activate': checkboxStateBox}" @click="handleEmpty">清空</view>
					</view>
				</view>
				<view class="price">
					<text class="text-font flex-end" style="color: #303133;">￥{{totalMoney || 0}}</text>
					<text class="text-font flex-end" style="color: #909399; font-size: 26rpx;">已优惠74.35元</text>
				</view>
				<view class="go-balance">
					<view class="go-balance-box">
						去结算
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				goodsList: [
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
						title: 'OVBE 长袖风衣',
						goodsType: '春装款 L',
						price: '278',
						num: 1,
						checkboxState: false
					},{
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
						title: '科沃斯 Ecovacs 扫地机器人',
						goodsType: '激光导航 扫拖一体',
						price: '1348',
						num: 1,
						checkboxState: false
					},{
						img: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
						title: '朵绒菲小西装',
						goodsType: 'XL',
						price: '175.88',
						num: 1,
						checkboxState: false
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
						title: '迪奥（Dior）烈艳唇膏',
						goodsType: '520 #粉红色',
						price: '1089',
						num: 1,
						checkboxState: false
					},{
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
						title: '欧舒丹（L\'OCCITANE）乳木果',
						goodsType: '樱花味润手霜 30ml',
						price: '128',
						num: 1,
						checkboxState: false
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
						title: '新疆阿克苏苹果 特级',
						goodsType: '特级 12个',
						price: '58.8',
						num: 1,
						checkboxState: false
					},{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
						title: '科沃斯 Ecovacs 扫地机器人',
						goodsType: '激光导航 扫拖一体',
						price: '1348',
						num: 1,
						checkboxState: false
					},{
						img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
						title: '朵绒菲小西装',
						goodsType: 'XL',
						price: '175.88',
						num: 1,
						checkboxState: false
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
						title: '迪奥（Dior）烈艳唇膏',
						goodsType: '520 #粉红色',
						price: '1089',
						num: 1,
						checkboxState: false
					},{
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
						title: '欧舒丹（L\'OCCITANE）乳木果',
						goodsType: '樱花味润手霜 30ml',
						price: '128',
						num: 1,
						checkboxState: false
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
						title: '新疆阿克苏苹果 特级',
						goodsType: '特级 12个',
						price: '58.8',
						num: 1,
						checkboxState: false
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
						title: '女装2019春秋新款',
						goodsType: '春装款/m',
						price: '420',
						num: 1,
						checkboxState: false
					}
				],
				totalMoney: 0,
				exidState: false,
				checkboxStateBox: false,
				someState: false,//结算动画
				timeId: null,
				checkBox: true
			}
		},
		methods: {
			// 选择商品
			handleCheckbox (index, state, price) {
				if (this.checkBox) {
					
					this.checkBox = false;
					this.goodsList[index].checkboxState = !state;
					let boxList = [];
					this.goodsList.map( (item) => {
						item.number = Number(item.price) * Number(item.num);
						boxList.push(item.checkboxState);
					});
					// 判断购物全选
					this.checkboxStateBox = boxList.every( (item) => item);
					let list = [];
					list = this.goodsList.filter( (item) => {return item.checkboxState});
					let car = null;
					list.forEach( (item) => {
						car = car + item.number;
					});
					this.totalMoney = car;
					this.totalMoney = Math.floor(this.totalMoney * 100) / 100;
					
					this.someState = this.goodsList.some(v=>v.checkboxState);
					
					clearTimeout(this.timeId);
					this.timeId = setTimeout(() => {
						this.checkBox = true;
					},200)
				}
			},
			// 删除商品
			handleDelete (index) {
				this.goodsList.splice(index, 1);
				let list = [];
				list = this.goodsList.filter( (item) => {return item.checkboxState});
				let car = null;
				list.forEach( (item) => {
					car = car + item.number;
				});
				this.totalMoney = car;
				this.totalMoney = Math.floor(this.totalMoney * 100) / 100;
			},
			// 点击加减符号
			handleExid (val,num,index) {
				if (val == '-') {
					if (num <= 0) {
						this.goodsList[index].num = 0;
						if (this.goodsList[index].number) {
							this.goodsList[index].number = this.goodsList[index].price;
						}
					} else {
						this.goodsList[index].num -= 1;
						if (this.goodsList[index].number) {
							this.goodsList[index].number -= this.goodsList[index].price;
						}
						if (this.goodsList[index].checkboxState) {
							this.totalMoney -= Number(this.goodsList[index].price);
						}
					}
					this.exidState = false;
					this.totalMoney = Math.floor(this.totalMoney * 100) / 100; 
				} else {
					this.exidState = true;
					this.goodsList[index].num += 1;
					if (this.goodsList[index].number) {
						this.goodsList[index].number = this.goodsList[index].price * num;
					}
					if (this.goodsList[index].checkboxState) {
						this.totalMoney += Number(this.goodsList[index].price);
					}
					this.totalMoney = Math.floor(this.totalMoney * 100) / 100; 
				}
			},
			// 切换全选
			handleCheckboxB () {
				this.checkboxStateBox = !this.checkboxStateBox;
				if (this.checkboxStateBox) {
					let car = null;
					this.goodsList.map( (item) => {
						item.checkboxState = true;
						car = car + Number(item.price);
					});
					this.totalMoney = car;
				} else {
					this.goodsList.map( (item) => {
						item.checkboxState = false;
					});
					this.totalMoney = 0;
					this.someState = false;
				};
				this.totalMoney = Math.floor(this.totalMoney * 100) / 100; 
			},
			// 清空
			handleEmpty () {
				let _this = this;
				uni.showModal({
				    title: '提示',
				    content: '确定要清空购物车吗?',
				    success: function (res) {
				        if (res.confirm) {
							_this.goodsList.splice(0);
				        } else if (res.cancel) {
				            console.log('');
				        }
				    }
				});
				console.log(1);
			},
			// 登陆页
			goLogin () {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style lang="less">
page {
	width: 750rpx;
	height: 100%;
}

.app {
	width: 100%;
	height: 100%;
	position: relative;
}

// 如果数据为空
.data-empty {
	width: 6.5rem;
	height: 6.5rem;
	position: relative;
	top: calc(50% - 6rem);
	margin: auto;
	display: flex;
	flex-direction: column;
	.view1 {
		width: 100%;
		height: 4rem;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.view2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 10rpx;
	}
}
	
.shopping-cart {
	width: 750rpx;
	height: 100%;
	background-color: #FFFFFF;
	.goods-box {
		width: 750rpx;
		height: 100%;
		.goods-item {
			width: 100%;
			height: auto;
			padding: 1rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			position: relative;
			border-bottom: 1px solid #ededed;
			.checkbox-activate {
				color: #fa436a;
			}
			.delete {
				position: absolute;
				right: 0.6rem;
				top: 1.1rem;
				font-size: 40rpx;
				z-index: 99;
				color: gray;
			}
			.img {
				width: 6.6rem;
				height: 6.6rem;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.content {
				margin-left: 30rpx;
				display: flex;
				flex-direction: column;
				position: relative;
				flex-wrap: nowrap;
				overflow: hidden;
				width: 9rem;
				.text-font {
					font-size: 32rpx;
				}
				.text-color {
					color: #303133;
				}
				.content-num {
					position: absolute;
					bottom: 0;
					margin-top: 30rpx;
					width: 6rem;
					height: 2rem;
					display: flex;
					align-items: center;
					justify-content: space-around;
					background-color: #f5f5f5;
					.minus {
						color: gray;
					}
					.num {
						font-size: 30rpx;
					}
					.plus-sign {
						color: gray;
					}
					.exid-activate {
						color: black;
					}
				}
			}
		}
	}
}

// 购物车弹窗
.balance {
	width: 600rpx;
	height: 2.5rem;
	border-radius: 15rpx;
	box-shadow: 0 0 10px gray;
	display: flex;
	flex-direction: row;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	background: rgba(255, 255, 255, 0.9);
	z-index: 999;
	.jiesuan {
		width: 30%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.jiesuan-box {
			width: 4.5rem;
			height: 1.5rem;
			border-radius: 30px;
			position: relative;
			overflow: hidden;
			.checkbox {
				position: absolute;
				top: -6rpx;
				left: 0rpx;
			}
			.checkbox-activate {
				color: #fa436a;
			}
			.clear {
				width: 100%;
				height: 100%;
				background-color: #C0C4CC;
				border-radius: 60rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				margin-left: 40rpx;
				box-sizing: border-box;
				padding-left: 30rpx;
				display: flex;
				align-items: center;
				transition: 0.3s;
				transform: translateX(-100%);
			}
			.clear-activate {
				transition: 0.3s !important;
				transform: translateX(0%) !important;
			}
		}
	}
	.price {
		width: 35%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.go-balance {
		width: 35%;
		height: 100%;
		padding: 10rpx 20rpx;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		.go-balance-box {
			background-color: #fa436a;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 32rpx;
			color: #FFFFFF;
			width: 100%;
			height: 100%;
		}
	}
}
.isActive {
	animation: myfirst .8s ease forwards;
}
@keyframes myfirst {
	0% {
		bottom: 1rem;
		opacity: 0;
		visibility: visible;
	}
	50% {
		bottom: 2rem;
		opacity: 1;
	}
	60% {
		bottom: 2.5rem;
	}
	70% {
		bottom: 2rem;
	}
	80% {
		bottom: 2.5rem;
	}
	100% {
		bottom: 2rem;
	}
}
.isActive2 {
	animation: myfirst2 .3s ease forwards;
}
@keyframes myfirst2 {
	0% {
		bottom: 2rem;
	}
	100% {
		bottom: 1rem;
		visibility: hidden;
		opacity: 0;
	}
}
</style>
