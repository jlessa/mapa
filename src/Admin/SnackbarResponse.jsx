import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: green[600],
  },
});

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
          message={'Questão Adicionada'}          
        />
      </div>
    );
  }
}

SnackbarResponse.propTypes = {
  open: PropTypes.bool
};
SnackbarResponse.defaultProps = {
  open: false
};

export default withStyles(styles)(SnackbarResponse);