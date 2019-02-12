import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu';
import Questoes from './Questoes/Questoes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Relatorios from './Relatorios/Relatorios';
import NotFound from './NotFound/NotFound';
import Dashboard from './Dashboard/Dashboard';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Admin from './Admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu >
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/questoes" component={Questoes}/>
            <Route path="/video" component={VideoPlayer}/>
            <Route path="/relatorios" component={Relatorios}/>
            <Route path="/admin" component={Admin}/>
            <Route component={NotFound} />
          </Switch>
        </Menu>
      </BrowserRouter>      
    );
  }
}

export default App;
