// 封装 wx.request
const fetch = (url, options) => {
  console.log(options.data, "request data");
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: options.data || {},
      method: options.method || "GET",
      header: options.headers || {},
      dataType: options.dataType || "json",
      responseType: options.responseType || "text",
      success(response) {
        resolve(response);
      },
      fail(error) {
        reject(error);
      },
    });
  });
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const request = (url, options) => {
  const newOptions = { ...options };

  newOptions.headers = {
    "content-type": "application/x-www-form-urlencoded",
    ...newOptions.headers,
  };

  return fetch(url, newOptions)
    .then((response) => response.data)
    .catch(() => {
      console.log(`请求URL: ${url}`);
      return {
        code: 1,
        message: "请求错误",
        data: [],
      };
    });
};

export default request;
