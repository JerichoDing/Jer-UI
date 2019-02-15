<template>
		<button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
      <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
      <g-icon v-if="loading" name="reload" class="icon loading"></g-icon>
			<div class="content-1" v-if="content" ref="content"><slot></slot></div>
		</button>
</template>

<script>
import Icon from './icon'
export default {
  name: "GButton",
  components: {
      'g-icon': Icon
  },
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function(value) {
        return value === "left" || value === "right";
      }
    }
  },
  data(){
      return {
        content:true
      }
    },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.content = this.$refs.content.innerHTML ? true : false;
      }, 0);
    });
  }
};
</script>

<style lang="scss">
@import '../../assets/var';
.g-button {
  font-size: $font-size;
  height: $input-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background-color: $button-bg;

  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: $button-active-bg;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
  }
  > .content-1 {
    order: 2;
    margin-left: 0.3em;
  }
  &.icon-right {
    > .icon {
      order: 2;
    }
    > .content-1 {
      order: 1;
      margin-right: 0.3em;
      margin-left: 0;
    }
  }
  > .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
