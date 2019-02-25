import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: green[600],
  },
  snackbar: {
    margin: theme.spacing.unit,
    
  },
});

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

class SnackbarResponse extends React.Component {

  render() {
    return (
      <div>
        <Snackbar
          //className = {this.props.classes.success}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.props.open}
          autoHideDuration={2000}
          onClose={this.props.onClose}
          //message={this.props.snackMessage}
        >       
        <SnackbarContent
            className={this.props.classes.snackbar}
            message={this.props.snackMessage}            
            onClose={this.props.onClose}
            autoHideDuration={2000}
          />
        </Snackbar>
        
      </div>
    );
  }
}


export default withStyles(styles)(SnackbarResponse);