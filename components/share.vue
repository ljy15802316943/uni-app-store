<template>
	<view class="share">
		<view :class="{'share-box': shareState}" @tap="handleShowShare"></view>
		<view class="share-item" :class="{'share-show': shareState}">
			<view class="share-to">
				<text>分享到</text>
			</view>
			<view class="content">
				<view class="block" v-for="(item, index) in shareList" :key="index" @tap="handleShareListClick(item.content)">
					<image :src="item.image"></image>
					<text>{{item.content}}</text>
				</view>
			</view>
			<view class="cancel" @tap="handleShowShare">
				<text>取消</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				shareList: [
					{image: '/static/temp/share_wechat.png', content: '微信好友'},
					{image: '/static/temp/share_moment.png', content: '朋友圈'},
					{image: '/static/temp/share_qq.png', content: 'QQ好友'},
					{image: '/static/temp/share_qqzone.png', content: 'QQ空间'},
				],
				shareState: false,
				shareTimeId: null,
				project:true,//防止高频点击
			};
		},
		methods: {
			// 显示分享
			handleShowShare () {
				if (this.project) {
					this.project=false;
					this.shareState = !this.shareState;
					
					clearTimeout(this.shareTimeId)
					this.shareTimeId = setTimeout(() => {
						this.project=true;
					},200);
				}
				
			},
			// 点击分享的图标
			handleShareListClick (content) {
				let newContent = '';
				let data = {};
				if (content == '微信好友') {
					
					newContent = '微信好友';
					data.scene = 'WXSceneSession';
					data.provider = "weixin";
					
				} else if (content == '朋友圈') {
					
					newContent = '朋友圈';
					data.scene = 'WXSenceTimeline';
					data.provider = "weixin";
					
				} else if (content == 'QQ好友') {
					
					newContent = 'QQ好友';
					data.provider = "qq";
					
				} else if (content == 'QQ空间') {
					
					newContent = 'QQ空间';
					data.provider = "qq";
				};
				
				uni.share({
					...data,
					type: 1,
					summary: "这是我近期用HBuilderX开发的app，赶紧跟我一起来体验吧！",
					success: function (res) {
							console.log("success:" + JSON.stringify(res));
					}
				})
				
				uni.showToast({
					title: '分享给' + newContent,
					icon: 'none'
				});
			}
		}
	}
</script>

<style lang="less">
	.share {
		width: 100%;
		height: 100%;
	}
	.share-box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0rpx; left: 0rpx; bottom: 0rpx; right: 0rpx;
		background-color: rgba(0, 0, 0, 0.4);
		transition: .3s;
		z-index: 999;
	}
	// 进入分享动画
	.share-show {
		transition: all 0.3s ease;
		transform: translateY(0%) !important;
	}
	// 离开分享动画
	.share-item {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
		transition: all 0.3s ease;
		transform: translateY(100%);
		z-index: 1999;
		.share-to {
			width: 100%;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			&::after {
				content: '';
				width: 240rpx;
				height: 0rpx;
				border-top: 1px solid #E4E7ED;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				margin-left: 30rpx;
			}
			&::before {
				content: '';
				width: 240rpx;
				height: 0rpx;
				border-top: 1px solid #E4E7ED;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				margin-right: 30rpx;
			}
		}
		.content {
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			.block{
				width: 33%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 180rpx;
				image {
					width: 80rpx;
					height: 80rpx;
					object-fit: cover;
					border-radius: 50%;
				}
				text {
					margin-top: 16rpx;
					font-size: 28rpx;
					color: #606266;
				}
			}
		}
		.cancel {
			width: 100%;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-top: 1rpx solid #E4E7ED;
		}
	}
</style>
