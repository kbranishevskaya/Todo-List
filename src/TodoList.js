import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		if (this._inputEl !== "") {
			var newItem = {
				text: this._inputEl.value,
				key: Date.now()
			};
		this.setState((prevState) => {
			return {
				items: prevState.items.concat(newItem)
			};
		});
		}

		this._inputEl.value = "";
		e.preventDefault();
	}

	deleteItem(key) {
		var filtered = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		this.setState({ items: filtered});
	}

	render() {
		return(
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input type="text" 
								placeholder="enter task"
								ref={(a) => this._inputEl = a}/>
						<button type="submit">add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} 
							delete={this.deleteItem} />
			</div>
		);
	}
}
export default TodoList;