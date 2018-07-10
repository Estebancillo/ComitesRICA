import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {

	return (
		<View style={styles.container}>

		 <TouchableWithoutFeedback onPress={()=> props.toggle()}>
			<Icon name='bars' color='white' size={25} />
		</TouchableWithoutFeedback>


			<Image  style={styles.logo} source={require('../../assets/image/img3.png')}/>



		<TouchableWithoutFeedback>
			<Icon name='search' color='white' size={25} />
		</TouchableWithoutFeedback>


		</View>

		);
}
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		height:60,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FF0000',
		paddingHorizontal:15

	},
	logo: {
	width: 140,
	height: 60,
	
}
})
export default Header
