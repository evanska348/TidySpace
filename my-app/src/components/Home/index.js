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
      areas: [],
    };

  }

  componentDidMount() {
    this.setState({ loading: true });
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
        <AreaList areas={this.state.areas} />
      </div>
    );
  }
}


const AreaList = ({ areas }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {areas.map(area => (
      <div key={area.value} style={{ border: "1px solid black", padding: "1rem", marginRight: "2rem" }}>
        <p>{area.value}</p>
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