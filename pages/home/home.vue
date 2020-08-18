<template>
	<view class="home">
		<view class="home-top">
			<swiper class="swiper" :circular="true" @change="currentChange">
				<swiper-item style="border-radius: 12rpx;" v-for="(item, index) in imageSrc" :key="index"  @click="currentClick(index)">
					<image :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="prompt">
				<text>{{prompt.index}}</text>
				<text style="margin: 0 0.15rem;">/</text>
				<text>{{prompt.number}}</text>
			</view>
		</view>
		
		<!-- 分类栏 -->
		<view class="classified-section">
			<view class="classified-list">
				<view class="classified-item" v-for="(item, index) in classifiedList" :key="index">
					<image :src="item.img" mode=""></image>
					<text style="margin-top: 0.5rem; font-size: 26rpx;">{{item.content}}</text>
				</view>
			</view>
			<view class="classified-img">
				<image src="/static/temp/ad1.jpg" mode=""></image>
			</view>
		</view>
	
		<!-- 限时秒杀 -->
		<view class="Time-limit">
			<view class="Time-limit-top" @tap="handleTapClick('/pages/detailShow/detailShow?text=','限时秒杀')">
				<image style="width: 140rpx; height: 30rpx;" src="/static/temp/secskill-img.jpg" mode="aspectFill"></image>
				<text style="font-size: 28rpx; color: #909399; margin: -4rpx 20rpx;">8点场</text>
				<text class="number-text">07</text>
				<text class="number-text">13</text>
				<text class="number-text">55</text>
				<text class="yticon icon-you yticon-content"></text>
			</view>
			<view class="Time-limit-bottom">
				<scroll-view class="scroll-view_H" :scroll-x="true">
					<view class="Time-limit-item" v-for="(item, index) in limitList" :key="index" @click="TimeLimitClick(item.content)">
						<image :src="item.img" mode="aspectFill"></image>
						<view class="content">
							<text>{{item.content}}</text>
						</view>
						<view class="money">
							<text>{{item.money}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	
		<!-- 精品团购 -->
		<view class="deals">
			<view class="deals-top" @tap="handleTapClick('/pages/detailShow/detailShow?text=','精品团购')">
				<image style="width: 80rpx; height: 80rpx; margin-right: 20rpx;" src="/static/temp/h1.png" mode=""></image>
				<view class="deals-top-content">
					<text style="font-size: 34rpx;">精品团购</text>
					<text style="font-size: 24rpx; color: #909399;">Guess You Like It</text>
				</view>
				<view class="yticon icon-you deals-top-yticon">
				</view>
			</view>
			<view class="deals-swiper">
				<swiper class="swiper">
					<swiper-item class="swiper-item" v-for="(item, index) in dealsList" :key="index" @click="dealsClick(item.title)">
						<view class="swiper-item-left">
							<view class="img" >
								<image style="width: 100%; height: 460rpx; border-radius: 10rpx;" :src="item.img" mode="aspectFill"></image>
							</view>
							<view class="title">
								<text style="width: 100%; font-size: 30rpx; color: #303133;">{{item.title}}</text>
							</view>
							<view class="">
								<text style="font-size: 30rpx; color: #fa436a;">{{item.moneyLeft1}}</text>
								<text style="font-size: 26rpx; color: #909399; margin: 0 6rpx; text-decoration: line-through;">{{item.moneyLeft2}}</text>
							</view>
							<view class="" style="display: flex; flex-direction: row;">
								<progress style="flex: 1.5; margin-right: 10rpx;" percent="60" border-radius="10" activeColor="rgb(250, 67, 106)" backgroundColor="rgb(235, 235, 235)" />
								<text style="flex: 0.5; font-size: 24rpx;color: #303133;">{{item.group}}</text>
							</view>
						</view>
						<view class="swiper-item-right" style="overflow: hidden;">
							<view class="title" style="overflow: hidden;">
								<text style="font-size: 30rpx; color: #303133; overflow: hidden;text-overflow: ellipsis;">{{item.title2}}</text>
							</view>
							<view class="" style="">
								<text style="font-size: 30rpx; color: #fa436a;">{{item.moneyRight1}}</text>
								<text style="font-size: 26rpx; color: #909399; margin: 0 6rpx; text-decoration: line-through;">{{item.moneyRight2}}</text>
							</view>
							<view class="" style="display: flex; flex-direction: row; align-items: center;">
								<progress style="flex: 1.5; margin-right: 10rpx; height: 12rpx;" percent="80" activeColor="rgb(250, 67, 106)" backgroundColor="rgb(235, 235, 235)" />
								<text style="flex: 0.5; font-size: 24rpx;color: #303133;">{{item.group2}}</text>
							</view>
							<view class="img" style="width: 100%; margin-top: 0.5rem;">
								<image style="width: 100%; height: 448rpx; border-radius: 10rpx;" :src="item.img2" mode="aspectFill"></image>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	
		<!-- 分类精选 -->
		<view class="classificationOfSelected">
			<view class="classif-top" @tap="handleTapClick('/pages/detailShow/detailShow?text=','分类精选')">
				<view class="img">
					<image src="/static/temp/h1.png" mode="aspectFit"></image>
				</view>
				<view class="classif-content">
					<text style="font-size: 34rpx; ">分类精选</text>
					<text style="font-size: 24rpx; color: #909399;">Competitive Products For You</text>
				</view>
				<view style="position: absolute; right: 1rem;" class="yticon icon-you">
					
				</view>
			</view>
			
			<!-- 分类精选1 -->
			<view class="classif-box">
				<view class="img">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409398864&di=4a12763adccf229133fb85193b7cc08f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F19%2F20170319150032_MNwmn.jpeg" mode=""></image>
				</view>
				<scroll-view class="classif-box-swipe" :scroll-x="true">
					<view class="classif-box-item" v-for="(item, index) in classifSwipeList1" :key="index" @click="handleClassifList('分类精选1', item.title)">
						<view class="list" v-if="item.img" >
							<image :src="item.img" mode="aspectFill"></image>
							<text style="margin: 10rpx 0; font-size: 26rpx; color: #303133; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{item.title}}</text>
							<text style="font-size: 26rpx; color: #fa436a;">{{item.money}}</text>
						</view>
						<view class="list2" v-else>
							<text>{{item.title1}}</text>
							<text>{{item.title2}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 分类精选2 -->
			<view class="classif-box2">
				<view class="img">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409984228&di=dee176242038c2d545b7690b303d65ea&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5ef4da9f17faaf4612f0d5046f4161e556e9bbcfdb5b-rHjf00_fw658"></image>
				</view>
				<scroll-view class="classif-box-swipe" :scroll-x="true">
					<view class="classif-box-item" v-for="(item, index) in classifSwipeList2" :key="index" @click="handleClassifList('分类精选2', item.title)">
						<view class="list" v-if="item.img" >
							<image :src="item.img" mode="aspectFill"></image>
							<text style="margin: 10rpx 0; font-size: 26rpx; color: #303133; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{item.title}}</text>
							<text style="font-size: 26rpx; color: #fa436a;">{{item.money}}</text>
						</view>
						<view class="list2" v-else>
							<text>{{item.title1}}</text>
							<text>{{item.title2}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 分类精选3 -->
			<view class="classif-box3">
				<view class="img">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409794730&di=12b840ec4f5748ef06880b85ff63e34e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc03589ed568a8012060c82ac03c.jpg%40900w_1l_2o_100sh.jpg"></image>
				</view>
				<scroll-view class="classif-box-swipe" :scroll-x="true">
					<view class="classif-box-item" v-for="(item, index) in classifSwipeList3" :key="index" @click="handleClassifList('分类精选3', item.title)">
						<view class="list" v-if="item.img" >
							<image style="background-position: center center; background-size: cover; background-repeat: no-repeat;" :src="item.img" mode=""></image>
							<text style="margin: 10rpx 0; font-size: 26rpx; color: #303133; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{item.title}}</text>
							<text style="font-size: 26rpx; color: #fa436a;">{{item.money}}</text>
						</view>
						<view class="list2" v-else>
							<text>{{item.title1}}</text>
							<text>{{item.title2}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	
		<!-- 猜你喜欢 -->
		<view class="guess-you-like">
				<view class="guess-you-like-title" @tap="handleTapClick('/pages/detailShow/detailShow?text=','猜你喜欢')">
					<image class="img" src="/static/temp/h1.png" mode="aspectFit"></image>
					<view class="uess-you-like-content">
						<text class="text1">猜你喜欢</text>
						<text class="text2" style="text-decoration: none;">Guess You Like It</text>
					</view>
					<view class="yticon icon-you guess-you-like-icon">
					</view>
				</view>
				<view class="guess-you-like-list">
					<view class="guess-you-like-item" v-for="(item, index) in guessYouLikeList" :key="index" @click="handleGuessYouLikeList(item.title)">
						<view class="img">
							<image style="width: 100%; height: 330rpx;" :src="item.img" mode="aspectFill"></image>
						</view>
						<view class="list-item">
							<text class="text1">{{item.title}}</text>
							<text class="list-item-text2">{{item.money}}</text>
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
				// 顶部滑块
				imageSrc: [
					"/static/temp/banner3.jpg",
					"/static/temp/banner2.jpg",
					"/static/temp/banner1.jpg"
				],
				// 滑块的提示数字
				prompt: {
					index: 1,
					number: 0
				},
				// 货物分类
				classifiedList: [
					{img: '/static/temp/c3.png', content: '环球美食'},
					{img: '/static/temp/c5.png', content: '个护美妆'},
					{img: '/static/temp/c6.png', content: '营养保健'},
					{img: '/static/temp/c7.png', content: '家居厨卫'},
					{img: '/static/temp/c8.png', content: '速食生鲜'}
				],
				// 限时秒杀。
				limitList: [
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg', 
						content: '古黛妃 短袖t恤女夏装2019新款韩版宽松', 
						money: '￥179'
					},{
						img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg', 
						content: '潘歌针织连衣裙', 
						money: '￥78'
					},{
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg', 
						content: '巧谷2019春夏季新品新款女装', 
						money: '￥108.8'
					},{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg', 
						content: '私萱连衣裙', 
						money: '￥265'
					},{
						img: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg', 
						content: '娇诗茹 ulzzang原宿风学生潮韩版春夏短', 
						money: '￥422'
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg', 
						content: '古黛妃 短袖t恤女夏装2019新款韩版宽松', 
						money: '￥179'
					}
				],
				// 精品团购
				dealsList: [
					{
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						title2: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						moneyLeft1: '￥179',
						moneyLeft2: '￥188',
						moneyRight1: '￥78',
						moneyRight2: '￥188',
						group: '6人成团',
						group2: '10人成团',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
						img2: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg'
					},{
						title: '巧谷2019春夏季新品新款女装',
						title2: '私萱连衣裙',
						moneyLeft1: '￥108.8',
						moneyLeft2: '￥188',
						moneyRight1: '￥256',
						moneyRight2: '￥188',
						group: '6人成团',
						group2: '10人成团',
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
						img2: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg'
					},{
						title: '娇诗茹 ulzzang原宿风学生潮韩版春夏短',
						title2: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						moneyLeft1: '￥422',
						moneyLeft2: '￥188',
						moneyRight1: '￥179',
						moneyRight2: '￥188',
						group: '6人成团',
						group2: '10人成团',
						img: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
						img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg'
					}
				],
				// 分类精选
				classifSwipeList1: [
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},{
						img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',
						title: '潘歌针织连衣裙',
						money: '￥78'
					},{
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',
						title: '巧谷2019春夏季新品新款女装',
						money: '￥108.8'
					},{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg',
						title: '私萱连衣裙',
						money: '￥265'
					},{
						img: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
						title: '娇诗茹 ulzzang原宿风学生潮韩版春夏短',
						money: '￥422'
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},{
						img: '',
						title1: '查看全部',
						title2: 'More+'
					}
				],
				// 分类精选2
				classifSwipeList2: [
					{
						img: 'http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg',
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},{
						img: 'http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg',
						title: '潘歌针织连衣裙',
						money: '￥78'
					},{
						img: 'http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg',
						title: '巧谷2019春夏季新品新款女装',
						money: '￥108.8'
					},{
						img: 'http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg',
						title: '私萱连衣裙',
						money: '￥265'
					},{
						img: 'http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg',
						title: '娇诗茹 ulzzang原宿风学生潮韩版春夏短',
						money: '￥422'
					},{
						img: 'http://img.61ef.cn/news/201903/20/2019032009251784.jpg',
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},{
						img: '',
						title1: '查看全部',
						title2: 'More+'
					}
				],
				// 分类精选3
				classifSwipeList3: [
					{
						img: 'http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg',
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg',
						title: '潘歌针织连衣裙',
						money: '￥78'
					},{
						img: 'http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg',
						title: '巧谷2019春夏季新品新款女装',
						money: '￥108.8'
					},{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg',
						title: '私萱连衣裙',
						money: '￥265'
					},{
						img: 'http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg',
						title: '娇诗茹 ulzzang原宿风学生潮韩版春夏短',
						money: '￥422'
					},{
						img: 'http://img.61ef.cn/news/201903/20/2019032009251784.jpg',
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},{
						img: '',
						title1: '查看全部',
						title2: 'More+'
					}
				],
				// 猜你喜欢
				guessYouLikeList: [
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',						
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},
					{
						img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg',						
						title: '潘歌针织连衣裙',
						money: '￥78'
					},
					{
						img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg',						
						title: '巧谷2019春夏季新品新款女装',
						money: '￥108.8'
					},
					{
						img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg',						
						title: '私萱连衣裙',
						money: '￥265'
					},
					{
						img: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',						
						title: '娇诗茹 ulzzang原宿风学生潮韩版春夏短',
						money: '￥422'
					},
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg',						
						title: '古黛妃 短袖t恤女夏装2019新款韩版宽松',
						money: '￥179'
					},
				],
				text: '点击了'
			}
		},
		created() {
			this.prompt.number = this.imageSrc.length;
		},
		methods: {
			// swiper提示数字
			currentChange (e) {
				this.prompt.index = e.detail.current + 1;
			},
			// 点击swiper
			currentClick (index) {
				uni.navigateTo({
					url: '/pages/detailShow/detailShow?text=' + encodeURIComponent(JSON.stringify('点击了轮播图'))
				});
			},
			// 点击了限时秒杀。 
			TimeLimitClick (text) {
				uni.navigateTo({
					url: '/pages/detailShow/detailShow?text=' + encodeURIComponent(JSON.stringify('点击了' + text))
				});
			},
			// 点击了精品团购
			dealsClick (text) {
				uni.navigateTo({
					url: '/pages/detailShow/detailShow?text=' + encodeURIComponent(JSON.stringify('点击了' + text))
				});
			},
			// 点击了分类精选
			handleClassifList (val, title) {
				let newTitle = title||'More';
				uni.navigateTo({
					url: '/pages/detailShow/detailShow?text=' + encodeURIComponent(JSON.stringify(this.text + newTitle))
				});
			},
			// 点击了猜你喜欢
			handleGuessYouLikeList (title) {
				uni.navigateTo({
					url: '/pages/detailShow/detailShow?text=' + encodeURIComponent(JSON.stringify(this.text + title))
				});
			},
			// 点击了标题栏
			handleTapClick(url,text) {
				uni.navigateTo({
					url: url + encodeURIComponent(JSON.stringify('点击了' + text))
				});
			}
 		},
		// 监听点击导航栏按钮
		onNavigationBarButtonTap (e) {
			if (e.index == 0) {
				// this.$api.msg('点击了扫描');
				uni.scanCode({
				    scanType: ['barCode'],
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			} else if (e.index == 1) {
				uni.navigateTo({
					url: '/pages/messageList/messageList'
				});
			}
		},
		// 监听点击导航栏搜索框
		onNavigationBarSearchInputClicked () {
			this.$api.msg('点击了搜索框');
		}
	}
</script>

<style lang="less">
	page {
		background-color: #ededed;
	}
	.home {
		width: 100%;
		height: 100%;
		.home-top {
			background-color: rgb(203, 87, 60);
			height: 9.5rem;
			width: 750rpx;
			margin-bottom: 1rem;
			position: relative;
			.swiper {
				position: absolute;
				// top: 0;
				left: 0;
				right: 0;
				bottom: -1rem;
				margin: 0 auto;
				width: 700rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.prompt {
				display: flex;
				position: absolute;
				left: 60upx;
				bottom: -22rpx;
				width: 52rpx;
				height: 25rpx;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
				background-size: 100% 100%;
				flex-direction: row;
				justify-content: center;
				text {
					color: #fff;
					font-size: 18upx;
				}
			}
		}
		
		// 分类栏
		.classified-section {
			padding: 1rem;
			box-sizing: border-box;
			background-color: #FFFFFF;
			height: auto;
			width: 750rpx;
			display: flex;
			flex-direction: column;
			.classified-list {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.classified-item {
					width: 3.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					image {
						width: 2.2rem;
						height: 2.2rem;
						margin: auto;
						border-radius: 50%;
					}
				}
			}
			.classified-img {
				width: 100%;
				height: 170rpx;
				image {
					width: 100%;
					height: 170rpx;
					margin-top: 0.6rem;
				}
			}
		}
		
		// 限时秒杀
		.Time-limit {
			padding: 1rem;
			box-sizing: border-box;
			overflow: hidden;
			width: 750rpx;
			height: auto;
			background-color: #FFFFFF;
			margin-top: 0.5rem;
			.Time-limit-top {
				position: relative;
				width: 100%;
				height: 1.2rem;
				display: flex;
				flex-direction: row;
				.number-text {
					width: 40rpx;
					height: 36rpx;
					margin: 0 4rpx;
					font-size: 26rpx;
					border-radius: 4rpx;
					color: #fff;
					background-color: #000000;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.yticon-content {
					position: absolute;
					right: 0;
					top: 0rpx;
				}
			}
			.Time-limit-bottom {
				display: flex;
				flex-direction: row;
				margin-top: 0.5rem;
				.scroll-view_H {
					width: 100%;
					height: 100%;
					max-height: inherit;
					white-space: nowrap;
					.Time-limit-item {
						display: inline-block;
						flex-direction: column;
						width:150rpx;
						height: 150rpx;
						margin: 0 10rpx;
						image {
							width: 100%;
							height: 150rpx;
						}
						.content {
							overflow: hidden;
							text-overflow:ellipsis;    
							white-space: nowrap;
							text {
								width: 150rpx;
								margin-right: 10px;
								font-size: 26rpx;
								color: #303133;
							}
						}
						.money {
							overflow: hidden;
							text-overflow:ellipsis;    
							white-space: nowrap;
							text {
								color: #fa436a;
								font-size: 26rpx;
							}
						}
					}
				}
			}
		}
	
		// 精品团购
		.deals {
			width: 750rpx;
			height: auto;
			background-color: #FFFFFF;
			margin-top: 0.5rem;
			padding: 1rem;
			box-sizing: border-box;
			overflow: hidden;
			.deals-top {
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 2rem;
				position: relative;
				.deals-top-content {
					display: flex;
					flex-direction: column;
				}
				.deals-top-yticon {
					position: absolute;
					right: 0;
					line-height: 2rem;
				}
			}
			.deals-swiper {
				width: 100%;
				height: auto;
				margin-top: 1rem;
				.swiper {
					width: 100%;
					height: 20rem;
					margin-bottom: -0.5rem;
				} 
				.swiper-item {
					display:  flex;
					width: 100%;
					height: 100%;
					.swiper-item-left {
						flex: 1.2;
						margin-right: 24rpx;
						overflow-y: hidden;
						margin: 0 4rpx;
						height: auto;
						.title {
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							display: block;
							text {
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								display: block;
							}
						}
						.uni-progress-bar {
							border-radius: 5px;
							.uni-progress-inner-bar {
								border-radius: 5px;
							} 
						}
					}
					.swiper-item-right {
						flex: 0.8;
						overflow: hidden;    
						text-overflow:ellipsis;    
						white-space: nowrap;
						margin-right: 12rpx;
						.title {
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							display: block;
						}
					}
				}
			}
		}
	
		// 分类精选
		.classificationOfSelected {
			width: 100%;
			height: auto;
			margin-top: 0.5rem;
			position: relative;
			.classif-top {
				position: relative;
				width: 100%;
				height: 4rem;
				background-color: #FFFFFF;
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 1rem;
				box-sizing: border-box;
				overflow: hidden;
				.img {
					width: 80rpx;
					height: 80rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.classif-content {
					display: flex;
					flex-direction: column;
					margin: 0 20rpx;
				}
			}
			.classif-box {
				width: 100%;
				height: 12rem;
				position: relative;
				.img {
					width: 100%;
					height: 272rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.classif-box-swipe {
					width: 718rpx;
					height: auto;
					margin-left: 34rpx;
					position: absolute;
					bottom: 20rpx;
					border-radius: 6rpx;
					padding: 0.5rem;
					box-sizing: border-box;
					overflow: hidden;
					background-color: #FFFFFF;
					display: flex;
					flex-direction: row;
					white-space: nowrap;
					.classif-box-item {
						width: 180rpx;
						height: 100%;
						display: inline-block;
						margin: 0 10rpx;
						position: relative;
						.list {
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							image {
								width: 180rpx;
								height: 180rpx;
							}
						}
						.list2 {
							width: 100%;
							height: 180rpx;
							background-color: #f3f3f3;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							position: absolute;
							bottom: 0rem;
							text {
								font-size: 28rpx;
							    color: #909399;
							}
						}
					}
				}
			}
			.classif-box2 {
				width: 100%;
				height: 12rem;
				position: relative;
				.img {
					width: 100%;
					height: 272rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.classif-box-swipe {
					width: 718rpx;
					height: auto;
					margin-left: 34rpx;
					position: absolute;
					bottom: 20rpx;
					border-radius: 6rpx;
					padding: 0.5rem;
					box-sizing: border-box;
					overflow: hidden;
					background-color: #FFFFFF;
					display: flex;
					flex-direction: row;
					white-space: nowrap;
					.classif-box-item {
						width: 180rpx;
						height: 100%;
						display: inline-block;
						margin: 0 10rpx;
						position: relative;
						.list {
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							image {
								width: 180rpx;
								height: 180rpx;
							}
						}
						.list2 {
							width: 180rpx;
							height: 180rpx;
							background-color: #f3f3f3;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							position: absolute;
							bottom: 0rem;
							text {
								font-size: 28rpx;
							    color: #909399;
							}
						}
					}
				}
			}
			.classif-box3 {
				width: 100%;
				height: 12rem;
				position: relative;
				.img {
					width: 100%;
					height: 272rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.classif-box-swipe {
					width: 718rpx;
					height: auto;
					margin-left: 34rpx;
					position: absolute;
					bottom: 20rpx;
					border-radius: 6rpx;
					padding: 0.5rem;
					box-sizing: border-box;
					overflow: hidden;
					background-color: #FFFFFF;
					display: flex;
					flex-direction: row;
					white-space: nowrap;
					.classif-box-item {
						width: 180rpx;
						height: 100%;
						display: inline-block;
						margin: 0 10rpx;
						position: relative;
						.list {
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							image {
								width: 180rpx;
								height: 180rpx;
							}
						}
						.list2 {
							width: 180rpx;
							height: 180rpx;
							background-color: #f3f3f3;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							position: absolute;
							bottom: 0rem;
							text {
								font-size: 28rpx;
							    color: #909399;
							}
						}
					}
				}
			}
		
		}
	
		// 猜你喜欢
		.guess-you-like {
			width: 100%;
			height: auto;
			padding: 1rem;
			box-sizing: border-box;
			overflow: hidden;
			background-color: #FFFFFF;
			.guess-you-like-title {
				width: 100%;
				height: 3rem;
				position: relative;
				display: flex;
				flex-direction: row;
				align-items: center;
				.img {
					width: 80rpx;
					height: 80rpx;
				}
				.uess-you-like-content {
					margin: 0 20rpx;
					display: flex;
					flex-direction: column;
					.text1 {
						font-size: 34rpx;
					}
					.text2 {
						font-size: 24rpx;
						color: #909399;
					}
				}
				.guess-you-like-icon {
					position: absolute;
					right: 0rem;
				}
			}
			.guess-you-like-list {
				width: 100%;
				height: auto;
				background-color: #FFFFFF;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				.guess-you-like-item {
					width: 48%;
					height: auto;
					padding: 0.5rem 0;
					box-sizing: border-box;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					.img {
						width: 100%;
						height: 330rpx;
					}
					.list-item {
						display: flex;
						flex-direction: column;
						.text1 {
							font-size: 32rpx;
							color: #303133;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin: 10rpx 0rpx;
						}
						.list-item-text2 {
							font-size: 32rpx;
							color: #fa436a;
						}
					}
				}
			}
		}
	}
</style>
