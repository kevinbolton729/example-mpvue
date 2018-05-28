import Vue from "vue";
import store from "@/models";

import App from "./App";

Vue.config.productionTip = false;
App.mpType = "app";

// 向Vue添加更多原型属性/方法
// 将store添加至Vue的prototype
Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ["^pages/index/main"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "家庭账单",
      navigationBarTextStyle: "black",
    },
  },
};