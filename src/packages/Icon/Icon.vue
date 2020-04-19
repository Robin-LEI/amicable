<template>
  <svg class="ed-icon icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'ed-icon',
    props: {
      icon: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang='scss'>
.ed-icon {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>