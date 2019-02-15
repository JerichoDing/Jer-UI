<template>
  <div id="app">
    <demo />
  </div>
</template>

<script>
import Demo from './components/demo'

export default {
  name: 'App',
  components: {
    Demo
  }
}
</script>

<style>
  *,:after,:before{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
