import React, { Component } from 'react';
import Students from './components/Students'
import Champions from './components/Champions';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      champions: [],
      isLoading: true,
      tabValue: 0
    };
  }

  async componentDidMount() {
    const studentsPromise = await this.getStudents();
    const championsPromise = await this.getChampions();
    Promise.all([studentsPromise, championsPromise]).then(() => {
      this.setState({ isLoading: false })
    });
  }

  getStudents() {
    return fetch("http://localhost:3000/real/students")
      .then(res => res.json())
      .then(students => {
        this.setState({ students: students })
      })
      .catch(err => err);
  }

  getChampions() {
    return fetch("http://localhost:3000/real/randomstudent")
      .then(res => res.json())
      .then(champions => {
        this.setState({ champions: champions });
      })
      .catch(err => err);
  }

  handleChange(ev, newValue) {
    this.setState({ tabValue: newValue });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#424242', display: 'flex', width: '80%', height: "70%" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={this.state.tabValue}
          onChange={(ev, newValue) => { this.setState({ tabValue: newValue }) }}
          aria-label="Vertical tabs example"
          style={{ borderRight: `1px solid #595959` }}
        >
          <Tab label="List of students" />
          <Tab label="Champions" />
        </Tabs>
        <TabPanel value={this.state.tabValue} index={0}>
          <Students students={this.state.students} />
        </TabPanel>
        <TabPanel value={this.state.tabValue} index={1}>
          <Champions champions={this.state.champions} />
        </TabPanel>
      </div>
    );

  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ flex: 1 }}
      {...other}
    >
      {value === index && (
        <Box style={{height: '100%'}}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default App;
