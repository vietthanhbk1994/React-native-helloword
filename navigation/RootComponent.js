import React from 'react';
import { MaterialIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Spinner, Container } from 'native-base';

import COLORS from '../constants/Colors';
import CONSTANTS from '../constants';
import TodosScreen from '../screen/TodosScreen';

class ActiveScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ACTIVE!</Text>
            </View>
        );
    }
}

class CompleteScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>COMPLETED!</Text>
            </View>
        );
    }
}
class AllScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ALL!</Text>
            </View>
        );
    }
}

class Loading extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={COLORS.primary}
                    barStyle="dark-content"
                />
                <Spinner color={COLORS.primary} />
            </View>
        );
    }
}

const commonNavigationOptions = ({ navigation }) => ({
    header: null,
    title: navigation.state.routeName,
  });

const routeOptions = {
    screen: TodosScreen,
    navigationOptions: commonNavigationOptions,
  };

const TabNav = createBottomTabNavigator(
    {
        [CONSTANTS.ALL]: routeOptions,
        [CONSTANTS.ACTIVE]: routeOptions,
        [CONSTANTS.COMPLETED]: routeOptions,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
                switch (routeName) {
                    case CONSTANTS.ALL:
                        iconName = 'format-list-bulleted';
                        break;
                    case CONSTANTS.ACTIVE:
                        iconName = 'filter-center-focus';
                        break;
                    case CONSTANTS.COMPLETED:
                        iconName = 'playlist-add-check';
                    break;
                }
    
                return (
                    <MaterialIcons
                        name={iconName}
                        size={28}
                        style={{marginBottom: -3}}
                        color={focused ? COLORS.tabIconSelected : COLORS.tabIconDefault}
                    />
                );
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: true,
        swipeEnabled: true,
    }
);

export default class RootComponent extends React.Component {
    state = {
        isReady: false,
    };

    async componentDidMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            Ionicons: require('native-base/Fonts/Ionicons.ttf'),
        });
        this.setState({ isReady: true });
    }

    render() {
        const { isReady } = this.state;

        return (
            isReady ? <TabNav /> : <Loading />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});