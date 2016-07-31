import AwesomeClass from './subf/awesome';

var a = require('./subf/test');
console.log("asdsd", a(500));


import multiply from './multiply';
console.log(multiply(2, 3)); // => 2 * 3 = 6

let b = new AwesomeClass("hoox");
b.callIt();

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('app')
);