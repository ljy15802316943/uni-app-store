<template>
	<view class="message-list">
		<view class="message-box" v-for="(item, index) in messageList" :key="index">
			<text class="message-text">{{item.time}}</text>
			<view class="message-content">
				<text class="content-text1">{{item.title}}</text>
				<image class="content-image" :src="item.img" mode=""></image>
				<view v-if="item.content" class="content-text2">
					{{item.content}}
				</view>
				<text class="content-text3">{{item.detail}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messageList: [
					{
						time: '11:30',
						title: '新品上市，全场满199减50',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556465765776&di=57bb5ff70dc4f67dcdb856e5d123c9e7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fd015aa4d95fa801206d96069229.jpg%401280w_1l_2o_100sh.jpg',
						content: '虽然做了一件好事，但很有可能因此招来他人的无端猜测，例如被质疑是否藏有其他利己动机等，乃至谴责。即便如此，还是要做好事。',
						detail: '查看详情'
					},
					{
						time: '昨天 12:30',
						title: '新品上市，全场满199减50',
						img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3761064275,227090144&fm=26&gp=0.jpg',
						content: '',
						detail: '查看详情'
					},
					{
						time: '2019-07-26 12:30',
						title: '新品上市，全场满199减50',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556465765776&di=57bb5ff70dc4f67dcdb856e5d123c9e7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fd015aa4d95fa801206d96069229.jpg%401280w_1l_2o_100sh.jpg',
						content: '新品上市全场2折起，新品上市全场2折起，新品上市全场2折起，新品上市全场2折起，新品上市全场2折起',
						detail: '查看详情'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
page {
	background-color: #ededed;
}
.message-list {
	width: 100%;
	height: auto;
	padding-bottom: 0.8rem;
	box-sizing: border-box;
	.message-box {
		width: 100%;
		height: auto;
		padding: 0rem 0.5rem;
		box-sizing: border-box;
		.message-text {
			width: 100%;
			height: 2.3rem;
			font-size: 26rpx;
			color: #7d7d7d;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.message-content {
			width: 100%;
			height: auto;
			padding: 0rem 0.5rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			.content-text1 {
				width: 100%;
				height: 2rem;
				display: flex;
				align-items: center;
				font-size: 32rpx;
				color: #303133;
			} 
			.content-image {
				width: 100%;
				height: 7.5rem;
			}
			.content-text2 {
				width: 100%;
				height: auto;
				font-size: 28rpx;
				color: #606266;
				padding: 0.2rem 0rem;
				box-sizing: border-box;
				border-bottom: 1px solid #E4E7ED;
			}
			.content-text3 {
				width: 100%;
				height: 2rem;
				font-size: 24rpx;
				color: #707070;
				display: flex;
				align-items: center;
			}
		}
	}
}
</style>
