	import React  from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Container, Content, Tabs, Tab } from 'native-base';
import Header from '../Comun/Header';
import Footer from '../Comun/Footer';
import Menu from '../Comun/Menu';
import SideMenu from 'react-native-side-menu';

import Map from '../Map/Map';

export default class Home extends React.Component {
	static navigationOptions = {
		header: null

	};
	constructor(props){
		super(props);
		this.state={
		isOpen: false
		}
	}

toggle(){
	this.setState({
			isOpen: !this.state.isOpen

	})
}

updateMenu(isOpen){
	this.setState({isOpen})
}


	render(){

		return(

			<Container>
				<SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen)=> this.updateMenu(isOpen)}>
							<Header  toggle={this.toggle.bind(this)} />
							<View Style={styles.ContainerHome} >
								<Text>
									Welcome!
								</Text>
							</View>


							<Footer />
				</SideMenu>
			</Container>

			);
	}


}
const styles = StyleSheet.create({
wrapper:{
	flexDirection:'row',
	justifyContent:'center',
	alignItems:'center'
},
wrapperChild:{
	width:'auto',
	height:'auto',
	backgroundColor:'red'
},
Title:{
fontColor:'white',
fontWeigth:'bold',
fontSize:25

},
ContainerHome:{
	flex:1,
	backgroundColor:'white'
}

})
