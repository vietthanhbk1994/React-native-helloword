import React from 'react';
import { Header, Body, Title } from 'native-base';
import { StyleSheet } from 'react-native';

import COLORS from '../constants/Colors';

const AppHeader = () => (
    <Header style={{ backgroundColor: COLORS.primary}}>
        <Body
            style={styles.body}
        >
            <Title
                style={styles.title}
            >
                Reactive Todos
            </Title>
        </Body>
    </Header>
);

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        color: 'white',
        paddingLeft: 7,
        paddingTop: 10
    },
});

export default AppHeader;