import React, {Component} from 'react';
import {firebaseAuth} from '../Firebase/Firebase';
import {Container} from 'native-base';
import Home from './Home';
import Login from '../Login/Login';

export default class Authentication extends Component{

state = {
  loggedIn:null
};

componentWillMount(){
  firebaseAuth.OnAuthStateChanged((user)=>{
    if(user){
      this.setState({loggedIn: true})
    }

    else{
      this.setState({loggedIn: false})

    }

  });
}

  render(){
    return(
    <Container>
      {
        this.state.loggedIn
        ? <Home />
        : <Login />
      }
    </Container>

    );
  }
}
