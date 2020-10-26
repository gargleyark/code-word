/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import { SocketProvider } from 'context/socket';
import { ErrorProvider } from 'context/error';
import TeamColor from 'components/TeamColor/TeamColor';

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

const gameId = window.location.search.match(/\d+\.\d+/);

if (!window.location.href.match(/localhost/)) {
  window.console.log = () => {}
}

ReactDOM.render(
  <Router history={hist}>
    <SocketProvider>
      <ErrorProvider>
        <TeamColor>
          <Switch>
            <Route path="/adventure" component={Admin} />
            <Route path="/create" component={Admin} />
            <Route path="/rtl" component={RTL} />
            {
              gameId ? <Redirect to={`/adventure/dashboard/?id=${gameId[0]}`} /> : ''
            }
            <Redirect from="/" to="/adventure/create" />
        </Switch>
        </TeamColor>
      </ErrorProvider>
    </SocketProvider>
  </Router>,
  document.getElementById("root")
);
