import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ReactDOMServer from 'react-dom/server';

const S = ReactDOMServer.renderToString(<App />)
const SS = ReactDOMServer.renderToStaticMarkup(<App />)
console.log(S)
console.log(SS)

ReactDOM.render(<App />, document.getElementById('app'));