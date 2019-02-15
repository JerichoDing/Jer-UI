<template>
    <div>
      <div style="margin:20px;">
        <g-table
        :data-source="dataSource"
        :columns="columns"
        :selected-items.sync="selected"
        borderd
        :order-by.sync="orderBy"
        @update:orderBy="sortEvent"
        :loading="!loading"
        :height="400"
        expand-filed="description"
        checkable
        >
        <template slot-scope="xxx">
          <button @click="edit(xxx.item)">编辑</button>
          <button @click="view(xxx.item)">查看</button>
        </template>
        </g-table>
      </div>
       <div style="margin:20px;">
        <g-pager :total-page="totalPage" :current-page.sync="currentPage"></g-pager>
      </div>


    </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      selected:[],
      totalPage:10,
      currentPage:1,
      loading:false,
      // description:'',
      columns:[
        {text:'姓名',field:'name',width:100},  //给宽度 最后一列不能给宽度
        {text:'分数',field:'score'},
      ],
      orderBy:{  // 只接收以下参数：true-开启排序，asc-升序， dsc-降序
        name:true,
        score:"dsc"
      },
      dataSource:[
        {id:1,name:'方方',score:100,description:'你好，这是说明文字1'},
        {id:2,name:'圆圆',score:85},
        {id:3,name:'正正',score:75,description:'你好，这是说明文字2'},
        {id:4,name:'呵呵',score:92},
        {id:5,name:'方方',score:100},
        {id:6,name:'圆圆',score:85},
        {id:7,name:'正正',score:75},
        {id:8,name:'呵呵',score:92},
        {id:9,name:'方方',score:100},
        {id:10,name:'圆圆',score:85},
        {id:11,name:'正正',score:75},
        {id:12,name:'呵呵',score:92},
        {id:13,name:'方方',score:100},
        {id:14,name:'圆圆',score:85},
        {id:15,name:'正正',score:75},
        {id:16,name:'呵呵',score:92},
        {id:17,name:'方方',score:100},
        {id:18,name:'圆圆',score:85},
        {id:19,name:'正正',score:75},
        {id:20,name:'呵呵',score:92},
        {id:21,name:'方方',score:100},
        {id:22,name:'圆圆',score:85},
        {id:23,name:'正正',score:75},
        {id:24,name:'呵呵',score:92},
      ]
    }
  },
  ceated() {},
  munted() {},
  watch: {},
  methods: {
    edit(item){
      this.$toast('编辑','middle')
    },
    view(item){
      alert(`开始查看${item.id}`)
    },
  //  xxx(obj){
  //   let {selected,id,item} = obj
  //    console.log(111,item)
  //    if(selected){
  //      this.selected.push(item)
  //   }else{
  //   let index  = this.selected.indexOf[item]
  //    this.selected.splice(index,1)
  //  }
  // },
  sortEvent(e){
    this.loading=true
      setTimeout(() => {
          this.loading = false
      },1000);
      // console.log(11,e)
      // console.log("请求到后端排序后的数据",this.orderBy.name,this.orderBy.score)
    }
  },
};
</script>

<style scoped lang="scss">

</style>
