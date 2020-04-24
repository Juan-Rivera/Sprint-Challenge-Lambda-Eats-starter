import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import FormComp from './FormFront';

const App = () => {
  return (
    <div>
      <header><h1>Lambda Eats</h1></header>
      <Route exact path='/'>

      </Route>
      <Route path='/pizza'>
        <FormComp />
      </Route>
    </div>
  );
};
export default App;
