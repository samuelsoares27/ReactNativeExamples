import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


export default class App extends Component {
  render() {

    let nome = 'Samuel';
    let url = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Text>Hello World</Text>
        <Text style={{ color: 'red', fontSize: 20, margin: 20 }}>{nome}</Text>
        <Jobs largura={500} altura={200} nome={nome} url={url} />
      </View>
    )
  }
}

class Jobs extends Component {
  render() {

    return (
      <View>
        <Image source={{ uri: this.props.url }} style={{ width: this.props.largura, height: this.props.altura }} />
        <Text>{this.props.nome}</Text>
      </View>
    )
  }
}
