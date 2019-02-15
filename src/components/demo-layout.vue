<template>
  <div>
    <h2>Grid</h2>
    <g-row>
      <g-col class="demo" span="24" :ipad="{span:12}" :pc="{span:9}"></g-col>
      <g-col class="demo" span="24" :ipad="{span:12}" :pc="{span:9,offset:6}"></g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="8">8</g-col>
      <g-col :span="8">8</g-col>
      <g-col :span="8">8</g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="6">6</g-col>
      <g-col :span="6">6</g-col>
      <g-col :span="6">6</g-col>
      <g-col :span="6">6</g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="2">2</g-col>
      <g-col :span="20" offset="2">20</g-col>
    </g-row>
    <g-row>
      <g-col :span="10">2</g-col>
      <g-col :span="10" offset="4">20</g-col>
    </g-row>
    <br>
    <br>
    <hr>
    <div>
      <h2>Layout</h2>
      <g-layout height="100vh">
        <g-sider class="l-demo" style="width: 200px">sider</g-sider>
        <g-layout>
          <g-header class="l-demo">header</g-header>
          <g-content class="l-demo">content</g-content>
          <g-footer class="l-demo">footer</g-footer>
        </g-layout>
      </g-layout>
      <br>
      <br>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
    };
  },
  methods: {

  },
  created() {

  }
};
</script>

<style scoped lang="scss">
.demo {
  background-color: #ddd;
}

</style>
