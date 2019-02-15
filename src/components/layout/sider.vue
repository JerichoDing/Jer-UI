<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible = !visible">close</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "GuluSider",
    data(){
      return{
        visible:true,
      }
    },
  }
</script>

<style scoped lang="scss">
  .sider{
    position: relative;
    > button{
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .5s;
  }
  .fade-enter-active, .fade-leave-to{
    margin-left: -200px;
  }
</style>
