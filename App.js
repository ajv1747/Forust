import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//will need to add some things above this line eventually

import { API, graphqlOperation } from 'aws-amplify'
// import functions to mutate and query

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App)
// see the ToDo app for an example of how to work the withAuthenticator thing


//graphql endpoint: https://fqhumrtmdfbtpl7zxjpccarlbm.appsync-api.us-east-2.amazonaws.com/graphql