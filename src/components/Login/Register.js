import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Alert} from 'react-native';
import {Button, Form, Item, Label, Input, Icon} from 'native-base';




export default class Register extends React.Component{
  static navigationOptions= {
  header:null

  };
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      passwordConfirm:"",
    };

  }
onSingupPress=()=>{
  if (this.state.password !== this.state.passwordConfirm){
    Alert.alert("Password no coinciden");
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(()=>{
    this.props.navigation.push('Login')
  }, (error)=>{
    Alert.alert("completa Los campos")
  });
}

render(){
return(
  <ImageBackground source={require('../../assets/image/img6.png')} style={styles.ViewPager}>
  <View style={styles.view}>
      <Text style={styles.Title}>
        Registro
      </Text>
      <View style={styles.containerStyle}>
        <Form>

          <Item floatingLabel>
            <Label style={styles.color}>Correo electrónico</Label>
            <Input style={styles.color} onChangeText={(text)=> this.setState({email:text})}
            keyboardType="email-address"
            autoCapitalize="none"/>

          </Item>

          <Item floatingLabel>
            <Label style={styles.color}>Password</Label>
            <Input style={styles.color} onChangeText={(text)=> this.setState({password:text})}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"/>



          </Item>

          <Item floatingLabel>
            <Label style={styles.color}>Confirmar Password</Label>
            <Input style={styles.color} onChangeText={(text)=> this.setState({passwordConfirm:text})}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"/>


          </Item>

        </Form>

        <Button style={styles.buttonStyle} onPress={this.onSingupPress}>
        <Text style={styles.color}>
        Registrar
        </Text>
        </Button>
      </View>
  </View>
  </ImageBackground>

);

}


}
const styles = StyleSheet.create({
Title:{
  color: 'white',
  fontSize: 35,
  marginBottom: 10,
  marginTop: 30
},
ViewPager:{
  flex:1
},
view:{

  alignItems:'center',
  flex:1

},
containerStyle:{
  height:'60%',
  width:'80%',
  backgroundColor:'rgba(255,255,255,.1)',
  alignSelf:'center'
},

color:{
color:'white'

},
buttonStyle:{
  alignSelf:'center',
  marginTop:20,
  backgroundColor:'rgba(0,0,0,.8)',
  width: '100%',
  justifyContent:'center',
  alignItems:'center',
  fontColor:'white',
  borderRadious:0,
  fontWeigth:'bold',

}
})
