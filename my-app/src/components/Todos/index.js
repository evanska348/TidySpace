import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

const INITIAL_STATE = {
  todo: '',
  location: ''
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
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}


const TodoList = ({ todos }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {todos.map(todo => (
      <div key={todo.todoid} style={{ border: "1px solid black", padding: "1rem", marginRight: "2rem" }}>
        <button style={{
          background: "none", border: "none", float: "right"
        }}>
          <i className="fa fa-close"></i>
        </button>
        <p>Name: {todo.todo} {"\n"}</p>
        <p>Location: {todo.location}</p>
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
      location: this.state.location
    });
    this.setState({ ...INITIAL_STATE });
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ todo: event.target.value });
  }
  onChangeLocation = event => {
    this.setState({ location: event.target.value });
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
          placeholder="Enter item name"
        />
        <input
          name="todo"
          value={this.state.location}
          onChange={this.onChangeLocation}
          type="text"
          placeholder="Enter location"
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
