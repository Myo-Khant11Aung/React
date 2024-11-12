import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: "",
    };
  }

  onChange = (tempValue) => {
    this.setState({ value: tempValue.target.value });
  };

  onAddTask = (tempValue) => {
    tempValue.preventDefault();

    const obj = {
      name: this.state.value,
      id: Date.now(),
    };

    if (this.state.value !== "") {
      this.setState({ tasks: this.state.tasks.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      tasks: [...this.state.tasks].filter((id) => id.id !== itemId),
    });
  };

  render() {
    const tempList = this.state.tasks.map((task) => (
      <li>
        {task.name}
        <button onClick={() => this.onDeleteTask(task.id)}>Remove</button>
      </li>
    ));

    return (
      <div>
        <div>
          <input
            placeholder="Type your task"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button onClick={this.onAddTask}>Add Item</button>
        </div>
        <ul>{tempList}</ul>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
