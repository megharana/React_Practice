// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')

var ToDoComponent = createReactClass({
	render:function(){
		return(
			<div>
				<h1>Megha</h1>
				<p>{this.props.mssg}</p>
				<p><strong>{this.props.cheese.name}</strong></p>
			</div>
		);
	}
});
var myCheese = {name:'Sandwich',smellFatcor:'Extreme pong',price:'3.50'};
ReactDOM.render(<ToDoComponent mssg="I love Megha" cheese={myCheese}/>,document.getElementById('todo-wrapper'));