import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListaQuestoes from './ListaQuestoes';

//const API = 'http://127.0.0.1:5000/questao';
const API = 'https://mapa-aprovacao-api.herokuapp.com/questao';

const styles = theme => ({
  mainFeaturedPost: {    
    //color: theme.palette.common.white,
    marginBottom: theme.spacing.unit ,
  },
  mainFeaturedPostContent: {
    padding: theme.spacing.unit * 6   
  }, 
  button: {
    margin: theme.spacing.unit    
  }, 
  listaQuestao: {
    padding: theme.spacing.unit  + 900
  }
});


class Relatorios extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'female',
      questoes: [],      
      concurso: '',
      disciplina: '',
      assunto: '',
      subassunto: '',
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
    }
  }
  componentDidMount(){    
    //console.log(JSON.parse(json))
    //this.setState({ questoes: JSON.parse(json).questao});
    this.callApi()
  }

  callApi() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ questoes: data.questao });
      });
  }

  handleSelect = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        {
          this.state.questoes.map( questao => {
            return(
              <div >
                <ListaQuestoes key={questao} className={this.props.classes.listaQuestao} questao={questao}/>
              </div>              
            )
          })
        }
        
      </div>
      
    );
  }
}

export default withStyles(styles) (Relatorios);