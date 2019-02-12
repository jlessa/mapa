  import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import VideocamIcon from '@material-ui/icons/Videocam';
import BarChartIcon from '@material-ui/icons/BarChart';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
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
    <ListItem button component={Link} to='/video'>
      <ListItemIcon>
        <VideocamIcon />
      </ListItemIcon>
      <ListItemText primary="Video" />
    </ListItem>
    <ListItem button component={Link} to='/relatorios'>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItem>    
    <ListItem button component={Link} to='/admin'>
      <ListItemIcon>
        <SupervisedUserCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItem>    
  </div>
);
