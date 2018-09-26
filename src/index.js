// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')

var ToDoComponent = createReactClass({
	getInitialState:function(){
		return{
			todos:['wash up','eat some cheese','take a nap']
		}
	},
	render:function(){
		var todos = this.state.todos;
		todos = todos.map(function(item,index){
			return(
				
					<ToDoItem item={item} key={index}/>
				
			);
		});
		
		return(
			<div id="todo-list">
				<h1>Megha</h1>
				
				

				<ul>{todos}</ul>
			</div>

		);
	} 
}); 

//create ToDoItem 

var ToDoItem = createReactClass({
	render:function(){
		return(
			<li>
				<div className = "todo-item">
					<span className="item-name">this.props.item</span>
				</div>
			</li>
		);
	}
});
var myCheese = {name:'Sandwich',smellFatcor:'Extreme pong',price:'3.50'};
ReactDOM.render(<ToDoComponent mssg="I love Megha" cheese={myCheese}/>,document.getElementById('todo-wrapper'));