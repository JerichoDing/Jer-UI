<template>
  <div class="table-wraper" ref="wrapper">
    <div :style="{height:height+'px',overflow:'auto'}" ref="tableWrapper">
      <table class="gulu-table" ref="table" :class="{borderd,compact,striped}">
        <thead>
          <tr>
            <th v-if="expandFiled" :style="{width:'50px'}"></th>
            <th :style="{width:'50px'}"  v-if="checkable">
              <input  type="checkbox" :checked="areAllChecked" @change="onchangeAllItems" ref="allChecked">
            </th>
            <th  :style="{width:'50px'}"  v-if="visibleId">#</th>
            <th  :style="{width: column.width+'px'}" v-for="column in columns" :key="column.field" >
              <div class="gulu-table-header">
                {{column.text}}
                <span class="gulu-table-sorter" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
                  <g-icon name="asc" :class="{active:orderBy[column.field]==='asc'}"></g-icon>
                  <g-icon name="dsc" :class="{active:orderBy[column.field]==='dsc'}"></g-icon>
                </span>
              </div>
            </th>
            <th ref="actionsHeader" :style="{width:'100px'}" v-if="$scopedSlots.default">操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in dataSource">
            <tr :key="item.id">
              <td :style="{width:'50px'}" class="gulu-table-center" v-if="expandFiled">
                <g-icon
                class="gulu-table-expandIcon"
                name="right"
                @click="expandItem(item.id)"
                v-if="!inExpandedIds(item.id)"
                ></g-icon>
                <g-icon
                class="gulu-table-expandIcon"
                name="down"
                @click="expandItem(item.id)"
                v-if="inExpandedIds(item.id)"
                ></g-icon>
              </td>
              <td :style="{width:'50px'}"  v-if="checkable">
               <input type="checkbox" @change="onChangeItem(item,$event)" :checked="isChecked(item)">
              </td>
              <td  :style="{width:'50px'}"  v-if="visibleId">{{item.id}}</td>
              <td  :style="{width:column.width+'px'}"  v-for="column in columns" :key="column.field">
                {{item[column.field]}}
              </td>
              <td v-if="$scopedSlots.default" >
               <div ref="actions" style="display:inline-block">
                  <slot :item="item"></slot>
               </div>
              </td>
            </tr>
            <tr :key="`${item.id}-center`" v-if="inExpandedIds(item.id)">
              <td :colspan="columns.length + expandCellColspan">
                {{item[expandFiled] || '空'}}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div v-if="!loading" class="gulu-table-loading">
      <g-icon name='reload'></g-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuluTable',
    props: {
      expandFiled:{
        type:String,
      },
      checkable:{
        type:Boolean,
        default:false,
      },
      height: {
        type: Number
      },
      loading: {
        type: Boolean,
        default: false
      },
      orderBy: {
        type: Object,
        default: () => {},
        // validator(value){  //vue 难以根据一个属性验证另一个属性的合法性
        // }
      },
      striped: {
        type: Boolean,
        default: true,
      },
      compact: {
        type: Boolean,
        default: false,
      },
      borderd: {
        type: Boolean,
        default: false,
      },
      selectedItems: {
        type: Array,
        default: () => [], //要用函数返回数组
      },
      dataSource: {
        type: Array,
        required: true,
        validator(value) {
          return value.filter(item => item.id === undefined).length <= 0
        }
      },
      columns: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        visibleId: false,
        expandedIds:[],
      };
    },
    computed: {
      areAllChecked() {
        const a = this.dataSource.map(item => item.id).sort()
        const b = this.selectedItems.map(item => item.id).sort()
        if (a.length !== b.length) {
          return false
        }
        let equal = true
        for (let i = 0; i < a.length; i++)
          if (a[i] !== b[i]) {
            equal = false
            break
          }
        return equal
      },
      expandCellColspan(){
        let result = 0
        if(this.checkable){ result+=1 }
        if(this.expandFiled){ result+=1 }
        return result
      },
    },
    created() {},
    mounted() {
      let table2 = this.$refs.table.cloneNode(false) //深度复制DOM,但是事件不会过来，所以浅拷贝
      let thead = this.$refs.table.children[0]
      table2.classList.add('gulu-table-tableCopy')
      let {height} = thead.getBoundingClientRect()
      this.table2 = table2
      this.table2.appendChild(thead)
      this.$refs.tableWrapper.style.marginTop= height+'px'
      this.$refs.tableWrapper.style.height = this.height - height +'px'
      this.$refs.wrapper.appendChild(this.table2)

      this.height && table2.classList.add('gulu-table-Scroll')

      if(this.$scopedSlots.default){
        let div = this.$refs.actions[0]
        let {width} = div.getBoundingClientRect()
        let parent = div.parentNode
        let style = getComputedStyle(parent)
        let paddingWidth = style.getPropertyValue('padding-right')
        let borderWidth = style.getPropertyValue('border-right-width')
        let width2 = width + parseInt(paddingWidth)*2+parseInt(borderWidth)*2+'px'
        this.$refs.actionsHeader.style.width = width2
        this.$refs.actions.map(div=>{
          div.parentNode.style.width = width2
        })

      }
    },
    beforeDestroy () {
      this.table2.remove()
    },
    watch: {
      selectedItems: {
        handler: function () {
          if (this.selectedItems.length === this.dataSource.length) {
            this.$refs.allChecked.indeterminate = false
          } else if (this.selectedItems.length === 0) {
            this.$refs.allChecked.indeterminate = false
          } else {
            this.$refs.allChecked.indeterminate = true
          }
        },
        deep: true
      }
    },
    methods: {
      inExpandedIds(id){
        return this.expandedIds.indexOf(id)>=0
      },
      expandItem(id){
        if(!this.inExpandedIds(id)){
          this.expandedIds.push(id)
        }else{
         this.expandedIds.splice(this.expandedIds.indexOf(id),1)
        }

      },
      // 给定宽度 --废弃
      // updateHeaderWidth(){
      //   let table2 = this.table2
      //   let tableHeader =  Array.from(this.$refs.table.children).filter(node=>node.tagName.toLowerCase()==='thead')[0]
      //   let tableHeader2
      //   // Array.from(table2.children).map(node => {
      //   //   if (node.tagName.toLowerCase() !== 'thead') {
      //   //     node.remove()
      //   //   }else{
      //   //     tableHeader2 = node
      //   //   }
      //   // })
      //   Array.from(tableHeader.children[0].children).map((th,i)=>{
      //     const { width } = th.getBoundingClientRect()
      //     tableHeader2.children[0].children[i].style.width = width-2+'px'
      //   })
      // },
      changeOrderBy(key) {
        let copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        Object.keys(copy).filter(item => {
          if (item !== key) {
            copy[item] = true
          }
        })
        if (oldValue === "asc") {
          copy[key] = 'dsc'
        } else if (oldValue === "dsc") {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      isChecked(item) {
        return this.selectedItems.filter((i) => i.id === item.id).length > 0
      },
      onChangeItem(item, e) {
        let selected = e.target.checked //改用单项数据流
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          //  console.log(11,copy.filter(i=> i.id !== item.id))
          copy = copy.filter(i => i.id !== item.id) // 必须用id查找
        }
        this.$emit('update:selectedItems', copy)
        //  this.$emit('changeItem',{selected:e.target.checked,item,id})
      },
      onchangeAllItems(e) {
        let selected = e.target.checked //改用单项数据流
        this.$emit('update:selectedItems', selected ? this.dataSource : [])
      }
    },
  };
