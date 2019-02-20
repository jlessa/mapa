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
});


class ListaQuestoes extends React.Component {
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

  handleSelect = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <Paper className={this.props.classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={12}>
                <div className={this.props.classes.mainFeaturedPostContent}>                                  
                  <Typography variant="h6" color="black" paragraph>
                    {this.props.questao.enunciado}
                  </Typography>                
                </div>
              </Grid>
            </Grid>
        </Paper>
        <Paper className={this.props.classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={12}>
              <FormControl component="fieldset" >          
          <RadioGroup
            aria-label="Gender"
            name="gender1"        
            className={this.props.classes.mainFeaturedPostContent}    
            value={this.state.value}
            onChange={this.handleSelect}
          >
            <FormControlLabel value={this.props.questao.op1} control={<Radio />} label={this.props.questao.op1} />
            <FormControlLabel value={this.props.questao.op2} control={<Radio />} label={this.props.questao.op2} />
            <FormControlLabel value={this.props.questao.op3} control={<Radio />} label={this.props.questao.op3} />
            <FormControlLabel value={this.props.questao.op4} control={<Radio />} label={this.props.questao.op4} />
            <FormControlLabel value={this.props.questao.op5} control={<Radio />} label={this.props.questao.op5} />

          </RadioGroup>
        </FormControl>
              </Grid>
            </Grid>
        </Paper>        
        <Grid container item xs={12}>
            <Button className={this.props.classes.button} variant="contained" color="primary">
              Responder
          </Button>
            <Button className={this.props.classes.button} variant="contained" color="secondary">
              Cancelar
          </Button>
          </Grid>
      </div>
      
    );
  }
}

export default withStyles(styles)(ListaQuestoes);