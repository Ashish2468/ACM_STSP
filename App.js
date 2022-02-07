import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    // <View style={{flex:1,flexDirection: 'row'}}>
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#419cfa', flex: 1 }} />
      <View style={{ backgroundColor: '#ae2012', flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#412cf1', flex: 1 }} />
        <View style={{ backgroundColor: '#911cf1', flex: 1 }} />
        {/* <Text>dsvsdvsdv</Text> */}
      </View>
      {/* <View style={{ backgroundColor: 'green', flex: 1 }}  */}
      <View style={{ backgroundColor: '#ae2012', flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#11b3f1', flex: 1 }} />
        <View style={{ backgroundColor: '#991a11', flex: 1 }} />
        <View style={{ backgroundColor: '#9e9b19', flex: 1 }} />
        {/* <Text>dsvsdvsdv</Text> */}
      </View>
    </View>
  );
};
export default App;
