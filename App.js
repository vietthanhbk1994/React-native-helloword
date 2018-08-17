import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootComponent from './navigation/RootComponent';

export default class App extends React.Component {
  render() {
    return (
      <RootComponent />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
