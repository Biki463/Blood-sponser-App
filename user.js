import React from 'react';  
import {createStackNavigator,createAppContainer} from 'react-navigation';  

  
const AppNavigator = createStackNavigator(  
    {  
        screen: SearchScreen,  
        screen: ProfileScreen  
    },  
    {  
        initialRouteName: "Search"  
    }  
);  
export default createAppContainer(AppNavigator);  