import request from "@/utils/request";
// 方法
// import {} from "@/utils/fns";
// 配置
import { HOST } from "@/utils/config";

// [API]
export default {
  getHomeData(data = {}) {
    return request(`${HOST}/api/front/allhome`, { data });
  },
};
