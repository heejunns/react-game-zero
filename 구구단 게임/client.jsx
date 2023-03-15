const React = require('react'); // react 와 reactdom 을 불러온다. 노드의 모듈 시스템을 이용
const ReactDom = require('react-dom');
const GuGuDan = require('./GuGuDan');
ReactDom.render(<GuGuDan />, document.querySelector('#root'));
