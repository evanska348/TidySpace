import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const INITIAL_STATE = {
  todo: '',
  location: '',
  area: 'null',
  areaCreate: '',
};

class TodosBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      todos: [],
      filtered: [],
      areas: [],
      lowfil: false,
      missingfil: false
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

  changeLowFilter = (e) => {
    this.setState({ lowfil: e.target.checked })
    if (this.state.missingfil === true) {
      this.setState({ missingfil: false });
    }
    let currentList = this.state.todos;
    let newList = [];
    if (e.target.checked) {
      newList = currentList.filter(item => {
        if (item.low === true) {
          return true;
        }
      });
    } else {
      newList = this.state.todos;
    }
    this.setState({
      filtered: newList
    });
  }

  changeMissingFilter = (e) => {
    this.setState({ missingfil: e.target.checked })
    if (this.state.lowfil === true) {
      this.setState({ lowfil: false });
    }
    let currentList = this.state.todos;
    let newList = [];
    if (e.target.checked) {
      newList = currentList.filter(item => {
        if (item.missing === true) {
          return true;
        }
      });
    } else {
      newList = this.state.todos;
    }
    this.setState({
      filtered: newList
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
        <FormControlLabel style={{ padding: '3vw' }}
          control={
            <Switch
              checked={this.state.lowfil}
              onChange={this.changeLowFilter}
            />
          }
          label="Filter Low"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.missingfil}
              onChange={this.changeMissingFilter}
            />
          }
          label="Filter Missing"
        />
        <br />
        <TodoList todos={this.state.filtered} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

const styles = {
  green: {
    border: "1px solid #99d5cf", padding: "1rem", borderRadius: "5px", marginRight: "2rem",
    marginBottom: "2rem", marginTop: "2rem", backgroundColor: "#99d5cf"
  },
  red: {
    border: "1px solid #99d5cf", padding: "1rem", borderRadius: "5px", marginRight: "2rem",
    marginBottom: "2rem", marginTop: "2rem", backgroundColor: 'red'
  }
}


const TodoList = ({ todos, deleteTodo }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {todos.map(todo => (

      <Card key={todo.todoid} style={{ margin: '5px' }}>
        <CardContent style={{ paddingBottom: 0 }}>
          <button onClick={() => deleteTodo(todo.todoid)} style={{
            background: "none", border: "none", float: "right"
          }}>
            <i className="fa fa-close"></i>
          </button>
          {todo.missing && (
            <Typography>
              <span style={{ fontSize: '1.5rem', color: 'red', display: 'inline-block' }}>
                <Tooltip title="Item Missing">
                  <i className="fa fa-exclamation-circle"></i>
                </Tooltip>
              </span>
            </Typography>
          )}
          {todo.low && (
            <Typography>
              <span style={{ fontSize: '1.5rem', color: 'orange', display: 'inline-block' }}>
                <Tooltip title="Item Low">
                  <i className="fa fa-exclamation-circle"></i>
                </Tooltip>
              </span>
            </Typography>
          )}

          <Typography gutterBottom variant="h5" component="h5">
            {todo.todo} {"\n"}
          </Typography>
          <Typography component="p">
            Area: {todo.area.value}
          </Typography>
          <Typography component="p">
            Location: {todo.location}
          </Typography>
        </CardContent>
      </Card>
      // <div key={todo.todoid} style={
      //   todo.low ? styles.red : styles.green
      // }>
      //   <button onClick={() => deleteTodo(todo.todoid)} style={{
      //     background: "none", border: "none", float: "right"
      //   }}>
      //     <i className="fa fa-close"></i>
      //   </button>


      //   <p style={{ fontWeight: "500" }}>Name: {todo.todo} {"\n"}</p>
      //   <p style={{ fontWeight: "500" }}>Area: {todo.area.value}</p>
      //   <p style={{ fontWeight: "500" }}>Location: {todo.location}</p>
      // </div>
    ))}
  </div>
);

class AddTodoBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    if (this.state.area === undefined) {
      var newTodo = this.props.firebase.todos().push({
        created: new Date().toISOString().replace('T', ' ').replace('Z', ''),
        todo: this.state.todo,
        location: this.state.location,
        area: 'Uncategorized',
        missing: false,
        low: false
      });
    } else {
      var newTodo = this.props.firebase.todos().push({
        created: new Date().toISOString().replace('T', ' ').replace('Z', ''),
        todo: this.state.todo,
        location: this.state.location,
        area: this.state.area,
        missing: false,
        low: false
      });
    }
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
      <div className='form-row'>
        <div style={{ display: 'inline-block' }} >
          <h3>
            Add Item
          </h3>
          <form onSubmit={this.onSubmit}>
            <TextField className='form-group col-md6'
              style={{ margin: '10px', marginLeft: 0 }}
              id="outlined-with-placeholder"
              label="Item Name"
              placeholder="Item Name"
              margin="normal"
              variant="outlined"
              name="todo"
              value={this.state.todo}
              onChange={this.onChange}
            />
            <TextField
              style={{ margin: '10px', marginRight: 0 }}
              className='form-group col-md6'
              name="todo"
              id="outlined-with-placeholder"
              label="Enter Location"
              placeholder="Enter Location"
              margin="normal"
              variant="outlined"
              name="todo"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
            <Select
              style={{ margin: '10px' }}
              className='form-group'
              style={{ width: '20vw' }}
              value={this.state.area}
              onChange={this.handleAreaChange}
              options={this.props.areas}
              placeholder="Select item area"
              isSearchable="true"
              name="todo"
              id="outlined-with-placeholder"
            />
            <Button variant="contained" color="primary" disabled={invalid} type="submit">
              Add Item
              <i style={{ paddingLeft: '5px' }} className="fa fa-save" ></i>
            </Button>
          </form>
        </div>
        <div style={{ display: 'inline-block', paddingLeft: '5vw' }}>
          <h3>
            Add Area
        </h3>
          <form onSubmit={this.onSubmitAreaCreate}>
            <TextField
              style={{ marginTop: '10px', marginBottom: '10px' }}
              className='form-group col-md6'
              name="todo"
              id="outlined-with-placeholder"
              label="Enter Area"
              placeholder="Enter Area"
              variant="outlined"
              name="todo"
              value={this.state.areaCreate}
              onChange={this.onChangeAreaCreate}
            />
            <Button style={{ display: 'block' }} variant="contained" color="primary" disabled={areainvalid} type="submit">
              Add Area
              <i style={{ paddingLeft: '5px' }} className="fa fa-save" ></i>
            </Button>
          </form>
        </div>
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