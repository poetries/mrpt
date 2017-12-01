import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; //v4
import HomePage from './containers/HomePage';
import AuthRouter from './components/AuthRouter';
import Login from './containers/Login';
import Search from './containers/Search';
import Customer from './containers/Customer';
import NotFindPage from './containers/NotFindPage';

class App extends Component {
  render() {
    return (
      <div className="App">
           <AuthRouter /> {/*授权路由*/}
           <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/customer' component={Customer} />
                <Route  component={NotFindPage} />
            </Switch>
      </div>
    );
  }
}

export default App;
