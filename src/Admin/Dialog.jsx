import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import EditorQuestao from './EditorQuestao';
import DialogContent from '@material-ui/core/DialogContent';


const styles = {
    
  };

class QuestaoDialog extends React.Component {
    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
    updatedialogtext = value =>{
      this.props.updatedialogtext(value);
    }
    render() {
      const { classes, onClose, selectedValue, ...other } = this.props;
  
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>          
            <DialogContent>
                <EditorQuestao updatedialogtext={this.props.updatedialogtext}/>            
            </DialogContent>            
        </Dialog>
      );
    }
  }
  
export default withStyles(styles)(QuestaoDialog);