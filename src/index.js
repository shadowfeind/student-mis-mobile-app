require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
