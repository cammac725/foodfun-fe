import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux' 

import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import MyMeals from './components/MyMeals'
import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        
        <PrivateRoute path='protected' component={MyMeals} />
      
        </div>
      );
    }
  }

export default App;
