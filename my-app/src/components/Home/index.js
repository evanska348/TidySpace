import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import Modal from 'react-modal';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
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

  changeLow(todoid, value) {
    let todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todoid === todoid) {
        todos[i].low = value;
      }
    }
    this.setState({ todos: todos })
  }

  componentWillUnmount() {
    this.props.firebase.areas().off();
  }

  changeMissing(todoid, value) {
    let todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todoid === todoid) {
        todos[i].missing = value;
      }
    }
    this.setState({ todos: todos })
  }

  componentWillUnmount() {
    this.props.firebase.areas().off();
  }

  render() {
    console.log(this.state.todos)
    return (
      <div style={{ marginLeft: "10vw" }}>
        <h1>Area List</h1>
        <AreaList low={this.changeLow.bind(this)} missing={this.changeMissing.bind(this)}
          areas={this.state.areas} todos={this.state.todos} firebase={this.props.firebase} />
      </div>
    );
  }
}

Modal.setAppElement(document.getElementById('root'));

const AreaList = ({ missing, low, areas, todos, firebase }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {areas.map(area => (
      <div key={area.value} style={{
        border: "1px solid #99d5cf", padding: "1rem", borderRadius: "5px", marginRight: "2rem",
        marginBottom: "2rem", marginTop: "2rem", backgroundColor: "#99d5cf"
      }}>
        <h4 style={{ fontWeight: "400" }}>{area.value}</h4>
        <AreaItem missing={missing} items={todos} low={low} area={area} firebase={firebase} />
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

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      items: [],
      area: [],
      firebase: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: this.props.items,
      area: this.props.area,
      firebase: this.props.firebase
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

  // handleLowChange = (todo) => {
  //   firebase.todos().child(todo.todoid).set({
  //     created: todo.created,
  //     todo: todo.todo,
  //     area: todo.area,
  //     location: todo.location,
  //     missing: todo.missing,
  //     low: !todo.status
  //   })
  //   // this.setState({ [name]: event.target.checked });
  // };

  render() {
    var items = this.state.items;
    var filtered = [];
    var area = this.state.area;
    for (let i = 0; i < items.length; i++) {
      if (items[i].area.value === area.value) {
        filtered.push(items[i])
      }
    }
    return (
      < div >
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
          <TodoList missing={this.props.missing} low={this.props.low} todos={filtered}
            area={this.props.area} handleLowChange={this.handleLowChange} firebase={this.state.firebase} />
          <button className="btn btn-warning" onClick={this.closeModal}>close</button>
        </Modal>
      </div >
    );
  }
}


const TodoView = ({ todos, area }) => (
  <div>
    {todos.map(todo => (
      <div key={todo.todoid} style={{ position: 'relative' }}>
        <Typography component="p">
          {todo.todo}
          <span style={{ fontSize: '1.5rem', color: 'red', display: 'inline-block', position: 'absolute', right: 0 }}>
            {todo.missing && (
              <Tooltip title="Item Missing">
                <i className="fa fa-exclamation-circle"></i>
              </Tooltip>
            )}
          </span>
          <span style={{ fontSize: '1.5rem', color: 'orange', display: 'inline-block', position: 'absolute', right: 0 }}>
            {todo.low && (
              <Tooltip title="Item Low">
                <i className="fa fa-exclamation-circle"></i>
              </Tooltip>
            )}
          </span>
        </Typography>
        <Typography color="textSecondary">
          {todo.location}
        </Typography>
        {/* {todo.low === true ?
          <p>low</p>
          :
          <p></p>
        } */}
      </div>
    ))}
  </div>
);

const TodoList = ({ missing, low, todos, area, firebase }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {todos.map(todo => (
      <Card key={todo.todoid} style={{ margin: '5px' }}>
        <CardContent style={{ paddingBottom: 0 }}>
          {/* <div key={todo.todoid} style={{ padding: ".4rem", marginRight: "2rem", border: '1px solid black' }}> */}

          <Typography gutterBottom variant="h5" component="h5">
            {todo.todo} {"\n"}
          </Typography>
          <Typography component="p">
            Area: {todo.area.value}
          </Typography>
          <Typography component="p">
            Location: {todo.location}
          </Typography>
          {/* <FormControlLabel
          control={
            <Switch
              // checked='True'
              onChange={changeLow(firebase, todo)}
              value="gilad"
            />
          }
          label="Item Low"
        />
        <FormControlLabel
          control={
            <Switch
            // checked={todo.missing}
            // onChange={this.handleChange('gilad')}
            // value="gilad"
            />
          }
          label="Item Missing"
        /> */}
          <CardActions>
            <LowMissing missing={missing} low={low} todo={todo} firebase={firebase} />
          </CardActions>
        </CardContent>
      </Card>
    ))}
  </div>
);

class LowMissing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      low: this.props.todo.low,
      missing: this.props.todo.missing,
      todo: this.props.todo,
      firebase: this.props.firebase
    };
  }

  changeLow = todo => event => {
    if (this.state.missing === true && event.target.checked) {
      this.state.firebase.todos().child(todo.todoid).set({
        created: todo.created,
        todo: todo.todo,
        area: todo.area,
        location: todo.location,
        missing: false,
        low: event.target.checked
      })
      this.props.missing(todo.todoid, false);
      this.setState({ missing: false });
    } else {
      this.state.firebase.todos().child(todo.todoid).set({
        created: todo.created,
        todo: todo.todo,
        area: todo.area,
        location: todo.location,
        missing: todo.missing,
        low: event.target.checked
      })
    }
    this.setState({ low: event.target.checked })
    this.props.low(todo.todoid, event.target.checked)
  }

  changeMissing = todo => event => {
    if (this.state.low === true && event.target.checked) {
      this.state.firebase.todos().child(todo.todoid).set({
        created: todo.created,
        todo: todo.todo,
        area: todo.area,
        location: todo.location,
        missing: event.target.checked,
        low: false
      })
      this.props.low(todo.todoid, false);
      this.setState({ low: false });
    } else {
      this.state.firebase.todos().child(todo.todoid).set({
        created: todo.created,
        todo: todo.todo,
        area: todo.area,
        location: todo.location,
        missing: event.target.checked,
        low: todo.low
      })
    }
    this.setState({ missing: event.target.checked })
    this.props.missing(todo.todoid, event.target.checked)
  }

  render() {
    return (
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.low}
              onChange={this.changeLow(this.state.todo)}
            />
          }
          label="Item Low"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.missing}
              onChange={this.changeMissing(this.state.todo)}
            />
          }
          label="Item Missing"
        />
      </div>
    )
  }
}

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