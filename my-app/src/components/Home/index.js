import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';

// const HomePage = () => (
//   <div style={{ marginLeft: "10vw" }}>
//     <h1>Your Spaces</h1>
//     <p>The Home Page is accessible by every signed in user.</p>
//     <Spaces />
//   </div>
// );


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      todos: [],
    };

  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.todos().on('value', snapshot => {
      const todosObject = snapshot.val();

      const todosList = Object.keys(todosObject || {}).map(key => ({
        ...todosObject[key],
        todoid: key,
      }));
      // todosList = [...new Set(todosList.map(x => x.location))]
      this.setState({
        todos: todosList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.todos().off();
  }


  componentWillUnmount() {
    this.props.firebase.todos().off();
  }

  deleteTodo = todoid => {
    this.props.firebase.todo(todoid).remove();
  }

  render() {
    return (
      <div style={{ marginLeft: "10vw" }}>
        <h1>Item List</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}


const TodoList = ({ todos }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {todos.map(todo => (
      <div key={todo.todoid} style={{ border: "1px solid black", padding: "1rem", marginRight: "2rem" }}>
        <p>{todo.location}</p>
      </div>
    ))}
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);


  // componentDidMount() {
  //   let todosList = this.state.todos;
  //   let locations = [];
  //   let output = [];
  //   for (let i = 0; i <= todosList.length; i++) {
  //     if (!locations.includes(todosList[i].location)) {
  //       locations.push(todosList[i].location)
  //       output.push(todosList[i])
  //     }
  //   }
  // }