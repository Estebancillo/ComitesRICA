import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Badge, Left, Right, Body, Switch} from 'native-base';
import {TouchableWithoutFeedback, Animated, Alert} from 'react-native';

const ACTION_TIMER = 400;

export default class RowComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      done:false,
      pressAction: new Animated.Value(0),
      item: null
    };
  }

componentWillMount(){
  this._value=0;
  this.state.pressAction.addListener((v)=>this._value  = v.value);
}
changeDone= (item)=>{
  console.log(item);
}
pressIn=()=>{
  Animated.timing(this.state.pressAction,{
    duration:ACTION_TIMER,
    value:1

  }).start(this.animationActionComplete);
}
animationActionComplete = () =>{
  const message = '¿Eliminar Item?'
  if (this._value===1){
    Alert.alert(
      'ELIMINAR',
      message
    );
  }
}
  render(){
    return(
      <TouchableWithoutFeedback
      onPressIN={this.pressIn}
      onPressOUT={this.pressOut}>
            <ListItem Icon>
              <Left>
                <Icon name="menu"/>

              </Left>

              <Body>
                <Text>
                  {this.props.item.name}
                </Text>
              </Body>
              <Right>
                <Switch onValueChange={()=>{this.props.item.done= !this.props.item.done;
                this.props.changeDone(this.props.item)}}
                  value={this.props.item.done}/>
              </Right>


            </ListItem>
      </TouchableWithoutFeedback>

    );
  }
}
