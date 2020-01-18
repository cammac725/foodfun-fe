import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux' 

import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import MyMeals from './components/MyMeals'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        
        <PrivateRoute path='protected' component={MyMeals} />

        <Route exact path='/' component={Login} />
        <Route path='' component={Register} />
        <Route path='' component={Login} />
        <Route path='' component={Meal} />
        <Route path='' component={AddMeal} />
        <Route path='' component={UpdateMeal} />
      
        </div>
      );
    }
  }

  const mapStateToProps = ({ meals }) => ({
    meals
  })

export default connect(mapStateToProps, {})(App);
