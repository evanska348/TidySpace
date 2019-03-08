import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

const INITIAL_STATE = {
  todo: '',
};

class TodosBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      todos: [],
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.todos;
      newList = currentList.filter(item => {
        const lc = item.todo.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.todos;
    }
    this.setState({
      filtered: newList
    });
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.todos().on('value', snapshot => {
      const todosObject = snapshot.val();

      const todosList = Object.keys(todosObject || {}).map(key => ({
        ...todosObject[key],
        todoid: key,
      }));

      this.setState({
        todos: todosList,
        filtered: todosList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.todos().off();
  }

  deleteTodo = todoid => {
    this.props.firebase.todo(todoid).remove();
  }

  render() {
    const { todos } = this.state;

    return (
      <div style={{ marginLeft: "10vw" }}>
        <AddTodo />
        <hr />
        <h1>Item List</h1>
        <input type="text" className="input" onChange={(this.handleChange)} placeholder="Search..." />
        <TodoList todos={this.state.filtered} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}


const TodoList = ({ todos, deleteTodo }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {todos.map(todo => (
      <div key={todo.todoid} style={{ border: "1px solid black", padding: "1rem", marginRight: "2rem" }}>
        {todo.todo}
        <button onClick={() => deleteTodo(todo.todoid)} style={{
          background: "none", border: "none"
        }}>
          <i className="fa fa-close"></i>
        </button>
      </div>
    ))}
  </div>
);

class AddTodoBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    var newTodo = this.props.firebase.todos().push({
      created: new Date().toISOString().replace('T', ' ').replace('Z', ''),
      todo: this.state.todo,
    });
    this.setState({ ...INITIAL_STATE });
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ todo: event.target.value });
  }

  render() {
    const { todo } = this.state;

    const invalid = todo.trim() === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="todo"
          value={todo}
          onChange={this.onChange}
          type="text"
          placeholder="Enter Item"
        />
        <button variant="contained" color="primary" disabled={invalid} type="submit">
          Add Item
        </button>
      </form>
    );
  }
}

const AddTodo = compose(
  withFirebase,
)(AddTodoBase);

const Todos = compose(
  withFirebase,
)(TodosBase);

export default Todos;
