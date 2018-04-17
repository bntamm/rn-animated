import { AppRegistry, Text, View, StatusBar, StyleSheet, TouchableOpacity, Button, Image, TextInput, Animated } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import FadeView from './components/FadeView'
import SlideView from './components/SlideView'
import TransformView from './components/TransformView'
import HelloApp from './components/HelloApp'
import ResponseView from './components/ResponseView'
import Bai12View from './components/Bai12View'


export default class App extends Component {
    render() {
        return (
          <View style = { styles.container } >
              <Bai12View/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'lightblue',
    },

});
