import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Text style={[styles.textPrincipal, styles.linhaTexto]}>Texto 1</Text>
        <Text style={styles.linhaTexto}>Texto 2</Text>
        <Text style={styles.textPrincipal}>Texto 3</Text>
        <Text style={styles.linhaTexto}>Texto 4</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop: 40
  },
  textPrincipal: {
    fontSize: 25,
    color: '#004'
  },
  linhaTexto: {
    textAlign: 'center',
  }

});
