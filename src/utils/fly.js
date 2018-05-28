import Fly from "flyio/dist/npm/wx";
// 配置
import { TIMEOUT } from "./config";

const fly = new Fly();
// 错误处理
const errorHandler = {
  code: 1,
  message: "请求错误",
  data: [],
};

// 发起多请求
// 并发N个请求，handler = (res1,res2,...resN)=>{}
export const requestAll = (fetchs, handler) => {
  if (fetchs.length < 2) {
    console.log("请传入2个及以上的请求函数");
    return null;
  }
  return fly
    .all([...fetchs])
    .then(fly.spread(handler))
    .catch((error) => {
      console.log(error);
      return errorHandler;
    });
};

// 封装 fly
const fetch = (url, options) => {
  console.log(options.params, "fly request params");
  let withCredentials = true;
  if (options && options.credentials) {
    withCredentials = options.credentials;
  }

  return new Promise((resolve, reject) => {
    fly
      .request(url, options.params || null, {
        method: options.method || "GET",
        headers: options.headers || {},
        // 是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
        parseJson: true,
        // 设置responseType
        // eg.arraybuffer/blob/document/json/text/moz-chunked-arraybuffer/ms-stream
        responseType: options.responseType || "text",
        timeout: options.timeout || TIMEOUT, // 超时时间
        withCredentials,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
// 封装 请求函数request
const request = (url, options) => {
  const newOptions = { ...options };

  newOptions.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    ...newOptions.headers,
  };
  // POST PUT 请求时，序列化传递参数body
  if (
    (newOptions.method !== "POST" || newOptions.method !== "PUT") &&
    url.indexOf("/upload/") !== -1
  ) {
    newOptions.headers["X-Requested-With"] = "XMLHttpRequest";
  }

  return fetch(url, newOptions)
    .then((response) => response.data)
    .catch(() => {
      console.log(`请求URL: ${url}`);
      return errorHandler;
    });
};

export default request;
