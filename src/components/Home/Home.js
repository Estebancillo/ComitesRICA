	import React  from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Container, Content, Tabs, Tab} from 'native-base';
import Header from '../Comun/Header';
import Footer from '../Comun/Footer';
import Menu from '../Comun/Menu';
import SideMenu from 'react-native-side-menu';
import Tab1 from '../tabs/tab1';
import Tab2 from '../tabs/tab2';
import Tab3 from '../tabs/tab3';
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
					<Tabs initialPage={1}>
						<Tab heading="Tab1">
							<Map/>
						</Tab>
						<Tab heading="Tab2">
							<Tab2 />
						</Tab>
						<Tab heading="Tab3">
							<Tab3 />
						</Tab>
					</Tabs>
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
}
})
