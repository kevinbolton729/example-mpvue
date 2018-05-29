// 格式化数字
const twoDecimal = (num) => {
  // 显示数字，保留小数点后两位
  // 返回值的类型为String
  const f = parseFloat(num);

  if (!f) {
    return "0.00";
  }

  return (Math.floor(f * 100) / 100).toFixed(2);
};
// 格式化数字 eg. 150.50（小数点后两位）
export const parseNum = (value) => twoDecimal(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// 字符串转换成大写
export const strToUpper = (str) => str.toString().toUpperCase();
