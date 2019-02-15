<template>
	<div class="header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluHeader"
  }
</script>

<style scoped lang="scss">
  .header{
    border: 1px solid red;
    min-height: 50px;
    background-color: #CCC;
  }
</style>
