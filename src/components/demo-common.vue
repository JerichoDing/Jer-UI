<template>
  <div style="width:90%;">
    <div>
      <h2>g-icon && g-button </h2>
      <br>
      <g-button icon="search" :content="false"></g-button>
      <g-button :loading="true">按钮</g-button>
      <g-button icon="setting">按钮</g-button>
      <g-button>按钮</g-button>
      <g-button icon-position="left" icon="setting">按钮</g-button>
      <g-button icon-position="right" icon="setting">按钮</g-button>
      <br>
      <br>
      <hr>
    </div>

    <div>
      <h2>g-input</h2>
      <br>
      <g-input value="张三"></g-input>
      <g-input value="李四" disabled></g-input>
      <g-input value="王五" readonly></g-input>
      <g-input value="王五" error="名字要不少于3个"></g-input>
      <g-input value="王测试事件" @change="inputChange"></g-input>
      <br>
      <br>
      <hr>
    </div>
 </div>


</template>

<script>
  import db from "assets/db";

  function ajax (parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        result.forEach(node => {
          if (db.filter(item => item.parent_id === node.id).length > 0) {
            node.isLeaf = false
          }else{
            node.isLeaf = true
          }
        })
        success(result)
      }, 300)
    })
  }

export default {
    name: "Demo",
    data() {
      return {
        selectedArr: ["2", "3"],
        source: [],
        selected:[],
        currentPage:3,
      };
    },
    methods: {
      loadData ({id}, updateSource) {
        ajax(id).then(result => {
          // console.log(result)
          updateSource(result) // 回调:把别人传给我的函数调用一下
        })
      },
    },
    created () {
      ajax(0).then(result => {
        // console.log(result)
        this.source = result
      })
    },
  };

</script>

<style scoped lang="scss">
  .demo{
    background-color: #ddd;
  }
  .l-demo{
    border: 1px solid #000;
    min-height: 50px;
    background-color: #CCC;
  }
</style>
