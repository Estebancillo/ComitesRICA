import React  from 'react';
import {StyleSheet, View, Text} from 'react-native';
export default class Home extends React.Component {
  render(){
    return(
      <View style={styles.wrapper}>
        <Text style={styles.title}>
            Fondo
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
flex:1,
alignSelf:'center',
justifyContent:'center',
widht:'100%',
alignItems:'center',
backgroundColor:'red'
},
title:{
  fontColor:'white',
  fontSize:20
}
})
