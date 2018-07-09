import React from 'react';
import {View,Text,StyleSheet, FlatList} from 'react-native';


export default class API extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      loading: false,
      data:[],
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }
  }
    componentDidMount(){
      this.getSpotify();

    }

    getSpotify = () =>{
      this.setState({loading: true})
      fetch(this.state.url).then(res => res.json()).then(res => {
        this.setState({
          data : res.results,
          url : res.next,
          loading: false
        })
      });
    };

  render(){
    if(this.state.loading){

      return(

        <View>
        <Text>
          Gueten Tag
        </Text>
        </View>


      );
    }
    return(
      <View>
      <FlatList
      data={this.state.data}
      renderItem={
        ({item})=> <Text> {item.name} </Text>

      }
      keyExtractor={(item,index)=> index.toString()}
      />
      </View>
    );

  }
}
