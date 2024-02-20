import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ConferencePage from "./components/ConferencePage/ConferencePage";
import PreferencesPage from "./components/PreferencesPage/PreferencesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/conference" component={ConferencePage} />
          <Route path="/preferences" component={PreferencesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
