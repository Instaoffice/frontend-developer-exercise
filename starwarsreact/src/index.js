import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Avatars from './components/Avatars';
import SelectedAvatar from './components/SelectedAvatar';
import './styles/index.scss';
import {Router, Route,browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/login" component={App}/>
      <Route path="/avatars" component={Avatars}/>
      <Route path="/avatars" component={Avatars}/>
      <Route path="/avatars/:avatar_name" component={SelectedAvatar}/>
  </Router>
  ,
  document.getElementById('root')
);
