import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.Entrar = this.Entrar.bind(this);
  }

  Entrar(nome) {
    this.setState({ nome: nome })
  }


  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>{this.state.nome}</Text>
        <Button title="Alterar Nome" onPress={() => this.Entrar('samuca')} />
      </View>
    )
  }
}
