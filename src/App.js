import React, { Component } from 'react'
import {createPortal} from "react-dom";
import {Route, Switch, withRouter} from "react-router-dom"
import Inicio from './components/Inicio';

class App extends Component {
  render() {
    return (
      <div>
        Hola desde componente App
        <div>
          <Switch>
            <Route exact path='/' component={Inicio}/>
          </Switch>
        </div>
        
      </div>
    )
  }
}
export default App