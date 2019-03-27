import React, {Component, PropTypes} from 'react';
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} = ReactNative;

var deviceWidth = Dimensions.get('window').width;

class Cart extends Component
{
   render(){

	var payments = [];



	return (
		<View style={styles.container_view_style}>
		</View>
	)
}
}

var styles = StyleSheet.create({
  container_view_style:
  {
  	flex: 1,
  	backgroundColor: '#ffffff'
  },
  scroll_view_style:
  {
  	marginLeft:20,
  	marginRight:20,
  },
  title_style:
  {
  	fontSize: 17,
  	marginTop:50,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily:'Helvetica Neue',
    color:'#ff0000',
  },
  cell_view_style:
  {
	marginBottom: 10
  },
  cell_inner_view_style:
  {
	padding:10,
	backgroundColor: '#eeeeee',
  },

  name_text_style:
  {
	fontSize: 17,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily:'Helvetica Neue',
    color:'#00ff00',
  },
  description_text_style:
  {
	fontSize: 12,
    marginBottom: 3,
    textAlign: 'left',
    fontFamily:'Helvetica Neue',
    color:'#000000',
  },
  cost_text_style:
  {
	fontSize: 14,
    textAlign: 'right',
    fontFamily:'Helvetica Neue',
    color:'#000000',
  },
});
