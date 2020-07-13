import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "./actions/todoActions";
import { Todo } from "./reducers/todoReducers";

import { changeText } from "./actions/textActions";

type Props = {
  todos: Todo[],
} & {
  addTodo: Function,
} & {
  deleteTodo: Function,
} & {
  todoText: string,
} & {
  changeText: Function,
}

class App extends Component<Props> {
  clickAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.addTodo(this.props.todoText);
  }

  clickDeleteTodo(id: number) {
    this.props.deleteTodo(id);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    this.props.changeText(e.target.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.clickAddTodo.bind(this) }>
          <input type="text" value={ this.props.todoText } onChange={ this.handleChange.bind(this) }/>
          <input type="submit" value="submit"></input>
        </form>
        <ul>
          { this.props.todos.map((todo: Todo) => {
            return (
              <li
                key={ todo.id }
              >
                { todo.text }
                <button
                  onClick={ this.props.deleteTodo.bind(this, todo.id) }
                >
                  DEL
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todo,
    todoText: state.text,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addTodo: (text:string) => dispatch(addTodo(text)),
    deleteTodo: (id:number) => dispatch(deleteTodo(id)),
    changeText: (todoText: string) => dispatch(changeText(todoText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);