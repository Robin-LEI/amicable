<template>
  <div v-if="this.$slots.default" class="ed-button" :class="classes" @click="$emit('click', $event)">
    <ed-icon :icon="icon" v-if="icon && !loading" class="icon"></ed-icon>
    <ed-icon icon="loading" v-if="loading"></ed-icon>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'ed-button',
    props: {
      type: {
        type: String,
        default: '',
        validator(type) {
          const typeArr = ['default','primary', 'success','info','danger','warning']
          if (type && !typeArr.includes(type)) {
            console.error(`type的值必须为这几种：${typeArr.join(',')}`)
            return
          }
          return true
        }
      },
      icon: {
        type: String
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(type) {
          if (type && !['left', 'right'].includes(type)) {
            console.error(`icon-position的值只能为：left | right`)
          }
          return true
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        typeArr: ['default','primary', 'success','info','danger','warning']
      }
    },
    computed: {
      classes() {
        const types = []
        if (this.type && ['default','primary', 'success','info','danger','warning'].includes(this.type)) {
          types.push(`ed-button-${this.type}`)
        }
        if (this.iconPosition) {
          types.push(`ed-button-${this.iconPosition}`)
        }
        return types
      }
    }
  }
</script>

<style lang='scss'>
@import "../../styles/common.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;

.ed-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color;
    background: $background;
  }

  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    outline: none;
    background-color: $background;
  }

  @each $type, $color in(
    primary: $primary,
    success: $success,
    info: $info,
    danger: $danger,
    warning: $warning
  ) {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  @each $type, $color in(
    primary: $primary-hover,
    success: $success-hover,
    info: $info-hover,
    danger: $danger-hover,
    warning: $warning-hover
  ) {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }


  @each $type, $color in(
    primary: $primary-active,
    success: $success-active,
    info: $info-active,
    danger: $danger-active,
    warning: $warning-active
  ) {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  icon +span {
    margin-right: 4px;
  }

  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }

  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
  }
}
</style>