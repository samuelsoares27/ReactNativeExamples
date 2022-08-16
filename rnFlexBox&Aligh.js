import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.squadRed}>
        </View>
        <View style={styles.squadGreen}>
        </View>
        <View style={styles.squadYellow}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  principal: {
    flex: 1,
    flexDirection: 'row', // horizontal
    //flexDirection: 'column', // vertical
    //justifyContent: 'flex-end', // alinhar os elementos a direita
    //justifyContent: 'flex-start', // alinhar os elementos a esquerda
    //justifyContent: 'space-between', // alinhar os elementos ao meio
    justifyContent: 'space-around', // alinhar os elementos ao meio e ao lado
    alignItems: 'center', // alinhar os elementos ao centro
    //alignContent: 'flex-start', // alinhar os elementos ao topo
    //alignContent: 'flex-end', // alinhar os elementos ao fim

  },
  squadRed: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  squadGreen: {
    width: 50,
    height: 50,
    backgroundColor: 'green'
  },
  squadYellow: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow'
  }

});
