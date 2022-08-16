import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
  }


  entrar() {
    if (this.state.input.length > 0) {
      this.setState({ text: this.state.input });
    } else {
      alert('Digite seu nome');
      return;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(e) => this.setState({ input: e })}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent" />
        <Button title="Entrar" onPress={this.entrar} />
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
