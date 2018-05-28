/*
 * @Author: Kevin Bolton
 * @Date: 2018-05-27 23:01:19
 * @Last Modified by: Kevin Bolton
 * @Last Modified time: 2018-05-27 23:37:04
 */
import Vue from "vue";
import Vuex from "vuex";

// modules
import home from "./home";

// 加载Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  // 模块分组
  modules: {
    home,
  },
});

export default store;
