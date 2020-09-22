<template>
  <child :str="myNum" :num="true"></child>
</template>

<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  props: {
    myStr: String,
    myNum: Number
  }
}
</script>
