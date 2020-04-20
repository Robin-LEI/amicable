var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    // 用到的测试框架
    frameworks: ['mocha'],
    // 需要加载到浏览器的文件列表
    files: ['tests/**/*.spec.js'],
    // 在浏览器使用之前处理匹配的文件
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    // 启用自动检测
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ['spec'],
    // 测试启动的浏览器-chrome
    browsers: ['ChromeHeadless']
  })
}