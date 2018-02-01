import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Alert, Button} from 'react-native';

class Greeting extends React.Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }
}

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            });
        }, 1000);
    }

    render() {
        return (
            <Text>{this.state.isShowingText ? this.props.text : ''}</Text>
        );
    }
}

export class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{flex: 1}}>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Greeting name="Ngo" style={[styles.red, styles.bigblue]} />
                <Blink text="you" />
                <View style={{backgroundColor: 'red', flex: 2}} />
                <View style={{backgroundColor: 'skyblue', flex: 1}} />
                <View style={{backgroundColor: 'red', flex: 3}} />
            </View>
        );
    }
}

export class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                </View>
            </View>
        );
    }
}

export class JustifyContentbasics extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
                >
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
                >
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}
                >
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}
                >
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
                >
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
                </View>
            </View>
        );
    }
}

export class PizzaTranslater extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    placehoder="Type here to have pizza"
                    style={{height: 40}}
                    onChangeText={(text) => this.setState({text})}
                />
                <Text>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
            </View>
        );
    }

}

export class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Button onPress={this._onPressButton()} title="Press Me"/>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    red: {
        color: 'red'
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
});

export default App;