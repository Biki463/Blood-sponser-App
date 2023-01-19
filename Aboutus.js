import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJk0OfAKQJD0kDDEstaVGngf-eBaCpjv64PldyuYv&s',
          }}
          //borderRadius will help to make Round Shape
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2
          }}
        />< Text style={{backgroundColor:'red',color:'yellow',fontSize:25,fontStyle:'italic',fontWeight:'bold',marginTop:5,textAlign:'center'}}>NEPAL BLOOD DONNER ORGANIZATION</Text>
      
        <Text style={styles.textHeadingStyle}>
          About developer
          
        </Text>
        <Text style={styles.textLiningStyle}>
          Name: Biki kumar sah. it is app for blood donation. it take nearly 20 hour to complete this all task.
        </Text>
        <Text style={styles.textHeadingStyle }>supported by preety chaurasiya</Text>
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0dcdc',
  },
  textHeadingStyle: {
    marginTop: 30,
    fontSize: 25,
    color: '#ffb6c1',
    fontWeight: 'bold',
  },
  textLiningStyle:{
    marginTop: 30,
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',}
});

export default App;