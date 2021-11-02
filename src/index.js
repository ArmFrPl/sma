import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <BrowserRouter>
  <ChakraProvider>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/contactUs" component={ContactUs}  />
      <Route path="/whatWeDo" component={Teams}>
        <Route path="/whatWeDo/:name" component={Teams} />
      </Route>
      <Route path="/ourTeam" component={Tournaments} />
      <Route path="/history" component={Camps} />
      <Route path="/shop" component={Shop} /> */}
    </Switch>
    </ChakraProvider>
  </BrowserRouter>,
document.getElementById('root')
);
