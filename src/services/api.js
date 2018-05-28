import request from "@/utils/fly";
// 方法
// import {} from "@/utils/fns";
// 配置
import { HOST } from "@/utils/config";

// [API]
export default {
  getHomeData(params = {}) {
    return request(`${HOST}/api/front/allhome`, { params });
  },
  getChannelList(params = {}) {
    return request(`${HOST}/api/front/allchannels`, { params });
  },
};
