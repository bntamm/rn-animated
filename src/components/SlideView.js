import {
  AppRegistry, Text, View, StatusBar, StyleSheet, TouchableOpacity,
  Button, Image, TextInput, Animated,Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from "react";



export default class SlideView extends Component {
constructor(props){
  super(props);
  this.state ={
    slideAnim1: new Animated.Value(-700),
    slideAnim2: new Animated.Value(-700),    //Gán -700 là chưa hiện gì lên
  }
}
componentDidMount(){
  const anim1 = Animated.timing(
    this.state.slideAnim1,
    {
      toValue:0 ,
      duration:2000,
      //easing: Easing.bounce
      easing: Easing.ease
    });

  const anim2 = Animated.timing(
    this.state.slideAnim2,
    {
      toValue:0 ,
      duration:2000,
      //easing: Easing.bounce
      easing: Easing.ease
    });

  // Animated.sequence([anim1 , anim2]).start();
  Animated.stagger(200 , [anim1 , anim2]).start();
}
    render() {
      const marginLeft1 = this.state.slideAnim1;
      const marginLeft2 = this.state.slideAnim2;
        return (
          <View  >

              <Animated.View style = {{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
              width:200,
              height:150,
              marginBottom:30,
              marginLeft : marginLeft1
              }}>

                <Text>TamBui hehehehehe</Text>
              </Animated.View>


              <Animated.View style = {{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
              width:200,
              height:150,
              marginLeft : marginLeft2
              }}>

                <Text>TamBui hehehehehe</Text>
              </Animated.View>

            </View>
        );
    }
}
