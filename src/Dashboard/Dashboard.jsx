import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { keys } from '@material-ui/core/styles/createBreakpoints';

const API = 'http://127.0.0.1:5000/questao';

class Dashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      questoes: [],
      value: ''
    }
  }

  componentDidMount() {
    this.callApi()
  }

  callApi() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ questoes: data.questao });
        console.log(this.state.questoes)

      });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  renderQuestao(questao) {
    return (
      <div>
        <Paper elevation={1}>
          <Typography variant="h5" component="h3">
            {questao.enunciado}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="op1" control={<Radio />} label={questao.op1} />
              <FormControlLabel value="op2" control={<Radio />} label={questao.op2} />
              <FormControlLabel value="op3" control={<Radio />} label={questao.op3} />
              <FormControlLabel value="op4" control={<Radio />} label={questao.op4} />
              <FormControlLabel value="op5" control={<Radio />} label={questao.op5} />
            </RadioGroup>
          </FormControl>
        </Paper>        
        <hr/>
      </div>

    )
  }

  render() {    
    if (!this.state.questoes.length)
      return null;

    return (
      <div>      
      {
        this.state.questoes.map((questao, index) => (
          this.renderQuestao(questao)
      ))
    }
    <Button variant="contained" color="primary">
            Responder
          </Button>
    </div>
    )
  }
}

export default (Dashboard);