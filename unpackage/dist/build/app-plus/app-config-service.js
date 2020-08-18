
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/classification/classification","pages/shoppingCart/shoppingCart","pages/my/my","pages/home/messages/messages","pages/home/advertising/advertising","pages/detailShow/detailShow","pages/goodsList/goodsList","pages/login/login","pages/messageList/messageList"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"rgb(192, 196, 204)","selectedColor":"#fa436a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home/home","iconPath":"/static/tab-home.png","selectedIconPath":"/static/tab-home-current.png","text":"首页"},{"pagePath":"pages/classification/classification","iconPath":"/static/tab-cate.png","selectedIconPath":"/static/tab-cate-current.png","text":"分类"},{"pagePath":"pages/shoppingCart/shoppingCart","iconPath":"/static/tab-cart.png","selectedIconPath":"/static/tab-cart-current.png","text":"购物车"},{"pagePath":"pages/my/my","iconPath":"/static/tab-my.png","selectedIconPath":"/static/tab-my-current.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-nixWell","compilerVersion":"2.6.9","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"transparent","searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"请输入地址 如：大钟寺","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"26","color":"#303133","float":"left","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/classification/classification","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"分类","navigationBarTextStyle":"black"}},{"path":"/pages/shoppingCart/shoppingCart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"购物车","navigationBarTextStyle":"black"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"transparent","titleText":"我的","buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"24","color":"#303133","width":"46px","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/home/messages/messages","meta":{},"window":{}},{"path":"/pages/home/advertising/advertising","meta":{},"window":{}},{"path":"/pages/detailShow/detailShow","meta":{},"window":{"titleNView":{"type":"transparent","titleText":"详情展示"}}},{"path":"/pages/goodsList/goodsList","meta":{},"window":{"titleNView":{"titleText":"商品列表","backgroundColor":"rgb(255, 255, 255)"}}},{"path":"/pages/login/login","meta":{},"window":{"titleNView":false}},{"path":"/pages/messageList/messageList","meta":{},"window":{"titleNView":{"titleText":"通知"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0,global:void 0}}}});