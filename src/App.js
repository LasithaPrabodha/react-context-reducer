import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddUser } from "./pages/AddUser";
import { EditUser } from "./pages/EditUser";
import { SignIn } from "./pages/SignIn";

import "bootstrap/dist/css/bootstrap.min.css";
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/add" component={AddUser} />

          <PrivateRoute component={Home} exact path="/" />
          <PrivateRoute component={EditUser} path="/edit/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
