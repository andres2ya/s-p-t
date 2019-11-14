import React, { Component } from 'react'
import {createPortal} from "react-dom";
import {Route, Switch, withRouter} from "react-router-dom"
import Login from './Login-Components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Login}/>
          </Switch>
        </div>
        
      </div>
    )
  }
}
export default App