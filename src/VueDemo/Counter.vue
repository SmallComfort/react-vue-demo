<template>
  <h1 @click="count++">
    <result>{{count}}</result>
    <slot></slot>
  </h1>
</template>

<script>
  import Result from './Result';

  export default {
    components: { Result },
    props: {
      test: {
        type: String
      }
    },
    data () {
      return {
        count: 0
      }
    },
    created () {
      console.log(this)
    }
  }
</script>