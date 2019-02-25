import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: green[600],
    fontWeigth: 'bold'
  },
  error: {
    backgroundColor: red[600],
  },
  snackbar: {
    margin: theme.spacing.unit,
    
  },
});

class SnackbarResponse extends React.Component {

  render() {
    return (
      <div>
        <Snackbar
          
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.props.open}
          autoHideDuration={3000}
          onClose={this.props.onClose}          
        >       
        <SnackbarContent
            className={this.props.classes[this.props.color]}
            aria-describedby="client-snackbar"
            message={this.props.snackMessage}                        
            onClose={this.props.onClose}
            autoHideDuration={3000}            
          />
        </Snackbar>
        
      </div>
    );
  }
}


export default withStyles(styles)(SnackbarResponse);