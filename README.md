# project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# vuepress
1. npm i element-ui highlight.js node-sass sass-loader core-js@2 --save
2. 覆盖默认样式
3. https://www.vuepress.cn/zh/guide/markdown-slot.html
4. https://www.vuepress.cn/zh/guide/markdown-slot.html#markdown-%E6%8F%92%E6%A7%BD
5. https://www.vuepress.cn/zh/guide/directory-structure.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84



#　为组件编写测试用例karma(前端单元测试工具)
1. 保证项目的可靠性
2. 使得开发者编写更容易被测试的代码，提高代码的质量
3. 有利于代码的维护


# 常用测试框架
1. karma，可以跨浏览器测试，可以再浏览器中执行测试用例
2. jest，jsdom，不能再浏览器中运行测试用例
3. mocha，chai

# 安装
1. `npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai`
2. [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)


# 匹配器有三种
1. 相等
2. 不相等
3. 是否包含