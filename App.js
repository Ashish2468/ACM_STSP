import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const App = () => {
  return (
    // <View style={{flex:1,flexDirection: 'row'}}>
    <View style={{ flex: 1 }}>
      <Icon name="mobile" size={50} color="#4bac31" />
      {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient> */}
      <Button title='Hdfvdfvdfv I' onPress={() => { alert('Hi hell svadsv o 123') }} />
      <Text style={styles.text}>Jsrgsr uihuinjkn</Text>
      <View style={{ backgroundColor: '#9e9b19', flex: 1 }} />
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

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 20, color: "#2ac41b", fontWeight: "500", alignSelf: 'center', fontFamily: "Poppins-Bold"
  }
});

// import React, { useRef, useEffect } from 'react';
// import { Animated, Text, View } from 'react-native';

// const FadeInView = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

//   useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 3000,
//       }
//     ).start();
//   }, [fadeAnim])

//   return (
//     <Animated.View                 // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim,         // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <FadeInView style={{width: 250, height: 50, backgroundColor: 'green'}}>
//         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fa ddssdvsd ing in</Text>
//       </FadeInView>
//     </View>
//   )
// }