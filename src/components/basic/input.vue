<template>
	<div class="wrapper" :class="{error}">
		<input :value="value" type="text" :disabled="disabled" :readonly="readonly"
      @change="$emit('change',$event.target.value,'参数1')"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    >
		<template v-if="error">
			<g-icon name="error" class="icon-red"></g-icon>
			<span class="icon-message">{{error}}</span>
		</template>
	</div>
</template>

<script>
	// import Icon from 'icon'
  export default {
	  // components:{Icon},
    name: "GInput",
	  props:{
      value:{
        type:String,
      },
		  disabled:{
        type:Boolean,
			  default:false
		  },
      readonly:{
        type:Boolean,
			  default:false
		  },
		  error:{
        type:String
		  },
	  }
  }
</script>

<style scoped lang="scss">
@import '../../assets/var';
	.wrapper{
		display: inline-flex;
		align-items: center;
		font-size: $font-size;
		> :not(:last-child){margin-right: .5em;}
		> input{height: $input-height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
			&:hover{border-color: $border-color-hover;}
			&:focus{box-shadow: inset 0 1px 3px $box-shadow-focus;outline: none;}
			&[disabled],&[readonly]{border-color: #ccc;color: #bbb;cursor: not-allowed;user-select: none;}
		}
		&.error{ > input{border-color: $red;}
			.icon-red{fill:$red;}
			.icon-message{color:$red;}
		}
	}

</style>



