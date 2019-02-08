import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const API = 'http://127.0.0.1:5000/questao';

class Admin extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
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
      lista_states: ['concurso','disciplina','assunto','subassunto','tipo','codigo','enunciado','op1','op2','op3','op4','op5','gabarito','ano','banca','texto_opcoes']
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

  renderTextFieldStates(state){
    return (
    <TextField
          id={"standard-" + state}
          label={state}          
          value= {this.getState(state)}                  
          onChange={this.handleChange(state)}
          margin="normal"
        />
    )
  }

  render() {    
    return (
      <div>   
        {
          this.state.lista_states.map((state, index) => (
            this.renderTextFieldStates(state)
          ))
        }
        <Button variant="contained" color="primary">
          Adicionar
        </Button>
        <Button variant="contained" color="secondary">
          Cancelar
        </Button>
      </div>
    )
  }
}

export default (Admin);