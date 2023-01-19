import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';
import HomeScreen from './Home';
import SearchScreen from './Search';
import ProfileScreen from './Profile';
import AboutusScreen from './Aboutus';
import { icons } from 'react-icons';
const App = () => {
    
 const Tab = createBottomTabNavigator();
 LogBox.ignoreAllLogs();
return (
<NavigationContainer> 
<Tab.Navigator
screenOptions= {({route}) => ({
    tabBarIcon:({focused, size, colour})=> {
let iconName;
if (route.name ==='HOME') {
iconName = focused ? 'ios-home' : 'ios-home-outline';
size= focused ? size+8:size+5;
}
 else if (route.name === 'Search' ){
iconName = focused ? 'search-shape': 'search-outline';
size= focused ? size+8:size+5;

}else if (route.name === 'Profile'){
iconName =focused ? "person":"person-add";
size= focused ? size+8:size+5;
}else if (route.name === 'Aboutus'){
iconName = focused ? 'ios-help-circle' : 'ios-help-0)circle-outline';
size= focused ? size+8:size+5;
   }
   return <Icon name={iconName} size={size} colour={colour} />;
    },
})}

tabBarOptions={{ 
    activeColor:'black',
    inactivetColor:'green',
    ShowLable:false,
    barStyle:{
backgroundColor:'#67baf6',
height: 60,
    }
}}>
<Tab.Screen name="Home" component={(HomeScreen)} /> 
<Tab.Screen name="Register" component={(SearchScreen)} />
<Tab.Screen name="Profile" component={(ProfileScreen)} />
<Tab.Screen name="Aboutus" component={(AboutusScreen)} /> 
</Tab.Navigator>
</NavigationContainer>
);
};
export default App;