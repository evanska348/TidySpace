import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import Select from 'react-select';

const INITIAL_STATE = {
  todo: '',
  location: '',
  area: null,
  areaCreate: '',
};

class TodosBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      todos: [],
      filtered: [],
      areas: []
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

    this.props.firebase.areas().on('value', snapshot => {
      const areasObject = snapshot.val();

      const arealist = Object.keys(areasObject || {}).map(key => ({
        ...areasObject[key],
        areaid: key,
      }));

      this.setState({
        areas: arealist,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.todos().off();
    this.props.firebase.areas().off();
  }

  deleteTodo = todoid => {
    this.props.firebase.todo(todoid).remove();
  }

  render() {
    const { todos } = this.state;

    return (
      <div style={{ marginLeft: "10vw" }}>
        <AddTodo areas={this.state.areas} />
        <hr />
        <h1>Item List</h1>
        <input type="text" className="input" onChange={(this.handleChange)} placeholder="Search..." />
        <br />
        <TodoList todos={this.state.filtered} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}


const TodoList = ({ todos, deleteTodo }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {todos.map(todo => (
      <div key={todo.todoid} style={{ border: "1px solid black", padding: "1rem", marginRight: "2rem" }}>
        <button onClick={() => deleteTodo(todo.todoid)} style={{
          background: "none", border: "none", float: "right"
        }}>
          <i className="fa fa-close"></i>
        </button>
        <p>Name: {todo.todo} {"\n"}</p>
        <p>Area: {todo.area.value}</p>
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
      location: this.state.location,
      area: this.state.area
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

  onChangeAreaCreate = event => {
    this.setState({ areaCreate: event.target.value });
  }

  onSubmitAreaCreate = event => {
    var newArea = this.props.firebase.areas().push({
      value: this.state.areaCreate,
      label: this.state.areaCreate
    });
    this.setState({ areaCreate: '' })
    event.preventDefault();
  }

  handleAreaChange = (area) => {
    this.setState({ area: area });
    console.log(`Option selected:`, area);
  }

  render() {

    const invalid = this.state.todo.trim() === '';
    const areainvalid = this.state.areaCreate.trim() === '';

    return (
      <div>
        <h3>
          Add Item
        </h3>
        <form onSubmit={this.onSubmit}>
          <input
            name="todo"
            value={this.state.todo}
            onChange={this.onChange}
            type="text"
            placeholder="Enter item name"
          />
          <Select
            value={this.state.area}
            onChange={this.handleAreaChange}
            options={this.props.areas}
            placeholder="Select item area"
            isSearchable="true"
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
        <br />
        <h3>
          Add Area
        </h3>
        <form onSubmit={this.onSubmitAreaCreate}>
          <input
            name="todo"
            value={this.state.areaCreate}
            onChange={this.onChangeAreaCreate}
            type="text"
            placeholder="Enter Area"
          />
          <button variant="contained" color="primary" disabled={areainvalid} type="submit">
            Add Area
        </button>
        </form>
      </div>
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


// Front Desk
// Nursing station – has storage – general supplies
// -	Things that you don’t necessarily need in the office
// Exam rooms
// Procedure room
// Medical office

// Closet with lock on
// Procedure Nursing Station has most of the stuff
// Exam room has some things

// One of the nurses is in charge of restocking