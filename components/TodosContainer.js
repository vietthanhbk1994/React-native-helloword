import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar, View, ScrollView, StyleSheet } from 'react-native';
import { ReactiveList } from '@appbaseio/reactivesearch-native';

import CONSTANTS from '../constants';
import COLORS from '../constants/Colors';
import Header from './Header';
import AddTodoButton from './AddTodoButton';
import AddTodo from './AddTodo';

export default class TodosContainer extends React.Component {
    state = {
        addingTodo: false,
    };

    componentDidMount() {
        this.api = new TodoModel('react-todos');
    }

    onCancle = () => {
        this.setState({ addingTodo: false });
    };

    onAdd = () => {
        this.setState({ addingTodo: true });
    };
 
    render() {
        const isAndroid = Platform.OS === 'android';
        const { addingTodo } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <Header />
                <StatusBar 
                    backgroundColor={COLORS.primary} 
                    barStyle={isAndroid ? "light-content" : "dark-content"}
                />
                <ScrollView>
                    {
                        addingTodo && (
                            <View style={styles.row}>
                                <AddTodo
                                    onAdd={this.onCancle}
                                    onCancelDelete={this.onCancle}
                                    onBlur={this.onCancle}
                                />
                            </View>
                        )
                    }
                </ScrollView>
                <AddTodoButton onPress={this.onAdd} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        top: 15,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});