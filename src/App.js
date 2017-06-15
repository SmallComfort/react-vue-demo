import React, { Component } from 'react';

import StartDemo from './StartDemo';
import StartVuexDemo from './StartDemo/vuex.js';
import VueDemo from './VueDemo';
import VuexDemo from './VuexDemo';

export default class App extends Component {
  render () {
    return (
      <div>
        <StartDemo />
        <StartVuexDemo />
        <VueDemo />
        <VuexDemo />
      </div>
    )
  }
}