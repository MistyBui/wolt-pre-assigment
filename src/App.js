import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import RestaurantList from './components/RestaurantList';
import Details from './components/Details';
import {Switch, Route} from 'react-router-dom'
import Default from './components/Default';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path='/' component={RestaurantList}></Route>
        <Route path='/details' component={Details}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>

  );
}

export default App;
