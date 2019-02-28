import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from './Dialog';
import SnackbarResponse from './SnackbarResponse';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

//const API = 'http://127.0.0.1:5000/questao';
const API = 'https://mapa-aprovacao-api.herokuapp.com/questao';

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit
  },
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit
  },
  iconButton: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
  },
  div: {
    display: 'inline'
  },
  progress: {
    margin: theme.spacing.unit * 2,
    position: 'fixed',
    top: '50%',
    left: '50%'
  },

});

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.updatedialogtext = this.updatedialogtext.bind(this);
    this.postQuestao = this.postQuestao.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);

    this.state = {
      open: false,
      openSnack: false,
      snackLoader: false,
      snackColor: '',
      snackMessage: '',
      stateDialog: 'op1',
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
      lista_states: ['concurso', 'disciplina', 'assunto', 'subassunto', 'ano', 'banca', 'tipo', 'gabarito', 'enunciado', 'op1', 'op2', 'op3', 'op4', 'op5']
    }

  }

  postQuestao() {
    this.setState({ openSnack: !this.state.openSnack });
    this.setState({ snackLoader: true });
    let post_data = {}
    this.state.lista_states.map((estado) => {
      post_data[estado] = this.state[estado]
    });

    this.limpaCampos();

    axios.post(API, {
      data: JSON.stringify(
        post_data
      )
    })
      .then((response) => {
        this.setState({ openSnack: true, snackMessage: 'Questão criada com Sucesso', snackColor: 'success' });
      })
      .catch((error) => {
        this.setState({ openSnack: true, snackMessage: 'Erro ao criar Questão', snackColor: 'error' });
      })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false })
  }

  handleClickDialogOpen = (stateName) => {
    this.setState({
      open: true,
      stateDialog: stateName
    });
  };

  updatedialogtext = (value) => {
    this.setState({ [this.state.stateDialog]: value });
  };

  cancelButtonClick = () => {
    this.limpaCampos();
  };

  limpaCampos = () => {
    this.state.lista_states.map(estado => {
      this.setState({ [estado]: '' })
    });
  }

  handleSnackbarClose = () => {
    this.setState({ openSnack: false, snackMessage: '', snackColor: '' });
    this.setState({ snackLoader: false });
  };

  defineTextFieldTamanho(estado) {
    let espaco = 3;
    switch (estado) {
      case 'enunciado':
        espaco = 11;
        break;
      case 'op1':
        espaco = 11;
        break;
      case 'op2':
        espaco = 11
        break;
      case 'op3':
        espaco = 11;
        break;
      case 'op4':
        espaco = 11;
        break;
      case 'op5':
        espaco = 11;
        break;
      default:
        espaco = 3;
        break;
    }
    return espaco;
  }

  renderEditaveis(stateName, key) {
    return (
      <Grid key={key} container item xs={12}>
        <Grid item xs={11}>
          <TextField
            className={this.props.classes.textField}
            fullWidth
            id={"standard-" + stateName}
            label={stateName}
            value={this.state[stateName]}
            onChange={this.handleChange(stateName)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color="primary"
            className={this.props.classes.iconButton}
            aria-label="Delete"
            onClick={() => this.handleClickDialogOpen(stateName)}>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    )
  }

  renderTextFieldStates(state, key) {
    return (
      <Grid key={key} item xs={3}>
        <TextField
          className={this.props.classes.textField}
          fullWidth
          id={"standard-" + state}
          label={state}
          value={this.state[state]}
          onChange={this.handleChange(state)}
          margin="normal"
        />
      </Grid>
    )
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        {
          this.state.snackLoader
            ? 
            <Grid container alignItems="center" direction="row" spacing={8}>
              <Grid container item xs={12}>
                <CircularProgress className={this.props.classes.progress} />
              </Grid>              
            </Grid>            
            :
            <Grid container alignItems="center" direction="row" spacing={8}>
              {
                this.state.lista_states.map((state, index) => (
                  state === 'enunciado' | state.includes('op')
                    ? this.renderEditaveis(state, index)
                    : this.renderTextFieldStates(state, index)
                ))
              }
              <Grid container item xs={12}>
                <Button className={this.props.classes.button} onClick={this.postQuestao} variant="contained" color="primary">
                  Adicionar
                </Button>
                <Button className={this.props.classes.button} onClick={this.cancelButtonClick} variant="contained" color="secondary">
                  Cancelar
                </Button>
              </Grid>
            </Grid>
        }

        <Dialog
          open={this.state.open}
          updatedialogtext={this.updatedialogtext}
          onClose={this.handleClose}
        />
        <SnackbarResponse
          snackMessage={this.state.snackMessage}
          color={this.state.snackColor}
          open={this.state.openSnack}
          onClose={this.handleSnackbarClose}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Admin);