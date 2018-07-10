import React from 'react';
import {createStackNavigator} from 'react-navigation';
//Componentes
import Home from './src/components/Home/Home';
import groups from './src/components/groups/groups';
import Login from './src/components/Login/Login';
import Register from './src/components/Login/Register';
import Map from './src/components/Map/Map';
import consumo from './src/components/consumo/consumo';
import ImagePicker from './src/components/consumo/ImagePicker';
import Inicio from './src/components/Home/Inicio';

const Routes = createStackNavigator({
  ImagePicker:ImagePicker,
  Inicio: Inicio,
  Login:Login,
  consumo:consumo,
  Map: Map,
  Register: Register,
  Home: Home,
  groups: groups,
},
{
  initialRoute: 'ImagePicker'

});

export default class App extends React.Component{
  render(){
    return(
      <Routes />
    );
  }
}
