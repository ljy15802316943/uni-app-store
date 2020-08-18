<template>
	<view class="my">
		<view class="header">
			<view class="portrait">
				<image src="/static/missing-face.png" mode="aspectFill"></image>
				<text>游客</text>
			</view>
		</view>
		<view class="centent">
			<view class="member">
				<view class="view1">
					<text class="yticon icon-iLinkapp-"></text>
					<text>DCloud会员</text>
				</view>
				<view class="view2">
					<text>立即开通</text>
				</view>
				<view class="img">
					<image src="/static/arc.png" mode=""></image>
				</view>
			</view>
			<view class="balance">
				<view class="balance-box" v-for="(item, index) in balanceList" :key="index">
					<text class="balance-text1">{{item.number}}</text>
					<text class="balance-text2">{{item.content}}</text>
				</view>
			</view>
			<view class="order">
				<view class="order-box" v-for="(item, index) in orderList" :key="index">
					<text class="box-text1" :class="item.img"></text>
					<text class="box-text2">{{item.content}}</text>
				</view>
			</view>
			<view class="browsing-history">
				<view class="browsing">
					<text class="yticon icon-lishijilu icon-font browsing-text1"></text>
					<text class="text-font browsing-text2">浏览历史</text>
				</view>
				<view class="browsing-list">
					<view class="list-box" v-for="(item, index) in browsingList" :key="index">
						<image :src="item.img" mode="scaleToFill"></image>
					</view>
				</view>
				<view class="wallet">
					<view class="cell-icon yticon icon-iconfontweixin icon-font" style="color: rgb(224, 116, 114);"></view>
					<view class="wallet-box">
						<view class="text-font">
							我的钱包
						</view>
						<view class="content">
							<text class="text-comment">您的会员还有3天过期</text>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
				<view class="wallet">
					<view class="cell-icon yticon icon-dizhi icon-font" style="color: rgb(95, 205, 162);"></view>
					<view class="wallet-box">
						<view class="text-font">
							地址管理
						</view>
						<view class="content">
							<text class="text-comment"></text>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
				<view class="wallet">
					<view class="cell-icon yticon icon-share icon-font" style="color: rgb(151, 137, 247);"></view>
					<view class="wallet-box">
						<view class="text-font">
							分享
						</view>
						<view class="content">
							<text class="text-comment">邀请好友赢10万大礼</text>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
				<view class="wallet">
					<view class="cell-icon yticon icon-pinglun-copy icon-font" style="color: rgb(224, 116, 114);"></view>
					<view class="wallet-box">
						<view class="text-font">
							晒单
						</view>
						<view class="content">
							<text class="text-comment">晒单抢红包</text>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
				<view class="wallet">
					<view class="cell-icon yticon icon-shoucang_xuanzhongzhuangtai icon-font" style="color: rgb(84, 180, 239);"></view>
					<view class="wallet-box">
						<view class="text-font">
							我的收藏
						</view>
						<view class="content">
							<text class="text-comment"></text>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
				<view class="wallet">
					<view class="cell-icon yticon icon-shezhi1 icon-font" style="color: rgb(224, 116, 114);"></view>
					<view class="wallet-box">
						<view class="text-font">
							设置
						</view>
						<view class="content">
							<text class="text-comment"></text>
							<text class="cell-more yticon icon-you"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				balanceList: [
					{number: '128.8', content: '余额'},
					{number: '0', content: '优惠卷'},
					{number: '20', content: '积分'},
				],
				orderList: [
					{img: 'yticon icon-shouye', content: '全部订单'},
					{img: 'yticon icon-daifukuan', content: '待付款'},
					{img: 'yticon icon-yishouhuoyticon icon-shouhoutuikuan', content: '待收货'},
					{img: 'yticon icon-shouhoutuikuan', content: '退款/售后'}
				],
				browsingList: [
					{img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105186633&di=c121a29beece4e14269948d990f9e720&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fm8%2FM04%2FDE%2FDE%2FwKhQplZ-QteEBvsbAAAAADUkobU751.jpg'},
					{img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105231218&di=09534b9833b5243296630e6d5b728eff&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fm1%2FM05%2FD1%2FAC%2FwKhQcFQ3iN2EQTo8AAAAAHQU6_8355.jpg'},
					{img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105320890&di=c743386be51f2c4c0fd4b75754d14f3c&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fhb%2FMTQ1OTg4ODY0MDA3Ny05OTQ4ODY1NDQ%3D.jpg'},
					{img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=191678693,2701202375&fm=26&gp=0.jpg'},
					{img: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1951596806.jpg'},
				]
			}
		},
		onNavigationBarButtonTap (obj) {
			if (obj.index == 1) {
				uni.navigateTo({
					url: '/pages/messageList/messageList'
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
page {
	width: 750rpx;
	background-color: #ededed;
}
.my {
	width: 750rpx;
	height: auto;
	.header {
		width: 100%;
		height: 9rem;
		background-image: url('@/static/user-bg.jpg');
		background-size: cover;
		padding: 0rem 1rem;
		padding-top: 3.5rem;
		box-sizing: border-box;
		.portrait {
			width: 100%;
			height: 3rem;
			display: flex;
			align-items: center;
			image {
				width: 3rem;
				height: 3rem;
			}
			text {
				font-size: 38rpx;
				color: #303133;
				margin-left: 20rpx;
			}
		}
	}
	.centent {
		width: 100%;
		height: auto;
		margin-top: -1.5rem;
		padding: 0 1rem;
		padding-bottom: 1rem;
		box-sizing: border-box;
		.member {
			width: 100%;
			height: 2.5rem;
			background: rgba(0, 0, 0, 0.7);
			border-radius: 8px 8px 0 0;
			overflow: hidden;
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			position: relative;
			.view1 {
				width: 5.6rem;
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 15rpx;
				font-size: 30rpx;
				color: #f7d680;
				margin-left: 0.5rem;
			}
			.view2 {
				display: flex;
				flex-direction: row;
				width: 4rem;
				height: 1.2rem;
				border-radius: 38px;
				justify-content: center;
				align-items: center;
				margin-right: 0.5rem;
				margin-top: 12rpx;
				background: #f9e6af;
				text {
					font-size: 20rpx;
					color: #000;
				}
			}
			.img {
				width: 100%;
				height: 1rem;
				position: absolute;
				left: 0;
				bottom: 0;
				image {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
		.balance {
			width: 100%;
			height: 3rem;
			background: #FFFFFF;
			border-radius: 5rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.balance-box {
				flex: 0.3;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.balance-text1 {
					font-size: 32rpx;
					color: #303133;
				}
				.balance-text2 {
					font-size: 24rpx;
					color: #75787d;
				}
			}
		}
		.order {
			width: 100%;
			height: 3.5rem;
			background: #FFFFFF;
			border-radius: 5rpx;
			margin-top: 0.5rem;
			display: flex;
			flex-direction: row;
			.order-box {
				width: 25%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.box-text1 {
					font-size: 48rpx;
					color: #fa436a;
				}
				.box-text2 {
					font-size: 24rpx;
					color: #303133;
					margin: 0.2rem 0rem;
				}
			}
		}
		.browsing-history {
			width: 100%;
			height: auto;
			background-color: #FFFFFF;
			padding: 0.8rem;
			box-sizing: border-box;
			margin-top: 0.5rem;
			overflow: hidden;
			margin-bottom: 1rem;
			.icon-font {
				font-size: 45rpx;
				margin-right: 10rpx;
			}
			.text-font {
				font-size: 28rpx;
				color: #303133;
			}
			.text-comment {
				font-size: 26rpx;
				color: #909399;
				margin-right: 0.5rem;
			}
			.browsing {
				width: 100%;
				display: flex;
				align-items: center;
				.browsing-text1 {
					color: #5eba8f;
				}
				.browsing-text2 {

				}
			}
			.browsing-list {
				width: auto;
				height: 3.5rem;
				border-radius: 5rpx;
				margin-top: 0.5rem;
				white-space: nowrap;
				overflow-x: auto;
				overflow-y: hidden;
				.list-box {
					width: 3.5rem;
					height: 100%;
					display: inline-block;
					border-radius: 5rpx;
					image {
						width: 100%;
						height: 100%;
					} 
				}
				.list-box:not(:first-child) {
					margin-left: 0.5rem;
				}
			}
			.browsing-list::-webkit-scrollbar {
			  display: none; /* Chrome Safari */
			}
			.wallet {
				width: 100%;
				height: 3.5rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid #E4E7ED;
				.wallet-box {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					position: relative;
				}
			}
		}
	}
}

</style>
