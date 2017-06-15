<template>
  <span>{{count}}</span>
</template>

<script>
import store from './store';

export default {
  computed: {
    count () {
      return store.state.count
    }
  }
};
</script>
