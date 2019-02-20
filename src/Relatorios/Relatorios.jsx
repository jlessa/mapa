import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ListaQuestoes from './ListaQuestoes';

//const API = 'http://127.0.0.1:5000/questao';
const API = 'https://mapa-aprovacao.appspot.com/questao';

const styles = theme => ({
  mainFeaturedPost: {    
    color: theme.palette.common.white,
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
            return(<ListaQuestoes className={this.props.classes.listaQuestao} questao={questao}/>)
          })
        }
        
      </div>
      
    );
  }
}

export default withStyles(styles) (Relatorios);