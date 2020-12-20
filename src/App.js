
import './App.css';
import React, { useState } from "react";
import LoginPage from './component/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './component/Welcome';

class App extends React.Component {

  state={
    isLogged:false
  }

 handleLogIn = (isLogged) => this.setState({isLogged})

 render(){
  const {isLogged} = this.state;

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={( ) => !isLogged ? <LoginPage isLoggedIn={this.handleLogIn}/> : <Welcome/>}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
  
}

export default App;
