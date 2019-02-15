<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluFooter"
  }
</script>

<style scoped lang="scss">
  .footer{
    border: 1px solid red;
    min-height: 50px;
    background-color: #CCC;
  }
</style>
