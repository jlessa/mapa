import React from 'react';
import { Button, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginBottom: '50px'
  },
  input: {
    display: 'none',
  },
});

class QuestoesUpload extends React.Component {

  state = {
    selectedFile: null, 
    loaded: false
  }

  handleselectedFile = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
          this.setState({selectedFile: e.target.result});
          this.setState({loaded: true});
      };
      reader.readAsDataURL(event.target.files[0]);      
    }
  }
  
  handleUpload = () =>{
    this.setState({selectedFile: null});
    this.setState({loaded: false});
  }
  
  render() {
    const { classes, theme } = this.props;

    return (
      <div>       
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          onChange={this.handleselectedFile}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="secondary"  component="span" className={classes.button}>
            Adicionar Questão
          </Button>          
          
        </label>   
        {this.state.loaded ? 
          <Button variant="contained" onClick={this.handleUpload} color="primary" className={classes.button}>
            Upload
          </Button>
          : null}                
        <CardMedia
                    style={{height: 0, paddingTop: '30.25%'}}
                    image={this.state.selectedFile}                    
                />
                      
      </div >
      
    );
  }
}

export default withStyles(styles, { withTheme: true })(QuestoesUpload);