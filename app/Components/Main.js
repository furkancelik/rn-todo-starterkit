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
var ListItem = require('./ListItem.js');


class Main extends Component {
  constructor(props) {
        super(props);
        this.state = {
          items:[
            {id:1,txt:"Liste 1",complete:false},
            {id:2,txt:"Liste 2",complete:false},
            {id:3,txt:"Liste 3",complete:true},
          ],
        };
        this.createList = this.createList.bind(this);
        this.updateList = this.updateList.bind(this);
        // this.openListDetail = this.openListDetail.bind(this);
    }

    openNewList(rowData, rowID) {
       this.props.navigator.push({
           title: 'Yeni Liste Oluştur',
           component: NewList,
           passProps: {
             item:rowData,
             id:rowID,
             create: this.createList,
                 }
      });
   }


   createList(item){
     var items = this.state.items;
     items.push(item);
     this.setState({items: items});
   }

   updateList(item,id,frm){
      var items = this.state.items;
      var value = frm;//this.refs.form.getValue();
      console.log(frm)
      if(value){
        var txt = value.txt;
        var complete = value.complete;
        var i = 0;
        items.forEach((_item,index)=>{
          console.log(_item,_item.id,id);
          if(_item.id==item.id){
            items[index].txt = txt;
            items[index].complete = complete;
          }
        });
        this.setState({items: items});
        Alert.alert( 'Liste Düzenlendi', null,[{text: 'OK', onPress: () => this.props.navigator.pop()  }] );
      }


   }

   openListDetail(rowData,rowID){
     this.props.navigator.push({
         title:rowData.txt,
         component: ListDetail,
         passProps:{
           item:rowData,
           id:rowID,
           update:this.updateList,

         }
    });
   }

   openListDelete(id){
     var items = this.state.items;
     var i = 0;
     var index;
     items.forEach((_item,_index)=>{
       if(_item.id==id){
         index = _index;
        //  items[index].txt = txt;
        //  items[index].complete = complete;
        }
     });
     items.splice(index, 1);
     this.setState({items: items});
     Alert.alert( 'Liste Silindi', null,[{text: 'Tamam', onPress: () => this.props.navigator.pop()  }] );
   }

  //  renderListView(rowData,rowID){
  //    var id = "yy";
  //    return (
  //      <View id={id}>
  //        <TouchableOpacity id={id} onPress={this.openListDetail.bind(this)}>
  //         <Text id={id} style={[styles.listView,(rowData.complete)?styles.listComplate:null]}>{rowData.txt}</Text>
  //       </TouchableOpacity>
  //       <View style={styles.hr}></View>
  //     </View>
  //     );
  //  }

  render(){
    // var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, });
    // var items = ds.cloneWithRows(this.state.items);
    return(
      <View style={styles.container}>
      <ListItem items={this.state.items} openListDelete={this.openListDelete.bind(this)} openListDetail={this.openListDetail.bind(this)} {...this.props} />
        <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={this.openNewList.bind(this)}>
                    <Text style={styles.buttonText}>Yeni Liste Oluştur</Text>
                </TouchableHighlight>
      </View>
    );
  }
}


module.exports = Main;
