import React, { Component } from 'react';

import Result from './Result';
import Counter from './Counter';

export default class VuexDemo extends Component {
  render () {
    return (
      <h1>
        <Result />
        <Counter />
      </h1>
    );
  }
}
