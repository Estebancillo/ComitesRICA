import React from 'react';
import {createStackNavigator} from 'react-navigation';
//Componentes
import  Authentication from './src/components/Home/Authentication';
import Home from './src/components/Home/Home';
import groups from './src/components/groups/groups';
import Login from './src/components/Login/Login';
import Register from './src/components/Login/Register';
import Map from './src/components/Map/Map';
import consumo from './src/components/consumo/consumo';


const Routes = createStackNavigator({
  Authentication:Authentication,
  Login:Login,
  consumo:consumo,
  Map: Map,
  Register: Register,
  Home: Home,

  groups: groups,
},
{

  initialRoute: 'Authentication'
});

export default class App extends React.Component{
  render(){
    return(
      <Routes />
    );
  }
}
