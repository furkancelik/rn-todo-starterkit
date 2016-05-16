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


// class Todo extends Component {
//
//   constructor(props) {
//     super(props);
//     var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, });
//     this.state = {
//       dataSource: ds.cloneWithRows(['Liste 1','liste 2']),
//       navigationBarHidden: false,
//       };
//
//     }
//
//     _renderScene(route,navigator){
//       if(route.id==1){
//         return <PageOne navigator={navigator} />
//       }
//       else if (route.id==2) {
//         return <PageTwo navigator={navigator} />
//       }
//
//     }
//
// renderList(rowData) {
//   return (
//     <Text>{rowData}</Text>
//     );
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//       <NavigatorIOS initialRoute={{ component:PageOne, title:"PageOne"}} renderScene={this._renderScene} />
//         <ListView dataSource={this.state.dataSource} renderRow={this.renderList} style={styles.listView} />
//         <TouchableHighlight
//                     style={[styles.button, styles.newButton]}
//                     underlayColor='#99d9f4'
//                     onPress={this.openItem}>
//                     <Text style={styles.buttonText}>+</Text>
//                 </TouchableHighlight>
//       </View>
//       );
//     }
//
//     openItem(){
//       this.props.toggleNavBar();
//       this.props.navigator.push({
//         title: "PageOne",
//         component: PageOne,
//         passProps: {
//           toggleNavBar: this.props.toggleNavBar,
//       }
//       });
//       // this.props.navigator.push({component:"PageOne",title:"PageOne"})
//     }
// }
//
// class MyView extends Component {
//   _handleBackButtonPress() {
//     this.props.navigator.pop();
//   }
//   _handleNextButtonPress() {
//     this.props.navigator.push(nextRoute);
//   }
//   render(){
//     return(
//       <View><Text>My View</Text></View>
//     );
//   }
// }
// module.exports = MyView;
//
//
// class PageOne extends Component {
//   _handlePress(){
//     this.props.navigator.push({id:1});
//   }
//   render(){
//     return (
//       <View>
//         <TouchableOpacity onPress={this._handlePress}>
//           <Text>Geri</Text>
//         </TouchableOpacity>
//           <Text>PageOne</Text>
//       </View>
//     )
//   }
// }
// module.exports = PageOne;
//
//
// class PageTwo extends Component {
//   _handlePress(){
//     this.props.navigator.pop();
//   }
//   render(){
//     return (
//       <View>
//         <TouchableOpacity onPress={this._handlePress}>
//           <Text>Geri</Text>
//         </TouchableOpacity>
//           <Text>PageTwo</Text>
//       </View>
//     )
//   }
// }
// module.exports = PageTwo;


AppRegistry.registerComponent('Todo', () => Todo);
