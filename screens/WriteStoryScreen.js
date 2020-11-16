import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header 
                backgroundColor = 'pink'
                centerComponent = {{
                  text: 'Story Hub',
                  style : {color : 'black', fontSize : 28, width : 200,textAlign : 'center  '}
                }}
                />

                <TextInput
                    style = {styles.inputBox}
                        placeholder = 'STORY TITLE'
                        
                    />

                <TextInput
                    style = {styles.inputBox}
                        placeholder = 'AUTHOR'
                        
                    />

                <TextInput
                    multiline = {true}
                    style = {styles.inputBox2}
                        placeholder = 'STORY'
                        
                    />

                <TouchableOpacity style = {styles.submitButton}>
                    <Text style = {styles.buttonText} > Submit </Text>    
                </TouchableOpacity>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container : {
        flex : 1
    },
    
    inputBox : {
        width : 400,
        height : 50,
        borderWidth : 2,
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 50
    },

    inputBox2 : {
        width : 400,
        height : 150,
        borderWidth : 2,
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 50
    },

    submitButton : {
        backgroundColor : 'pink',
        margin : 20,
        borderWidth : 3,
        borderRadius : 20,
        width : 90,
        alignSelf : 'center'
    },

    buttonText : {
        color : 'black',
        fontSize : 20,
        fontFamily : 'bold',
        alignSelf : 'center'
    },
})