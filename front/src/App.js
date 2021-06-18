import React, { Component } from 'react';
import logo from './hogwarts.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("http://localhost:3000/real/students")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({ apiResponse: res })
      })
      .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    let students = [];
    this.state.apiResponse.forEach((student, index) => {
      students.push(
        <ListItem key={index}>
          <ListItemText primary={'Name : '+student.name} secondary={
            <Typography>House : {student.house}</Typography>
          }/>
        </ListItem>
      )
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Here is a list of all students:</p>
          <div style={{maxWidth: 360}}>
            <List>
              {students}
            </List>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
