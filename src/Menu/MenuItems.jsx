  import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import {Link} from 'react-router-dom';

export const MenuItems = (
  <div>
    <ListItem button component={Link} to='/'>      
      <ListItemIcon >
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />      
    </ListItem>
    <ListItem button component={Link} to='/questoes'>
      <ListItemIcon>
        <QuestionAnswer />
      </ListItemIcon>
      <ListItemText primary="Questões" />
    </ListItem>
    <ListItem button component={Link} to='/usuarios'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>
    <ListItem button component={Link} to='/relatorios'>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItem>    
  </div>
);
