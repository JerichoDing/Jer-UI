<template>
    <svg class="g-icon" @click="$emit('click',$event)">
      <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import '../../assets/svg.js'
  export default {
    name: "GIcon",
    props:['name']
  }
</script>
<style scoped>
	.g-icon {width: 1em;height: 1em;}
</style>
