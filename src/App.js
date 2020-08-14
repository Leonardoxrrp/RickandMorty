import React from 'react';
import Home from "../src/pages/Home";
import Name from "../src/pages/Name"
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>  
      <Route exact path="/" component={Home}/>
      <Route exact path="/Name" component={Name}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
