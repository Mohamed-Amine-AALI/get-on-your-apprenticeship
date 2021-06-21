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
    margin: 10,
    padding: 10
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 10
  }
});

class Champions extends Component {

  render() {

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
                Champion : {champion.house}
              </Typography>
            </div>
          </div>
        </Card>
      )
    });

    return champions;
  }
}

export default withStyles(useStyles)(Champions)

