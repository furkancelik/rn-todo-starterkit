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

const styles = require('./app/style.js');
var Main = require('./app/Components/Main.js');

class Todo extends Component {


  render(){
    return(
      <NavigatorIOS style={styles.navigator}
        initialRoute={{ component: Main, title: 'Yapılacaklar' }} />
    );
  }

}


AppRegistry.registerComponent('Todo', () => Todo);
