// 接口
import api from "@/services/api";
// 方法
import parse from "@/utils/parse";

// 请求函数
const { getHomeData } = api;
// 解析响应
const { parseResponse } = parse;

const home = {
  namespaced: true,

  state: {
    isLoading: false,
    homeData: [],
  },

  getters: {},

  // 异步
  actions: {
    async getHomeData({ commit }) {
      commit({
        type: "changeLoading",
        payload: true,
      });
      const response = await getHomeData();
      const { status, message, extData } = await parseResponse(response);
      const { data } = await extData;

      if (status > 0) {
        await commit({
          type: "changeHomeData",
          payload: data,
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
  },
};

export default home;
