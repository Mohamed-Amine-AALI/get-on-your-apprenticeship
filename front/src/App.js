import React, { Component } from 'react';
import logo from './hogwarts.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList } from 'react-window';

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
        <div>
          <ListItem key={index} button divider>
            <ListItemAvatar>
              <Avatar style={{ height: '70px', width: '70px' }} alt={student.name} src={student.image} />
            </ListItemAvatar>
            <ListItemText style={{marginLeft: 20}}
              primary={student.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="secondary"
                  >
                    House : {student.house}
                  </Typography>
                  {/* {" — I'll be in your neighborhood doing errands this…"} */}
                </React.Fragment>
              }
            />
          </ListItem>
        </div>
      )
    });
    const Row = ({ index, style }) => <div style={style}>{students[index]}</div>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Here is a list of all students:</p>
          <FixedSizeList style={{ backgroundColor: '#333333' }}
            height={500}
            width={800}
            itemCount={students.length}
            itemSize={100}
          >
            {Row}
          </FixedSizeList>
        </header>
      </div>
    );
  }
}

export default App;
