import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';

export default class App extends Component
{
    constructor()
    {
        super();

        this.state = { first_name: '', last_name: '', loading: false, disabled: false }
    }

    saveData = () =>
    {
        this.setState({ loading: true, disabled: true }, () =>
        {
            fetch('http://172.20.10.4/getreq/index.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                    first_name: this.state.first_name,

                    last_name: this.state.last_name
                })

            }).then((response) => response.json()).then((responseJson) =>
            {
                alert(responseJson);
                this.setState({ loading: false, disabled: false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ loading: false, disabled: false });
            });
        });
    }

    render()
    {
        return(
            <View style = { styles.container }>
                <TextInput underlineColorAndroid = "transparent" placeholder = "Your First Name" style = { styles.textInput } onChangeText = {(text) => this.setState({ first_name: text })}/>

                <TextInput underlineColorAndroid = "transparent" placeholder = "Your Last Name" style = { styles.textInput } onChangeText = {(text) => this.setState({ last_name: text })}/>

                <TouchableOpacity disabled = { this.state.disabled } activeOpacity = { 0.8 } style = { styles.Btn } onPress = { this.saveData }>
                    <Text style = { styles.btnText }>Insert</Text>
                </TouchableOpacity>

                {(this.state.loading)?(<ActivityIndicator/>):null}
                
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    textInput:
    {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16
    },

    Btn:
    {
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignSelf: 'stretch',
        padding: 10,
        marginTop: 10,
        marginBottom: 25
    },

    btnText:
    {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
});