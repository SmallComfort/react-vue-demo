import React, { Component } from 'react';
import Vue, { observer } from 'react-vue';

const store = new Vue({
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increase () {
      this.count ++;
    }
  }
});


@observer
export default class App extends Component {
  render () {
    return (
      <h1 onClick={store.increase}>click {store.count} times</h1>
    )
  }
}