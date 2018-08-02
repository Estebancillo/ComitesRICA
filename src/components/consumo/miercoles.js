import React, {Component} from 'react';
import {Text,
  Header, Container, Content,Footer,FooterTab, Button, Left, Right,Body, Icon, Title} from 'native-base';
import {View,StyleSheet} from 'react-native';
import ListComponent from '../firedb/ListComponent';
import * as firebase from 'firebase';

export default class Miercoles extends Component {
constructor(props){
  super();
  this.state={
    lista:[
      {
        id:1,
        name:'Name 1',
        done: false
      },
      {
        id:2,
        name:'Name 2',
        done: false
      },
      {
        id:3,
        name:'Name 3',
        done: false
      },
    ]
  }
}
changeDone = item => {
  console.log(item);
  this.state.lista = this.state.lista.filter(i => i !== item);
  this.state.lista.push(item);
  this.setState({lista:this.state.lista});

}
agregarItem=()=>{
  let nuevo =this.state.nuevo
  nuevo = {id:nuevo, name:nuevo, done:false};
  firebase.database().ref('items').push(nuevo);
  this.state.list.push(nuevo);
  this.setState({Lista:this.state.lista});
}

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>


        <Content>
        <input value={this.state.nuevo}
        placeholder='Agregar'
        onChangeText={nuevo => this.setState({nuevo})}/>
          <View>
          <ListComponent
          lista={this.state.lista}
          changeDone={this.changeDone}/>

          </View>
        </Content>

        <Footer>
          <FooterTab>
            <Button full onPress={this.agregarItem}>
              <Text> ADD  </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({})

const firebaseConfig={
  apiKey: "AIzaSyCW6lGme6kxjd9M6Yh3zIJpGJfVxJ6zocM",
  authDomain: "comitesrica-393a6.firebaseapp.com",
  databaseURL: "https://comitesrica-393a6.firebaseio.com",
  projectId: "comitesrica-393a6",
  storageBucket: "comitesrica-393a6.appspot.com",
  messagingSenderId: "379893927399"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
