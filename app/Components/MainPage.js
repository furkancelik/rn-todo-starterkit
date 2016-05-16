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
var PageOne = require('./PageOne.js');


class MainPage extends Component {
  constructor(props) {
        super(props);
    }

    openItem(rowData, rowID) {
       this.props.navigator.push({
           title: 'PageOne',
           component: PageOne
      });
   }

  render(){
    return(
      <View style={styles.container}>
      <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={this.openItem}>
                    <Text style={styles.buttonText}>Yeni Liste Oluştur</Text>
                </TouchableHighlight>
      </View>
    );
  }
}


module.exports = MainPage;
