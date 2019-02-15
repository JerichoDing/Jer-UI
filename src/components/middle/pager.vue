<template>
  <div class="gulu-pager" :class="{hide:hideIfOnePage===true && totalPage<=1}">
    <!-- 第二次 -->
     <div
      class="gulu-pager-item nav"
      @click="onClickPage(currentPage-1)"
      :class="{disabled:currentPage===1}"
      ><g-icon name="left"></g-icon>
    </div>
    <div v-for="(page,key) in pages" :key="key">
      <template v-if="page== currentPage">
        <span class="gulu-pager-item active">{{page}}</span>
      </template>
      <template v-else-if="page== '···'">
        <!-- <span class="gulu-pager-item separetor">{{page}}</span> -->
        <g-icon class="gulu-pager-item separetor" name="ellipsis"></g-icon>
      </template>
      <template v-else>
        <span class="gulu-pager-item" @click="onClickPage(page)">{{page}}</span>
      </template>
    </div>
    <div
        class="gulu-pager-item nav"
        @click="onClickPage(currentPage+1)"
        :class="{disabled:currentPage===totalPage}">
        <g-icon name="right"></g-icon>
      </div>

    <!-- 第一次 -->
    <!-- <span
        :class="{active: page === currentPage,separetor:page==='···'}"
        class="gulu-pager-item"
      >{{page}}
      </span> -->
  </div>
</template>

<script>
export default {
  name: "GuluPager",
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      require: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    pages() {  //更新依赖的变量
      let p = [ 1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, this.currentPage + 1, this.currentPage + 2 ].filter(n => n >= 1 && n <= this.totalPage);//过滤掉-1和大于totalPage
      let p1 = unique(p.sort((a, b) => a - b)); //排序
      let pages = p1.reduce((prev, current, index) => {
        //在相邻差值大于1中间加入 ···
        prev.push(current);
        p1[index + 1] !== undefined &&
          p1[index + 1] - p1[index] > 1 &&
          prev.push("···");
        return prev;
      }, []); // [] 表示初始的prev
      return pages
    }
  },
  mounted() {
    // console.log(this.pages)
  },
  methods: {
    onClickPage(num){
      if(num>=1&&num<=this.totalPage){
        this.$emit('update:currentPage',num)
      }
    }
  }
};

function unique(array) {
  // return [...new Set(array)]  //兼容性不佳 ie11不支持
  const object = {};
  array.map(number => {
    object[number] = true;
  });

  // console.log(111,object)
  /**
   * object :{
   *  "1":true,
   *  "2":true,
   *  "3":true,
   *  "4":true,
   *  "5":true,
   *  ...key值只能是 String 类型
   * }
   */

  return Object.keys(object).map(key => {
    return parseInt(key, 10); // 10表示10进制
  });
}
</script>

<style scoped lang="scss">
@import "@assets/_var.scss";

.gulu-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  $width: 20px;
  $height: 20px;

  &-item {
    border: 1px solid #999;
    border-radius: $border-radius;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    min-width: $width;
    height: $height;
    margin: 0 4px;
    padding: 2px;
    user-select: none;
    cursor: pointer;
  }

  & .active,
  & :hover {
    border-color: $blue;
  }

  & .active {
    cursor: default;
  }

  & .separetor {
    border: none;
  }

  & .nav {
    width: $width;
    height: $height;
  }

  & .disabled {
    background-color: darken($grey, 10%);
    cursor: not-allowed;
  }
}
.hide{
  display: none;
}
</style>
