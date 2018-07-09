import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {

	return (
		<View style={styles.container}>

		 <TouchableWithoutFeedback>
			<Icon name='bars' color='white' size={25} />
		</TouchableWithoutFeedback>


    <Text style={styles.Title}>
      Organos de Gobierno
    </Text>


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
	backgroundColor:'white'
},
Title:{
  fontSize:35,
  color: 'white'
}
})
export default Header
