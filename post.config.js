/*
 * @Descripttion:
 * @Author: wmq
 * @Date: 2021-08-01 22:30:44
 * @LastEditTime: 2021-08-01 22:32:04
 */
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 设计稿宽度
      // viewportHeight: 1334, // 设计稿高度，可以不指定
      unitPrecision: 3, // px to vw无法整除时，保留几位小数
      propList: ["*", "!border*"],
      viewportUnit: "vw", // 转换成vw单位
      selectorBlackList: [".ignore", ".hairlines"], // 不转换的类名
      minPixelValue: 1, // 小于1px不转换
      mediaQuery: false, // 不允许媒体查询中转换
      exclude: /(\/|\\)(node_modules)(\/|\\)/, // 不转换我们引入的第三方包
    },
  },
};
