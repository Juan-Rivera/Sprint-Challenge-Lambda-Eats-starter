import React from "react";
import { Route, Link } from 'react-router-dom'
import FormComp from './FormFront';

import './App.css';

const App = () => {
  return (
    <div>
      <header><h1>Lambda Eats</h1></header>
      <Route exact path='/'>
        <Link to='/pizza'><button> Build your own pizza!</button></Link>
      </Route>
      <Route path='/pizza'>
        <Link to='/'><button>go back home</button></Link>
        <FormComp />
      </Route>
    </div>
  );
};
export default App;
