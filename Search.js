import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button, TextInput } from 'react-native';  
  
export default class Search extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {  
            username: '',  
        };  
    }  
    static navigationOptions = {  
        title: 'search',  
        headerStyle: {  
            backgroundColor: '#f4511e',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
        },  
    };  
  
    render() {  
        const { navigate } = this.props.navigation;  
        return (  
            //View to hold our multiple components  
            <View style={styles.container}>  
            {/*Input to get the value from the user*/}  
            <TextInput  
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
        placeholder={'Enter user-name'}  
        style={styles.textInput}  
        /> 
        <TextInput  
        value={this.state.blood}  
        onChangeText={blood => this.setState({ blood})}  
        placeholder={'Enter Blood-group '}  
        style={styles.textInput}  
        /> 
         <TextInput  
        value={this.state.email}  
        onChangeText={email => this.setState({ email})}  
        placeholder={'Enter your email '}  
        style={styles.textInput}  
        />  
         <TextInput  
        value={this.state.aaddresh}  
        onChangeText={address => this.setState({address})}  
        placeholder={'Enter your  address '}  
        style={styles.textInput}  
        />  
         <TextInput  
        value={this.state.weight}  
        onChangeText={weight => this.setState({ weight})}  
        placeholder={'Enter your weight '}  
        style={styles.textInput}  
        />  
        <View style={styles.buttonStyle}>  
            <Button  
        title="Submit"  
        // color="#00B0FF"  
        onPress={() =>  
        this.props.navigation.navigate('Profile', {  
            username: this.state.username,  
            otherParam: '101',  
        })  
    }  
        />  
        </View>  
        </View>  
    );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#FFDAB9',
       
        alignItems: 'center',  
        padding: 16,  
    },  
    textInput: {  
        height: 45,width: "80%",borderColor: "red",borderWidth: 1,fontSize:15, marginTop:25
    },  
    buttonStyle:{  
        width: "93%",  
        marginTop: 40, 
        backgroundColor: 'green', borderColor: "red"
         
    }  
});  
