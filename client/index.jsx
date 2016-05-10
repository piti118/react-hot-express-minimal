import 'babel-polyfill';
import 'whatwg-fetch';
import Hello from './hello.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Hello />, document.getElementById('hello'));
