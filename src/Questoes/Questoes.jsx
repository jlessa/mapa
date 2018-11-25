import React from 'react';
import QuestoesUpload from './QuestoesUpload';
import { AppBar, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import QuestoesAdmin from './QuestoesAdmin';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Questoes extends React.Component {
  state = {
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {   
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>        
        <div className={classes.root}>
          
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Tabela de Questões" />
              <Tab label="Adicionar Questão" />            
            </Tabs>
          </AppBar>
          {value === 0 && 
          <TabContainer>
            <QuestoesAdmin/>            
          </TabContainer>}
          {value === 1 && 
          <TabContainer>
            <QuestoesUpload/>
          </TabContainer>}
          
        </div>    
      </div>
    );
  }
}

export default withStyles(styles)(Questoes);