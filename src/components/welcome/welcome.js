import React  from "react";
import { Text
		, View
		, ViewPagerAndroid
		, StyleSheet
		, ImageBackground
		, Image


 } from "react-native";

 import {Button} from 'native-base';
 import Img1 from '../../assets/image/img1.png';


export default class welcome extends React.Component {
	static navigationOptions = {
    header: null
  };
render(){

return(

	<ViewPagerAndroid  style={styles.viewPager} initialPage={0} >

				<View style={styles.wrapper} key='1' >
							<View style={styles.wrapperTitle}>
								<Image source={require('../../assets/image/img1.png')} />
							</View>
							<View>
								<Text style={styles.Subtitle}>
									ÓRGANOS DE GOBIERNO
								</Text>
							</View>
				</View>


				<View style={styles.wrapper} key='2' >
							<View style={styles.wrapperTitlePage2}>
								<Text style={styles.Subtitle}>
									Indicadores Financieros
								</Text>
								<Button onPress={()=>this.props.navigation.push('Home')}>
									<Text > Inicio </Text>
								</Button>
							</View>

				</View>

</ViewPagerAndroid>

	);
}

}

const styles = StyleSheet.create({
	viewPager:{

		flex:1
	},
	Title:{
		fontSize:40,
		fontWeigth: 'bold',
		color: 'white',

	},

	Subtitle:{
		fontSize:20,
		fontWeigth: 'bold',
		color: 'white',
		paddingBottom: 50,
	},
	wrapper:{
		backgroundColor:'red',
		flex:1,
		justifyContent :'center',
		alignItems:'center'

	},
	wrapperTitle:{
		flex:1,
		justifyContent: 'center',
		alignItems:'center'
	},
	wrapperTitlePage2:{
		flex:1,

	},
	wrapperSubtitle:{
		flex:1,
		justifyContent: 'center',
		alignItems:'center',

	},
	Background:{
		width: '15%',
		height: '15%'

	},
	wrapperImage:{
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'

	}


})
