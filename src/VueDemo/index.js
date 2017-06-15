import React, { Component } from 'react';
import Counter from './Counter';

export default class VueDemo extends Component {
  render() {
    return <Counter test="888">Hello Vue</Counter>;
  }
}