import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddUser } from "./pages/AddUser";
import { EditUser } from "./pages/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
