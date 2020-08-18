<template>
	<view class="login">
		<view class="back-btn yticon icon-zuojiantou-up" @click="handleBack">
		</view>
		
		<view class="content">
			<view class="title">
				欢迎回来！
			</view>
			<view class="input-phone">
				<text>手机号码</text>
				<input type="text" value="" placeholder="请输入手机号码" />
			</view>
			<view class="input-password">
				<text>密码</text>
				<input type="text" value="" placeholder="8-18位不含特殊字符的数字、字母组合" />
			</view>
			<button class="button" type="warn">登录</button>
			<view class="forgot-password">
				忘记密码?
			</view>
		</view>
	
		<view class="footer">
			<text class="text-1">还没有帐号?</text>
			<text class="text-2">马上注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleBack () {
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style lang="less">
page {
	width: 100%;
	height: 100%;
}
.login {
	position: relative;
	overflow: hidden;
	.back-btn {
		position: fixed;
		top: 1rem;
		left: 1rem;
		font-size: 20px;
		color: #303133;
		z-index: 9999;
	}
	.content {
		width: 88%;
		height: auto;
		margin: auto;
		margin-top: 8rem;
		.title {
			font-size: 46rpx;
			color: #555;
			text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
			font-weight: 500;
		}
		.input-phone {
			width: 100%;
			height: 3.5rem;
			background-color: #f8f6fc;
			border-radius: 10rpx;
			margin-top: 2rem;
			padding: 0.3rem;
			box-sizing: border-box;
			text {
				font-size: 26rpx;
				color: #606266;
			}
			uni-input {
				font-size: 24rpx;
				margin-top: 10rpx;
			}
		}
		.input-password {
			width: 100%;
			height: 3.5rem;
			background-color: #f8f6fc;
			border-radius: 10rpx;
			margin-top: 1rem;
			padding: 0.3rem;
			box-sizing: border-box;
			text {
				font-size: 26rpx;
				color: #606266;
			}
			uni-input {
				font-size: 24rpx;
				margin-top: 10rpx;
			}
		}
		.button {
			border-radius: 100rpx;
			margin-top: 2rem;
		}
		.forgot-password {
			color: #4399fc;
			font-size: 26rpx;
			display: flex;
			justify-content: center;
			margin-top: 1rem;
		}
	}
	.footer {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 1.5rem;
		display: flex;
		justify-content: center;
		.text-1 {
			font-size: 26rpx;
			color: #606266;
		}
		.text-2 {
			font-size: 26rpx;
			color: #4399fc;
			margin-left: 5rpx;
		}
	}
}
</style>
