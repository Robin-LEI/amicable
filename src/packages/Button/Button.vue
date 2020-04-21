<template>
  <button v-if="this.$slots.default" :disabled="disabled" class="ed-button" :class="classes" @click="$emit('click', $event)">
    <ed-icon :icon="icon" v-if="icon && !loading" class="icon"></ed-icon>
    <ed-icon icon="loading" v-if="loading"></ed-icon>
    <span>
      <slot></slot>
    </span>
  </button>
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
      },
      disabled: {
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
        if (this.loading) {
          types.push('is-loading')
        }
        if (this.disabled) {
          types.push('is-disabled')
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
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ebeef5;
  }
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

.ed-button-primary.is-disabled,
.ed-button-primary.is-disabled:active,
.ed-button-primary.is-disabled:focus,
.ed-button-primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.ed-button-success.is-disabled,
.ed-button-success.is-disabled:active,
.ed-button-success.is-disabled:focus,
.ed-button-success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.ed-button-info.is-disabled,
.ed-button-info.is-disabled:active,
.ed-button-info.is-disabled:focus,
.ed-button-info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.ed-button-warning.is-disabled,
.ed-button-warning.is-disabled:active,
.ed-button-warning.is-disabled:focus,
.ed-button-warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.ed-button-danger.is-disabled,
.ed-button-danger.is-disabled:active,
.ed-button-danger.is-disabled:focus,
.ed-button-danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.ed-button-primary.is-loading,
.ed-button-primary.is-loading:active,
.ed-button-primary.is-loading:focus,
.ed-button-primary.is-loading:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
  pointer-events: none;
  .ed-icon {
    color: #fff;
    animation: rotating 2s linear infinite;
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>