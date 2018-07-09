import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Badge, Left, Right, Body} from 'native-base';
import RowComponent from './RowComponent';

export default class ListComponent extends Component {
  render(){
    return(
      <Container>
        <Content>
          {this.props.lista.mapa(
            item=> <RowComponent
            key = {item.id}
            item = {item}
            changeDone= {this.props.changeDone}
            borrar= {this.borrar}/>
          )}
        </Content>
      </Container>
    );
  }
}
