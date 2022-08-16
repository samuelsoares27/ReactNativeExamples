import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.squadRed}>
          <Text style={styles.text}>Squad 1</Text>
        </View>
        <View style={styles.squadGreen}>
          <Text style={styles.text}>Squad 2</Text>
        </View>
        <View style={styles.squadYellow}>
          <Text style={styles.text}>Squad 3</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  principal: {
    flex: 1, // ocupa todo o espaço disponivel 
    backgroundColor: '#000',
  },
  squadRed: {
    flex: 1,
    backgroundColor: 'red'
  },
  squadGreen: {
    flex: 1,
    backgroundColor: 'green'
  },
  squadYellow: {
    flex: 2,
    backgroundColor: 'yellow'
  }

});
