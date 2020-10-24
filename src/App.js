import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home";
import { Starred } from "./pages/Starred";
import "./index.css";
import Show from './pages/Show';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/starred" exact>
          <Starred />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>
          <div>This is 404 page</div>
        </Route>
      </Switch>

    </ThemeProvider>
  );
}

export default App;
