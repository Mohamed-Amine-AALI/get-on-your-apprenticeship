import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  card: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignContent: "space-around",
    backgroundColor: '#333333',
    color: "white",
    padding: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    marginLeft: 10
  }
});

class Champions extends Component {

  render() {

    console.log(this.props.champions);

    const { classes } = this.props

    let champions = [];
    this.props.champions.forEach(champion => {
      champions.push(
        <Card className={classes.card} key={champion.name}>
          <Avatar style={{ height: '100px', width: '100px' }} alt={champion.name} src={champion.image} />
          <div className={classes.details}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarIcon style={{ marginRight: 10 }} />
              <Typography component="h5" variant="h5">
                {champion.name}
              </Typography>
            </div>
            <Typography component="span" variant="body2" color="secondary">
              House : {champion.house}
            </Typography>
          </div>
        </Card>
      )
    });

    return (
      <div
        style={{
          height: '100%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignContent: 'space-around',
          marginLeft: 10,
          marginRight: 10
        }}
      >
        {champions}
      </div>
    );
  }
}

export default withStyles(useStyles)(Champions)

