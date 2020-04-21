module.exports = {
  title: "amicable-ui",
  description: "ui组件库",
  dest: "./build",
  port: 1234,
  themeConfig: {
    nav: [{
      text: "主页",
      link: "/"
    }],
    sidebar: {
      '/components/': [
        {
          collapsable: true,
          children: [
            'button'
          ]
        }
      ]
    }
  }
}