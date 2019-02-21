import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Questoes extends React.Component {
  state = {
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {   
    
    return (
      <div>        
        Questao
      </div>
    );
  }
}

export default withStyles(styles)(Questoes);