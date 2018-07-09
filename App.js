import React from 'react';
import {createStackNavigator} from 'react-navigation';
//Componentes
import welcome from './src/components/welcome/welcome';
import Home from './src/components/Home/Home';
import groups from './src/components/groups/groups';
import Login from './src/components/Login/Login';
import Register from './src/components/Login/Register';
import Map from './src/components/Map/Map';
import consumo from './src/components/consumo/consumo';
import Miercoles from './src/components/consumo/miercoles';

const Routes = createStackNavigator({
  Miercoles:Miercoles,
  Login:Login,
  consumo:consumo,
  Map: Map,
  Register: Register,
  Home: Home,
  welcome: welcome,
  groups: groups,
},
{
  initialRoute: 'Miercoles'
}
);

export default class App extends React.Component{
  render(){
    return(
      <Routes />
    );
  }
}
