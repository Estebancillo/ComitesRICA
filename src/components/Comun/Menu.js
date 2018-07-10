import React, {Component} from 'react';
import {Dimensions, StyleSheet, View,Text,Image,ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Container, Header, Content, Accordion } from 'native-base';



const {widht, height} = Dimensions.get('window')


class Menu extends Component{
  render(){
    return(
      <View style={styles.menu}>

        <View>
          <Text style={styles.title}>
            MENÚ
          </Text>
        </View>

        <View >
          <TouchableHighlight>
            <Button transparent>
              <Icon name="home" style={styles.icon}  />
              <Text style={styles.subtitle}> Home </Text>



            </Button>

          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight>
            <Button transparent>
              <Icon name="archive" style={styles.icon}  />
              <Text style={styles.subtitle}> Órganos de Gobierno </Text>



            </Button>

          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight>
            <Button transparent>
              <Icon name="bar-chart-o" style={styles.icon}  />
              <Text style={styles.subtitle}> Indicadores </Text>

            </Button>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight>
            <Button transparent>
              <Icon name="calendar" style={styles.icon}  />
              <Text style={styles.subtitle}> Calendario </Text>

            </Button>
          </TouchableHighlight>
        </View>


      </View>

    );
  }
}

const styles =StyleSheet.create({
wrapperMenu:{
borderColor:'white',
backgroundColor:'transparent',
borderStyle:'solid'

},
  menu:{
    flex:1,
    widht: widht,
    height: height,
    backgroundColor: 'rgba(0,0,0,.9)',


  },
  title:{
    fontSize:25,
    color:'white',
    marginTop:25,
    marginLeft:7,


  },
  buttonMenu:{

    widht: 240,
    marginTop:20,
  backgroundColor:'transparent',
    marginLeft:7,
  },
  icon:{
    fontSize:15,
    color:'white',
    marginLeft:5,
  },
  subtitle:{
    color:'white',
    fontSize:20,
    marginLeft:5,
  }
})

export default Menu
