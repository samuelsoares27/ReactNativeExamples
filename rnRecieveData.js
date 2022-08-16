import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto) {
    this.setState({ text: texto });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.pegaNome}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent" />
        {
          this.state.text.length > 0 ?
            <Text style={styles.texto}>Bem vindo {this.state.text}</Text>
            :
            ''
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  }


});
