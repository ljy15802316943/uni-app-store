import Vue from 'vue';
import App from './App';
import Json from './Json.js';

Vue.config.productionTip = false
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
};


App.mpType = 'app'

const msg = (title, icon="none", duration=1500) => {
	if (!title) {
		return false;
	};
	uni.showToast({
		title: title,
		icon: icon,
		duration: duration
	});
}

Vue.prototype.$api = {msg, json};

const app = new Vue({
    ...App
})
app.$mount()
