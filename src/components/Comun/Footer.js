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
        <FooterTab style={styles.wrapper}>

          <Button >
            <Icon name="users" style={styles.icon} />
            <Text style={styles.color}>Mis grupos</Text>
          </Button>

          <Button>
            <Icon name="calendar" style={styles.icon} />
            <Text style={styles.color}>Calendario</Text>
          </Button>

          <Button>
            <Icon name="tasks" style={styles.icon} />
            <Text style={styles.color}>Indicadores</Text>
          </Button>

          <Button>
            <Icon name="question-circle" style={styles.icon} />
            <Text style={styles.color}>Info</Text>
          </Button>

        </FooterTab>
      </Footer>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'red'

  },
  icon: {
    color: 'white',
    fontSize: 20
  },
  color: {
    color: 'white'
  }
});
