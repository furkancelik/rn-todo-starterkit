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
  Alert
} from 'react-native';

const styles = require('../style.js');

var NewList = require('./NewList.js');
var ListDetail = require('./ListDetail.js');


class ListItem extends Component {
  constructor(props) {
        super(props);
    }


    // openListDetail(rowData, rowID){
    //   console.log(this.props);
    //    this.props.navigator.push({
    //        title: 'ListDetail',
    //        component: ListDetail,
    //        passProps:{
    //          item:rowData,
    //          id:rowID,
    //         //  update:this.updateList,
    //
    //        }
    //   });
    // }

   renderListView(rowData,rowID){
     return (
       <View>
        <TouchableOpacity onLongPress={()=>this.alertMenu(rowData,rowID)} onPress={()=>this.props.openListDetail(rowData,rowID)}>
          <Text style={[styles.listView,(rowData.complete)?styles.listComplate:null]}>{rowData.txt}</Text>
        </TouchableOpacity>
        <View style={styles.hr}></View>
      </View>
      );
   }

   alertMenu(rowData,rowID){
     Alert.alert( rowData.txt, null,[{text: 'Düzenle', onPress: () => this.props.openListDetail(rowData,rowID)  },{text: 'Sil', onPress: () => this.props.openListDelete(rowData.id)   }] );
   }

  render(){
    var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, });
    var items = ds.cloneWithRows(this.props.items);
    return(
        <ListView style={{marginTop:-65}}
          dataSource={items}
          renderRow={this.renderListView.bind(this)}
        />
        );
  }
}


module.exports = ListItem;
