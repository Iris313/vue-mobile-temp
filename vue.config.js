/*
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-09-29 11:21:45
 * @LastEditTime: 2021-09-29 14:13:51
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/prod' : '/', //打包的文件路径前包含/prod
  lintOnSave: process.env.NODE_ENV !== 'production', //为true, eslint-loader 在开发和生产构建下都会被启用
  productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  chainWebpack: config => {
    config.resolve.symlinks(false);
    // eslint-loader 编译代码的时候也希望进行eslint检测
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .tap((option) => {
        return {
          ...option,
          fix: true,
        };
      });
  },
}