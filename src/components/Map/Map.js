import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';



export default class Mapa extends Component {
  constructor() {
     super();
   }


render(){
  return(
    <View style={styles.container}>
    <MapView
    style={ styles.mapita }
    initialRegion={{
      latitude: 20.0692162,
      longitude: -98.752174,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }}>

      <MapView.Marker
        coordinate={{
          latitude: 20.0692162,
          longitude: -98.752174,

        }}>
        <View style={styles.radious}>
          <View style={styles.market} />
        </View>
        </MapView.Marker>

    </MapView>
    </View>

  );
}

}

const styles =StyleSheet.create({
  radious:{
    height:50,
    width: 50,
    borderRadius:50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,0,0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,0,0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  market:{
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#FF0000'

  },
container:{
  position:'absolute',
  top: 0,
  left: 0,
  bottom:0,
  right:0,
  justifyContent:'flex-end',
  alignItems:'center'
},
mapita:{
  position:'absolute',
  top: 0,
  left: 0,
  bottom:0,
  right:0,
}

})
