import React, { Component } from 'react';
import Vue, { observer } from 'react-vue';
import Vuex from 'vuex';

/**
 * Execute the following code to avoid Vuex restrictions
 */
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++
  }
})

@observer
export default class App extends Component {
  render () {
    return (
      <h1 onClick={() => store.commit('increment')}>Vuex click {store.state.count} times</h1>
    )
  }
}