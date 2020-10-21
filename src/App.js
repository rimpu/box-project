import React from 'react';
import { Switch, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Starred} from "./pages/Starred";
import "./index.css";
import Show from './pages/Show';

function App() {
  return (
      <Switch>
        <Route path="/" exact>
          <Home/> 
      </Route>
        <Route path="/starred" exact>
          <Starred />
      </Route>
      <Route exact path="/show/:id">
        <Show/>
      </Route>
        <Route>
          <div>This is 404 page</div>
      </Route>
      </Switch>
  );
}

export default App;
