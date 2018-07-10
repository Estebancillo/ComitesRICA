import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Footer, FooterTab, Button, StyleProvider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Footers extends Component {

  static navigationOptions = {
    header: null
  };
  render(){

    return(

    <View Style={styles.wrapper}>
      <Footer style={styles.wrapper}>
      <Text style={styles.Title}>
        RICA V1.0
      </Text>
      </Footer>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'red',
    justifyContent:'center',
    alignItems:'center',

  },
  Title:{
    fontColor: 'white',
  },
  icon: {
    color: 'white',
    fontSize: 20
  },
  color: {
    color: 'white'
  }
});
