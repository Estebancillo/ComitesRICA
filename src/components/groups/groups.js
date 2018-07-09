import React  from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Container, Content } from 'native-base';
import Header from '../Comun/HeaderGroups';
import Footer from '../Comun/Footer';
export default class Home extends React.Component {
static navigationOptions = {
  header: null

};
render(){

  return(

    <Container>

      <Header />

      <Content>
        <Text>
          Organos de gobierno
        </Text>
      </Content>

      <Footer />
    </Container>

    );
}

}

const styles = StyleSheet.create({
Title:{
  fontSize:40,
  fontWeigth: 'bold',
  fontColor: 'black'

}

})
