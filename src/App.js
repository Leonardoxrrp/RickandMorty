import React from 'react';
import Home from "../src/pages/Home";
import List from "../src/pages/List"
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>  
      <Route exact path="/" component={Home}/>
      <Route exact path="/List" component={List}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
