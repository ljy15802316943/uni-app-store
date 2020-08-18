<template>
	<view class="balance-box">
		<view class="balance">
			<view class="jiesuan">
				<view class="jiesuan-box">
					<view class="yticon icon-xuanzhong2 checkbox" 
					:class="{'checkbox-activate': checkboxState}"
					@click="handleCheckbox"
					></view>
					<view class="clear" :class="{'clear-activate': checkboxState}">清空</view>
				</view>
			</view>
			<view class="price">
				<text class="text-font flex-end" style="color: #303133;">￥0</text>
				<text class="text-font flex-end" style="color: #909399; font-size: 26rpx;">已优惠74.35元</text>
			</view>
			<view class="go-balance">
				<view class="go-balance-box">
					去结算
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			totalMoney: {
				type: null || Number
			}
		},
		data() {
			return {
				checkboxStateBox: false
			}
		},
		
	}
</script>

<style lang="less">
	
</style>
