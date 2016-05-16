import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight,
  NavigatorIOS,
  Navigator,
  TouchableOpacity
} from 'react-native';

const styles = require('../style.js');
var Main = require('./Main.js');

class PageOne extends Component {
  constructor(props){
    super(props);
  }

  _handleBackButtonPress() {
    this.props.navigator.pop();
  }

  _handleNextButtonPress() {
    this.props.navigator.push(nextRoute);
  }

  _handlePress(rowData,rowID){
     this.props.navigator.push({
       title:"Main Page",
       index:1,
       component: Main

     });
  //this.props.initialRoute.push();
  }

  render(){
    return(
      <View style={{flex:1,paddingTop:40,flexDirection:"column",justifyContent:'center',backgroundColor:"blue"}}>
        <Text>Page One</Text>
        <TouchableOpacity style={{flex:1,marginTop:20}}
        onPress={this._handlePress.bind(this)}>
          <Text>Main Git</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


module.exports = PageOne;