</script>

<style scoped lang="scss">
  @import "@assets/_var.scss";
  .table-wraper { position: relative; overflow: auto;
    .gulu-table { width: 100%; border-collapse: collapse; border-spacing: 0; border-bottom: 1px solid darken($grey, 10%); td,th { border-bottom: 1px solid darken($grey, 60%); text-align: left; padding: 8px; } &.borderd { border: 1px solid darken($grey, 10%);
        td,th { border: 1px solid darken($grey, 10%); } }
      &.compact { td, th { padding: 4px; } }
      &.striped { tbody { >tr { &:nth-child(odd) { background-color: lighten($grey, 1%); }
        &:nth-child(even) { background-color: #fff; } } } }
      &-header { display: flex; user-select: none; }
      &-sorter { display: inline-flex; flex-direction: column; margin: 2px 5px 0; cursor: pointer; svg { width: 10px; height: 10px; fill: darken($grey, 60%); &.active { fill: #0094ff; } } }
      &-center{ text-align: center!important; }
      &-expandIcon{ width: 10px; height: 10px; }
      &-loading { position: absolute; background-color: rgba(255, 255, 255, .6); top: 0; left: 0;
      width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;
      svg { animation: spin 1s infinite linear; width: 80px; height: 80px; fill: darken($grey, 60%); } }
      &-tableCopy { position: absolute; top: 0; left: 0; width: 100%; background-color: #fff; }
    }
    .gulu-table-Scroll{
      width: calc( 100% - 1em );
    }
  }
</style>
