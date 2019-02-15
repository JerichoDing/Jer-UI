<template>
  <!--<div style="width:90%;">-->
    <!--<div>-->
      <!--<h2>g-icon && g-button </h2>-->
      <!--<br>-->
      <!--<g-button icon="search" :content="false"></g-button>-->
      <!--<g-button :loading="true">按钮</g-button>-->
      <!--<g-button icon="setting">按钮</g-button>-->
      <!--<g-button>按钮</g-button>-->
      <!--<g-button icon-position="left" icon="setting">按钮</g-button>-->
      <!--<g-button icon-position="right" icon="setting">按钮</g-button>-->
      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->


    <!--<div>-->
      <!--<h2>g-input</h2>-->
      <!--<br>-->
      <!--<g-input value="张三"></g-input>-->
      <!--<g-input value="李四" disabled></g-input>-->
      <!--<g-input value="王五" readonly></g-input>-->
      <!--<g-input value="王五" error="名字要不少于3个"></g-input>-->
      <!--<g-input value="王测试事件" @change="inputChange"></g-input>-->
      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->


    <!--<div>-->
      <!--<h2>Grid</h2>-->
      <!--<g-row>-->
        <!--<g-col class="demo" span="24" :ipad="{span:12}" :pc="{span:9}">-->
        <!--</g-col>-->
        <!--<g-col class="demo" span="24" :ipad="{span:12}"-->
          <!--:pc="{span:9,offset:6}">-->
        <!--</g-col>-->
      <!--</g-row>-->

        <!--&lt;!&ndash;<g-row :gutter="20">&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="8">8</g-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="8">8</g-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="8">8</g-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</g-row>&ndash;&gt;-->

        <!--&lt;!&ndash;<g-row :gutter="20">&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="6">6</g-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="6">6</g-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="6">6</g-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="6">6</g-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</g-row>&ndash;&gt;-->

        <!--&lt;!&ndash;<g-row :gutter="20">&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="2">2</g-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="20" offset="2">20</g-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</g-row>&ndash;&gt;-->
         <!--&lt;!&ndash;<g-row>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="10">2</g-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<g-col :span="10" offset="4">20</g-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</g-row>&ndash;&gt;-->
      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->
    <!---->
    <!--<div>-->
      <!--<h2>Layout</h2>-->
        <!--<g-layout height="100vh">-->
          <!--<g-sider class="l-demo" style="width: 200px">sider</g-sider>-->
          <!--<g-layout>-->
            <!--<g-header class="l-demo">header</g-header>-->
            <!--<g-content class="l-demo">content</g-content>-->
            <!--<g-footer class="l-demo">footer</g-footer>-->
          <!--</g-layout>-->
        <!--</g-layout>-->

      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->

    <!--<div>-->
      <!--<h2>popover</h2>-->
      <!--<h4>Click</h4>-->
      <!--<g-popover>-->
        <!--<template slot="content" slot-scope="{close,jericho}">-->
          <!--<div>popover 内容-->

            <!--<g-button @click="close">Close{{ jericho }}</g-button>-->
          <!--</div>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<g-popover position="bottom">-->
        <!--<template slot="content">-->
          <!--<div>popover 内容</div>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<g-popover position="left">-->
        <!--<template slot="content">-->
          <!--<div>popover 内容</div>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<g-popover position="right">-->
        <!--<template slot="content">-->
          <!--<div>popover 内容</div>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<h4>Hover</h4>-->
      <!--<g-popover position="top" trigger="hover">-->
        <!--<template slot="content" slot-scope="{close,jericho}">-->
          <!--<div>popover 内容-->
          <!--</div>-->
          <!--<g-button @click="close">Close{{ jericho }}</g-button>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<g-popover position="bottom" trigger="hover">-->
        <!--<template slot="content">-->
          <!--<div>popover 内容</div>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<g-popover position="left" trigger="hover">-->
        <!--<template slot="content">-->
          <!--<div>popover 内容</div>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<g-popover position="right" trigger="hover">-->
        <!--<template slot="content">-->
          <!--<div>popover 内容</div>-->
        <!--</template>-->
        <!--<g-button>点我</g-button>-->
      <!--</g-popover>-->
      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->

    <!--<div>-->
      <!--<h2></h2>-->
      <!--<h2>Collapse</h2>-->
      <!--<br>-->
      <!--<g-collapse :selected.sync=selectedArr single>-->
        <!--<g-collapse-item title="标题1" name="1"> 11111内容1</g-collapse-item>-->
        <!--<g-collapse-item title="标题2" name="2"> 22222内容2</g-collapse-item>-->
        <!--<g-collapse-item title="标题3" name="3"> 33333内容3 </g-collapse-item>-->
      <!--</g-collapse>-->
      <!--<br>-->
      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->



    <!--<div>-->
      <!--<h2></h2>-->

      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->

    <!--<div>-->
      <!--<h2></h2>-->

      <!--<br>-->
      <!--<br>-->
      <!--<hr>-->
    <!--</div>-->



  <!--</div>-->
  <div style="width: 800px;margin:100px;">
    <!-- <g-cascader
    :source.sync="source"
    popover-height="200px"
    :selected.sync="selected"
    :load-data="loadData"
    ></g-cascader> -->

    <g-pager :total-page="10" :current-page.sync=currentPage ></g-pager>
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
