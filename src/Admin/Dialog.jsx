import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import EditorQuestao from './EditorQuestao';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = {
    
  };

class QuestaoDialog extends React.Component {
    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    render() {
      const { classes, onClose, selectedValue, ...other } = this.props;
  
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>          
            <DialogContent>
                <EditorQuestao/>            
            </DialogContent>            
        </Dialog>
      );
    }
  }
  
export default withStyles(styles)(QuestaoDialog);