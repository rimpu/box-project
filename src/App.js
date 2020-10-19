import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import {Home} from "./pages/Home";
import {Starred} from "./pages/Starred";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home/> 
      </Route>
        <Route path="/starred" exact>
          <Starred />
      </Route>
        <Route>
          <div>This is 404 page</div>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
