<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid red;height: 80px;" >
          <slot></slot>
        </div>
    </div>
</template>

<script>
  let  validator = (value)=>{
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key=>{
      if(!['span','offset'].includes(key)){
        valid = false
      }
    })
    return valid
  }
export default {
  name:'GuluCol',
    props: {
      span:{type:[Number,String],},
      offset:{type:[Number,String],},
      ipad:{type:Object, validator,},
      narrowPc:{type:Object, validator,},
      pc:{type:Object, validator,},
      widePc:{type:Object, validator,},
    },
    data(){
      return{
        gutter:0,
      }
    },
    computed:{
      colClass(){
        let {span,offset,ipad,narrowPc,pc,widePc} = this
        let createClasses = this.createClass
        return [
          ...createClasses({span, offset}),
          ...createClasses(ipad,'ipad-'),
          ...createClasses(narrowPc,'narrow-pc-'),
          ...createClasses(pc,'pc-'),
          ...createClasses(widePc,'wide-pc-'),

          // span &&`col-${span}`,
          // offset && `offset-${offset}`,
          //   ...(ipad ? [ipad.span && `col-ipad-${ipad.span}`,ipad.offset && `offset-ipad-${ipad.offset}`] : []),
          //   ...(narrowPc ? [narrowPc.span && `col-narrow-pc-${narrowPc.span}`,narrowPc.offset && `offset-narrow-pc-${narrowPc.offset}`] : []),
          //   ...(pc ? [pc.span && `col-pc-${pc.span}`,pc.offset && `offset-pc-${pc.offset}`] : []),
          //   ...(widePc ? [widePc.span && `col-wide--${widePc.span}`,widePc.offset && `offset-wide-pc-${widePc.offset}`] : []),
        ]
      },
      colStyle(){
        let {gutter} = this
        return {paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px',}
      },
    },
    methods:{
      createClass(obj,str = ""){
        if (!obj){return []}
        let array = []
        obj.span && array.push(`col-${str}${obj.span}`)
        obj.offset && array.push(`offset-${str}${obj.offset}`)
        return array
      },

    },

};
</script>

<style scoped lang="scss">

  .col{   // 默认手机样式
    $class-prefix : col-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix : offset-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        margin-left: ($n / 24) * 100%;
      }
    }
    @media (min-width: 768px) { // ipad >=768
      $class-prefix : col-ipad-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix : offset-ipad-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 992px) { // narrow-pc >=992
      $class-prefix : col-narrow-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix : offset-narrow-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1200px) { // pc >=1200
      $class-prefix : col-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix : offset-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1600px) { // wide-pc >=1600
      $class-prefix : col-wide-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix : offset-wide-pc-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }

</style>
