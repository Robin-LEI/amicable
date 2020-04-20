<template>
  <div id="app">
    <ed-button type="default">默认按钮</ed-button>
    <ed-button type="default" disabled>禁用按钮</ed-button>
    <ed-button type="primary" disabled>主要按钮</ed-button>
    <ed-button type="success" disabled>成功按钮</ed-button>
    <ed-button type="info" disabled>信息按钮</ed-button>
    <ed-button type="warning" disabled>警告按钮</ed-button>
    <ed-button type="danger" disabled>危险按钮</ed-button>
    <ed-icon icon="chuangzuo"></ed-icon>
    <ed-button type="primary" icon="chenggong">测试按钮</ed-button>
    <ed-button type="primary" icon="chenggong" icon-position="left">测试按钮</ed-button>
    <ed-button type="primary" icon="chenggong" icon-position="right">测试按钮</ed-button>
    <ed-button type="primary" icon="chenggong" loading @click="onClick">测试按钮</ed-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    onClick(e) {
      console.log('click', e)
    }
  }
}
</script>

