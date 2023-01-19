import React , {Component} from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://w7.pngwing.com/pngs/631/219/png-transparent-donor-logo-blood-donation-world-blood-donor-day-american-red-cross-donate-miscellaneous-emblem-heart.png" };

const App = () => (
 
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>life saver</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;