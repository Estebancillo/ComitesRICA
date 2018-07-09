import React, {Component} from 'react';
import {Dimensions, StyleSheet, View,Text,Image,ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Container, Header, Content, Accordion } from 'native-base';


const dataArray = [
  { title: "Comites RICA", content: "Organos de gobierno"},

];

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
        <View style={styles.wrapperMenu}>
          <TouchableHighlight>
            <Button style={styles.buttonMenu}>
              <Icon name="home" style={styles.icon}  />
              <Text style={styles.subtitle}> Home </Text>



            </Button>

          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight>
            <Button style={styles.buttonMenu}>
              <Icon name="bar-chart-o" style={styles.icon}  />
              <Text style={styles.subtitle}> Organos de Gobierno </Text>



            </Button>

          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight>
            <Button style={styles.buttonMenu}>
              <Icon name="bar-chart-o" style={styles.icon}  />
              <Text style={styles.subtitle}> Indicadores </Text>



            </Button>

          </TouchableHighlight>
          <Container stye={{backgroundColor:'black'}}>

                <Content padder>
                <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
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
    marginTop:15,
    marginLeft:15,

  },
  buttonMenu:{

    widht: 240,
    marginTop:20,
  backgroundColor:'transparent'
  },
  icon:{fontSize:15,color:'white'},
  subtitle:{color:'white',fontSize:20}
})

export default Menu
