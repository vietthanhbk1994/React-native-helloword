import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedtext: 'please type your text',
            typedPassword: ''
        };
    }

    onChangeTextEmail = (text) => {
        this.setState({
            typedtext: text
        });
    };

    render() {
        return (
            <View>

                <TextInput 
                    style={styles.text}
                    keyboardType="email-address"
                    placeholder="Enter your email"
                    onChangeText={this.onChangeTextEmail}
                />

                <TextInput 
                    style={styles.text}
                    keyboardType="default"
                    placeholder="Enter your password"
                    onChangeText={this.onChangeTextEmail}
                    secureTextEntry={true}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
});