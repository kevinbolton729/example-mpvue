import { requestAll } from "@/utils/request";
// 接口
import api from "@/services/api";
// 方法
// import parse from "@/utils/parse";

// 请求函数
const { getHomeData, getChannelList } = api;
// 解析响应
// const { parseResponse } = parse;

const home = {
  namespaced: true,

  state: {
    isLoading: false,
    homeData: [],
    channelData: [],
  },

  getters: {},

  // 异步
  actions: {
    async getHomeData({ commit }) {
      commit({
        type: "changeLoading",
        payload: true,
      });
      const response = await requestAll([getHomeData(), getChannelList()]);
      const { code, message, data } = await response;

      if (code === 0) {
        await commit({
          type: "changeHomeData",
          payload: data[0],
        });
        await commit({
          type: "changeChannelData",
          payload: data[1],
        });
      } else {
        await console.log(message, "error message");
      }
      await commit({
        type: "changeLoading",
        payload: false,
      });
    },
  },

  // 同步
  /* eslint-disable no-param-reassign */
  mutations: {
    changeLoading(state, { payload }) {
      state.isLoading = payload;
    },
    changeHomeData(state, { payload }) {
      state.homeData = payload;
    },
    changeChannelData(state, { payload }) {
      state.channelData = payload;
    },
  },
};

export default home;
