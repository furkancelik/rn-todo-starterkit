'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

module.exports = StyleSheet.create({
  navigator: {flex: 1},
  container: {

        justifyContent: 'center',
        marginTop: 65,
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        width:width
      },
      buttonText: {
             fontSize: 18,
             color: 'white',
             alignSelf: 'center'
         },

         button: {
             height: 36,
             backgroundColor: '#48BBEC',
             alignSelf: 'stretch',
             justifyContent: 'center'
         },

         saveButton: {
             borderColor: '#48BBEC',
             borderWidth: 1,
             borderRadius: 8,
         },

         newButton: {
             marginBottom: 0,
             borderRadius: 0,
             position:'absolute',
             bottom:0,
             left:0,
             width:width,

         },

         todo: {
             marginTop: 100,
             flex: 1,
             padding: 10,
             backgroundColor: '#ffffff',
         },

         txt: {
             fontSize: 18,
             marginLeft: 5,
             marginTop: 2,
             color: '#222222',
         },

         completed: {
             color: '#cccccc'
         },

         hr: {
             backgroundColor: 'rgba(0, 0, 0, 0.4)',
             height: 1,
             marginLeft: 0,
             marginRight: 0,
         },
         listView:{
           padding:10,
           flex:1,
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'flex-start',
           width:width
         },
         form:{
           flex:1,
           padding:20,
           backgroundColor: '#ffffff',
         },
         listComplate:{
           backgroundColor:"#f0f0f0",
           color:"#ccc",
           textDecorationLine:"line-through",
         }
});
