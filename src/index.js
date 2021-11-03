import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Shop from './Components/Shop/Shop';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contactUs" component={App}  />
      <Route path="/whatWeDo" component={App}>
        <Route path="/whatWeDo/:name" component={App} />
      </Route>
      <Route path="/ourTeam" component={App} />
      <Route path="/history" component={App} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </BrowserRouter>,
document.getElementById('root')
);
