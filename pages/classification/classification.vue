<template>
	<view class="classif-cation">
		<view class="navigation-menu">
			<view class="navigation-item" :class="{'navigation-activate': navigationIndex == index}" v-for="(item, index) in navigationList" :key="index" @click="navigationClick(index, item)">
				<text>{{item.content}}</text>
			</view>
		</view>
		
		<view class="content">
			<scroll-view :scroll-top="scrollTop" scroll-with-animation class="scroll-view" scroll-y="true" style="height: 100%;" @scroll="scroll">
				<view :id="'main-' + item.id" class="content-item" v-for="(item, index) in classifList" :key="index">
					<view class="content-box" v-for="(list, listIndex) in item.list" :key="listIndex" @click="classifListClick">
						<view class="title">
							<text>{{list.title}}</text>
						</view>
						<view class="list">
							<view class="list-box" v-for="(item, contentIndex) in list.contentBox" :key="contentIndex">
								<image :src="item.image" mode="aspectFill"></image>
								<text>{{item.content}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	let index = null;
	export default {
		data() {
			return {
				navigationList: [
					{content: '手机数码', id: 0},
					{content: '礼品鲜花', id: 1},
					{content: '男装女装', id: 2},
					{content: '母婴用品', id: 3}
				],
				navigationIndex: 0,
				classifList: [
					{
						id: 0,
						list: [
							{title: '手机通讯',contentBox: [
								{image: '/static/temp/cate2.jpg', content: '全面屏手机'},
								{image: '/static/temp/cate3.jpg', content: '游戏手机'},
								{image: '/static/temp/cate1.jpg', content: '老人机'},
								{image: '/static/temp/cate4.jpg', content: '拍照手机'},
								{image: '/static/temp/cate5.jpg', content: '女性手机'}
							]},
							{title: '运营商',contentBox: [
								{image: '/static/temp/cate1.jpg', content: '合约机'},
								{image: '/static/temp/cate4.jpg', content: '选好卡'},
								{image: '/static/temp/cate5.jpg', content: '办套餐'},
							]}
						]
					},{
						id: 1,
						list: [
							{title: '礼品',contentBox: [
								{image: '/static/temp/cate8.jpg', content: '创意礼品'},
								{image: '/static/temp/cate3.jpg', content: '游戏手机'},
							]},
							{title: '鲜花',contentBox: [
								{image: '/static/temp/cate9.jpg', content: '鲜花'},
								{image: '/static/temp/cate10.jpg', content: '每周一花'},
								{image: '/static/temp/cate11.jpg', content: '卡通花束'},
								{image: '/static/temp/cate12.jpg', content: '永生花'},
							]}
						]
					},{
						id: 2,
						list: [
							{title: '男装',contentBox: [
								{image: '/static/temp/cate13.jpg', content: '男士T恤'},
								{image: '/static/temp/cate14.jpg', content: '男士外套'},
							]},
							{title: '女装',contentBox: [
								{image: '/static/temp/cate15.jpg', content: '裙装'},
								{image: '/static/temp/cate16.jpg', content: 'T恤'},
								{image: '/static/temp/cate15.jpg', content: '上装'},
								{image: '/static/temp/cate16.jpg', content: '下装'},
							]}
						]
					},{
						id: 3,
						list: [
							{title: '奶粉',contentBox: [
								{image: '/static/temp/cate17.jpg', content: '有机奶粉'},
							]},
							{title: '营养辅食',contentBox: [
								{image: '/static/temp/cate18.jpg', content: '果泥/果汁'},
								{image: '/static/temp/cate20.jpg', content: '面条/粥'},
							]},
							{title: '喂养用品',contentBox: [
								{image: '/static/temp/cate21.jpg', content: '吸奶器'},
								{image: '/static/temp/cate22.jpg', content: '儿童餐具'},
								{image: '/static/temp/cate23.jpg', content: '牙胶安抚'},
								{image: '/static/temp/cate24.jpg', content: '围兜'},
							]}
						]
					},
					
				],
				scrollTop: 0,
				timeId: null,
				listBoxState: true,//延迟页面滚动
				listBoxTimeId: null,//定时器
			}
		},
		mounted() {
			// 初始化节点信息
			const query = uni.createSelectorQuery().in(this);
			this.classifList.map((v,i)=>{
				query.select('#main-' + i).boundingClientRect(data => {
					// 元素距离页面顶部的距离
					v.top = data.top;
					// 元素本身高度
					v.height = data.height;
					
				}).exec();
				return v;
			});
		},
		methods: {
			// 点击左侧菜单栏
			navigationClick (index, item) {
				this.navigationIndex = index; // 被点击的菜单栏
				this.scrollTop = this.classifList[index].top;
				this.listBoxState=false;
				clearTimeout(this.listBoxTimeId);
				this.listBoxTimeId=setTimeout(() => {
					this.listBoxState=true;
				},200)
			},
			// 右边滚动栏
			scroll (e) {
				// 获取页面滚动位置
				let { scrollTop } = e.target;
				
				clearTimeout(this.timeId);
				this.timeId = setTimeout(() => {
					this.classifList.map((v,i)=>{
						if (scrollTop>=v.top && scrollTop <= (v.top+v.height)) {
							// 导航栏背景色选中
							this.navigationIndex = i;
						}
					})
				}, 100);
			},
			classifListClick () {
				uni.navigateTo({
					url: '/pages/goodsList/goodsList'
				});
			}
		},
	}
</script>

<style lang="less">
	page {
		width: 750rpx;
		height: 100%;
		background-color: #f8f8f8;
	} 
	.classif-cation {
		width: 100%;
		height: 100%;
		display: flex;
		.navigation-menu {
			flex: 0.3;
			background-color: #FFFFFF;
			.navigation-activate {
				background-color: #f8f8f8;
				color: #fa436a !important;
				position: relative;
				&::after {
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					-webkit-transform: translateY(-50%);
					transform: translateY(-50%);
					height: 18px;
					width: 4px;
					background-color: #fa436a;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
			.navigation-item {
				width: 100%;
				height: 3rem;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				color: #606266;
				border-bottom: 1px solid #E4E7ED;
			}
		}
		.content {
			flex: 0.7;
			margin-left: 0.5rem;
			margin-bottom: 0.1rem;
			.content-item {
				width: 100%;
				height: auto;
				.content-box {
					.title {
						height: 2rem;
						font-size: 14px;
						color: #303133;
						display: flex;
						align-items: center;
					}
					.list {
						width: 100%;
						height: auto;
						background-color: #FFFFFF;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						padding: 0rem 0.5rem;
						box-sizing: border-box;
						.list-box {
							margin-top: 0.5rem;
							width: 33%;
							height: 4rem;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							image {
								width: 140rpx;
								height: 140rpx;
							}
							text {
								font-size: 26rpx;
								color: #666;
								margin: 10rpx 0rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
