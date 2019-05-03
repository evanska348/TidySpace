import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import Modal from 'react-modal';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// import {
//   Modal,
//   ModalHeader,
//   ModalTitle,
//   ModalClose,
//   ModalBody,
//   ModalFooter
// } from 'react-modal-bootstrap';


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
      areas: [],
      toos: []
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

      this.setState({
        todos: todosList,
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
    this.props.firebase.areas().off();
  }

  render() {
    return (
      <div style={{ marginLeft: "10vw" }}>
        <h1>Area List</h1>
        <AreaList areas={this.state.areas} todos={this.state.todos} firebase={this.props.firebase} />
      </div>
    );
  }
}

Modal.setAppElement(document.getElementById('root'));

const AreaList = ({ areas, todos, firebase }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {areas.map(area => (
      <div key={area.value} style={{
        border: "1px solid #99d5cf", padding: "1rem", borderRadius: "5px", marginRight: "2rem",
        marginBottom: "2rem", marginTop: "2rem", backgroundColor: "#99d5cf"
      }}>
        <h4 style={{ fontWeight: "400" }}>{area.value}</h4>
        <AreaItem items={todos} area={area} firebase={this.firebase} />
      </div>
    ))}
  </div>
);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class AreaItem extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      items: [],
      area: [],
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: this.props.items,
      area: this.props.area,
    })
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let db = this.props.firebase;
    db.ref("todos/Ldwh8lUYIJFsqpIbnjM").update({ missing: false })
    var items = this.state.items;
    var filtered = [];
    var area = this.state.area;
    for (let i = 0; i < items.length; i++) {
      if (items[i].area.value === area.value) {
        filtered.push(items[i])
      }
    }
    console.log(filtered)
    return (
      <div>
        <Card>
          <CardContent>
            {filtered.length === 0 ?
              <Typography component="p">
                No Items
        </Typography>
              :
              <TodoView todos={filtered} area={this.props.area} ></TodoView>
            }
          </CardContent>
          <CardActions>
            <Button onClick={this.openModal} size="small">Full List - ({filtered.length})</Button>
          </CardActions>
        </Card>
        {/* <button className="btn btn-primary" onClick={this.openModal}>Full List - ({filtered.length})</button> */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.area.value}</h2>
          <TodoList todos={filtered} area={this.props.area} firebase={this.props.firebase} />
          <button className="btn btn-warning" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

const TodoView = ({ todos, area }) => (
  <div>
    {todos.map(todo => (
      <div key={todo.todoid} >
        <Typography component="p">
          {todo.todo}
        </Typography>
        <Typography color="textSecondary">
          {todo.location}
        </Typography>
      </div>
    ))}
  </div>
);


function handleLowChange(id, firebase) {
  if (firebase.ref("todos/" + id) + 'low' == true) {
    firebase.ref("todos/" + id).update({ low: false });
  } else {
    firebase.ref("todos/" + id).update({ low: true });
  }
}

function handleMissingChange(id, firebase) {
  if (firebase.ref("todos/" + id) + 'missing' == true) {
    firebase.ref("todos/" + id).update({ missing: false });
  } else {
    firebase.ref("todos/" + id).update({ missing: true });
  }
}

const TodoList = ({ todos, area, firebase }) => (

  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {todos.map(todo => (
      <div key={todo.todoid} style={{ padding: ".4rem", marginRight: "2rem", border: '1px solid black' }}>
        <p>Name: {todo.todo} {"\n"}</p>
        <p>Area: {todo.area.value}</p>
        <p>Location: {todo.location}</p>
        <p>Created: {todo.created}</p>
        <FormControlLabel
          control={
            <Switch
              checked={todo.low}
              onChange={handleLowChange(todo.todoid, firebase)}
            // value="gilad"
            />
          }
          label="Item Low"
        />
        <FormControlLabel
          control={
            <Switch
              checked={todo.missing}
              onChange={handleMissingChange(todo.todoid, this.firebase)}
            // value="gilad"
            />
          }
          label="Item Missing"
        />
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