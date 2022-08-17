import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
          {/* }
            showsHorizontalScrollIndicator={false} desabilita o scroll horizontal
            showsVerticalScrollIndicator={false} desabilita o scroll vertical
            scrollEnabled={false} desabilita o scroll
            horizontal={true} mudar o scroll para horizontal          
          { */}
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    //width: 150
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
    //width: 150
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
    //width: 150
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
    //width: 150
  }
});


