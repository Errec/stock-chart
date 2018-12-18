import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/Route";
import './index.sass';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
  </Router>,
  document.getElementById("root"));

serviceWorker.unregister();