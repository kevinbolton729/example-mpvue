export default {
  // 默认
  parseResponse(params) {
    console.log(params, "response data");
    return {
      ...params,
    };
  },
};
