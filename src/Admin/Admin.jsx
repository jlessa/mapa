import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EditorQuestao from './EditorQuestao';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from './Dialog';

const API = 'http://127.0.0.1:5000/questao';

const styles = theme => ({   
  textField: {
    margin: theme.spacing.unit 
  },
  root: {
    flexGrow: 1,
  },
  button:{
    margin: theme.spacing.unit 
  },
  div: {
    display: 'inline'
  }

});

class Admin extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      concurso: '',
      disciplina: '',
      assunto: '',
      subassunto:'',
      tipo: '',
      codigo: '',
      enunciado: '',
      op1: '',
      op2: '',
      op3: '',
      op4: '',
      op5: '',
      gabarito: '',
      ano: '',
      banca: '',
      texto_opcoes: '',
      lista_states: ['concurso','disciplina','assunto','subassunto','ano','banca','tipo','gabarito','enunciado','op1','op2','op3','op4','op5']
    }

  }

  callApi() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ questoes: data.questao });        

      });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickDialogOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  defineTextFieldTamanho(estado) {
    let espaco = 3;
    switch(estado) {      
      case 'enunciado':
        espaco = 12;
        break;        
      case 'op1':
        espaco = 12;
        break;  
      case 'op2':
        espaco = 12
        break;  
      case 'op3':
        espaco = 12;
        break;  
      case 'op4':
        espaco = 12;
        break;  
      case 'op5':
        espaco = 12;
        break;  
      default:
        espaco = 2;
        break;  
    } 
    return espaco;
  }
  renderTextFieldStates(state){
    return (
      <Grid item xs={this.defineTextFieldTamanho(state)}>
        <TextField
            className={this.props.classes.textField}
            id={"standard-" + state}
            label={state}          
            value= {this.state[state]}                  
            onChange={this.handleChange(state)}
            margin="normal"
        />
        {
        state == 'enunciado' | state.includes('op') ?
        <div className={this.props.classes.div}>
            <IconButton 
            color="primary"
            className={this.props.classes.button}
            aria-label="Delete" 
            onClick={this.handleClickDialogOpen}>
            <EditIcon />
          </IconButton>
          <Dialog                            
            open={this.state.open}
            onClose={this.handleClose}
            />    
        </div>          
        : null
        }
         
        
      </Grid>    
    )
  }

  render() {    
    return (
      <div className={this.props.classes.root}>
      <Grid container alignItems="center" direction="row" spacing={16}>        
        {
          this.state.lista_states.map((state, index) => (
            this.renderTextFieldStates(state)
          ))
        }        
        <Grid item xs={12}>
          <Button className={this.props.classes.button} variant="contained" color="primary">
            Adicionar
          </Button>
          <Button className={this.props.classes.button} variant="contained" color="secondary">
            Cancelar
          </Button>
        </Grid>                
      </Grid>                      
      </div>
    )
  }
}

export default withStyles(styles) (Admin);