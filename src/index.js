import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contactUs" component={ContactUs}  />
      <Route path="/whatWeDo" component={Teams}>
        <Route path="/whatWeDo/:name" component={Teams} />
      </Route>
      <Route path="/ourTeam" component={Tournaments} />
      <Route path="/history" component={Camps} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </BrowserRouter>
document.getElementById('root')
);
