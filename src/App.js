import React from 'react';
import Home from "../src/pages/Home";
import List from "../src/pages/List"
import {HashRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <Switch>  
      <Route exact path="/" component={Home}/>
      <Route exact path="/List" component={List}/>
    </Switch>
    </HashRouter>
  );
}

export default App;
