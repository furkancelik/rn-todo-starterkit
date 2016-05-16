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
var t = require('tcomb-form-native');
var Form = t.form.Form;


const styles = require('../style.js');
var Main = require('./Main.js');

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



class ListDetail extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.form}>
      <Form
        ref="form"
        type={TodoList}
        options={options}
        value={this.props.item}
          />
          <TouchableOpacity style={styles.button} underlayColor='#99d9f4' onPress={()=>this.props.update(this.props.item,this.props.id,this.refs.form.getValue())}>
            <Text style={styles.buttonText}>Düzenle</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
  }
}


module.exports = ListDetail;
