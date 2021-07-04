import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList } from 'react-window';
// import './App.css';

class Students extends Component {
  
  render() {

    let students = [];
    this.props.students.forEach((student, index) => {
      students.push(
        <ListItem key={index} button style={{ padding: 20 }} divider>
          <ListItemAvatar>
            <Avatar style={{ height: '70px', width: '70px' }} alt={student.name} src={student.image} />
          </ListItemAvatar>
          <ListItemText style={{ marginLeft: 20 }}
            primary={student.name}
            secondary={
              <Typography component="span" variant="body2" color="secondary">
                House : {student.house}
              </Typography>
            }
          />
        </ListItem>
      )
    });
    const rowStudents = ({ index, style }) => <div style={style}>{students[index]}</div>

    return (
      <FixedSizeList style={{ backgroundColor: '#333333', width: '100%', height: '100%' }}
        height={800}
        width={800}
        itemCount={students.length}
        itemSize={110}
      >
        {rowStudents}
      </FixedSizeList>
    );
  }
}

export default Students;
