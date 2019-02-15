<template>
  <div class="popover" ref="popover"> 
    <div class="content-wrapper" ref="contentWrapper" v-if="visible"
    :class="{[`position-${position}`]:true}">
      <slot name="content" :close="close" :jericho = "trigger"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    },
    trigger:{
      type:String,
      default:'click',
      validator(value){
        return ['click','hover'].indexOf(value) >= 0
      }
    },
  },
  data() {
    return {
      visible: false,
      // openEvent:'',
      // closeEvent:'',//有computed中声明之后  不需要在data里声明
    };
  },
  computed:{
    openEvent(){
      if(this.trigger==='click'){
        return 'click'
      }else{
        return 'mouseenter'
      }
    },
    closeEvent(){
      if(this.trigger==='click'){
        return 'click'
      }else{
        return 'mouseleave'
      }
    },
  },
  mounted() {
    if(this.trigger==='click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    }else{
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  destroyed () {
    if(this.trigger==='click'){
      this.$refs.popover.removeEventListener('click',this.onClick)
    }else{
      this.$refs.popover.removeEventListener('mouseenter',this.open)
        this.$refs.popover.removeEventListener('mouseleave',this.close)
    }
  },
  methods: {
    positionPop() {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper);
      let {width,height,left,top} = triggerWrapper.getBoundingClientRect();
      let {height:height2} = contentWrapper.getBoundingClientRect() // 注意用法
      let positions = {
        top:{left:left + window.scrollX,top:top + window.scrollY},
        bottom:{left:left + window.scrollX,top:top + height + window.scrollY},
        left:{left:left + window.scrollX,top:top + window.scrollY - (height2 - height) / 2},
        right:{left:left + width + window.scrollX,top:top + window.scrollY - (height2 - height) / 2}
      }
      contentWrapper.style.left = positions[this.position].left + "px"
      contentWrapper.style.top = positions[this.position].top+ "px"
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {return;}
      if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) { return }
        this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionPop();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
      this.visible ? this.close() : this.open()
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  border: 1px solid #000;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: #fff;
  border-radius: 4px;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,&::after{
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top{
    transform: translateY(-100%);
    margin-top: -13px;
    &::before,&::after{
    left: 10px;
    }
    &::before{
      border-bottom: none;
      border-top-color: #000;
      top: 100%;
    }
    &::after{
      border-bottom: none;
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom{
    margin-top: 18px;
    &::before,&::after{
    left: 10px;
    }
    &::before{
      border-top: none;
      border-bottom-color: #000;
      bottom: 100%;
    }
    &::after{
      border-top: none;
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left{
    transform: translateX(-100%);
    margin-left: -13px;
    &::before,&::after{
    left: 10px;
    }
    &::before{
      border-right: none;
      border-left-color: #000;
      left: 100%;
    }
    &::after{
      border-right: none;
      border-left-color: #fff;
      left: calc(100% - 1px);
      transform: translateY(calc(-100% - 1px));
    }
  }
  &.position-right{
    margin-left: 13px;
    &::before,&::after{
    right: 10px;
    }
    &::before{
      border-left: none;
      border-right-color: #000;
      right: 100%;
    }
    &::after{
      border-left: none;
      border-right-color: #fff;
      right: calc(100% - 1px);
      transform: translateY(calc(-100% - 1px));
    }
  }
}
</style>
