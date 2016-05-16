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
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
var t = require('tcomb-form-native');
var Form = t.form.Form;

const styles = require('../style.js');


var TodoList = t.struct({txt: t.String, complete: t.Bool});

var options = {
    fields: {
        txt: {
            label: 'Yapılacaklar',
            placeholder: 'Yapılacakları girin',
            autoFocus: true
        },
        complete:{
          label:"Yapıldı mı?"
        }
    }
};

class NewList extends Component {
  constructor(props){
    super(props);
  }

  onPress(){
    var _ths = this;
    var value = this.refs.form.getValue();
    if(value){
      var txt = value.txt;
      var complete = value.complete;
      this.props.create({txt:txt,complete:complete});
      Alert.alert( 'Liste Oluşturuldu', null,[{text: 'Tamam', onPress: () => this.props.navigator.pop()  }] );
    }

  }



  render(){
    return(
      <View style={styles.container}>
      <View style={styles.form}>
      <Form
        ref="form"
        type={TodoList}
        options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}


module.exports = NewList;
