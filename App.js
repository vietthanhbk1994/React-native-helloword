import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootComponent from './navigation/RootComponent';
import LoginContainer from './components/LoginContainer';

export default class App extends React.Component {
  render() {
    return (
      <LoginContainer />
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
