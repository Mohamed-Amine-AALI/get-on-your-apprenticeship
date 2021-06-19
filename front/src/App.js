import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { FixedSizeList } from 'react-window';
import './App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span" variant="body2">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = theme => ({
  root: {
    backgroundColor: '#424242',
    display: "flex",
    height: "80%",
    width: "80%"
  },
  tabs: {
    borderRight: `1px solid #595959`
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      tabValue: 0
    };
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

  handleChange(ev, newValue) {
    this.setState({ tabValue: newValue })
  }

  render() {
    const { classes } = this.props
    let students = [];
    this.state.apiResponse.forEach((student, index) => {
      students.push(
        <div>
          <ListItem key={index} button style={{ padding: 20 }}>
            <ListItemAvatar>
              <Avatar style={{ height: '70px', width: '70px' }} alt={student.name} src={student.image} />
            </ListItemAvatar>
            <ListItemText style={{ marginLeft: 20 }}
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
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider style={{ background: '#424242' }} />
        </div>
      )
    });
    const Row = ({ index, style }) => <div style={style}>{students[index]}</div>
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={this.state.tabValue}
          onChange={(ev, newValue) => { this.setState({ tabValue: newValue }) }}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="List of students" {...a11yProps(0)} />
          <Tab label="Who's the champion !?" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={this.state.tabValue} index={0}>
          <FixedSizeList style={{ backgroundColor: '#333333' }}
            height={550}
            width={1300}
            itemCount={students.length}
            itemSize={110}
          >
            {Row}
          </FixedSizeList>
        </TabPanel>
        <TabPanel value={this.state.tabValue} index={1}>
          Item Two
        </TabPanel>
      </div>
    );
  }
}

export default withStyles(useStyles)(App)
