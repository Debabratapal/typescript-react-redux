import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./route";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
