import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';
import { NavigationActions } from 'react-navigation';

import ImageBack from '../../assets/image/img1.png';
import Icon from '../../assets/image/Icon.png';

export default class Login extends React.Component{
  static navigationOptions= {
  header:null

  };

  constructor(props){
super(props);
  this.state ={
    email:"",
    password:"",
  };
  }

  onLoginPress=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        this.props.navigation.push('Home')
      }, (error)=>{
        Alert.alert('Revisa tu usuario y contraseña');
      });
  };
render (){


  return (

  <ImageBackground source={require('../../assets/image/img6.png')} style={styles.ViewPager}>
      <View style={styles.container}>
          <Text style={styles.Title}>
            Corporación RICA

          </Text>

          <View style={styles.containerNested} >

            <Form>
              <Item floatingLabel>
                <Label  style={styles.LabelColor}>
                Correo electrónico
                </Label>
                <Input style={styles.LabelColor}  onChangeText={(text)=> { this.setState({email:text})}}
                keyboardType="email-address"

                autoCapitalize="none" />

              </Item>
              <Item floatingLabel>
                <Label style={styles.LabelColor}>
                 Contraseña
                </Label>
                <Input style={styles.LabelColor} onChangeText={(text)=> { this.setState({password:text})}}
              secureTextEntry={true}
              autoCorrect={false}
                autoCapitalize="none"
             />

              </Item>

            </Form>
            <View>
              <Button style={styles.buttonStyleRegister} onPress={this.onLoginPress}>
                <Text style={styles.LabelColor}>
                  Inicio
                </Text>
              </Button>


            </View>



          </View>

      </View>
    </ImageBackground>


  );
}


}
const styles = StyleSheet.create({
Title:{
  fontSize:20,
  justifyContent:'center',
  color:'white',
  fontWeigth: 'bold',
  marginTop: 20,
  marginBottom: 20
},
  ViewPager:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',


  },
  LabelColor:{
    alignSelf:'center',
    color: 'white',
    fontWeigth:'bold',

  },
  wrapperTitle:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
buttonStyle:{

  alignSelf:'center',
  marginTop:40,
  width:'90%',
  justifyContent:'center',
  alignItems:'center',
  marginBottom:6,
  backgroundColor: 'red'

},
buttonStyleRegister:{

alignSelf:'center',
marginTop:20,
width:'90%',
justifyContent:'center',
alignItems:'center',
marginBottom:6,
backgroundColor: 'black'

},
wrapper:{
flex:1,


},
colorText:{color:'white'},
container:{

alignItems:'center',
flex:1,

width:'90%',


},
containerNested:{



  width:'90%',
color:'white'

},

icons:{
widht:'15%',
height:'15%'

}


})
