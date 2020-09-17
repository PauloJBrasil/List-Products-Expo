import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../services/api';

export default class Screen extends Component {

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = () => {

    };

    render(){
        const { navigation } = this.props;
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Screen 1</Text>
                <TouchableOpacity style={styles.button} onPress ={() => { navigation.push('Screen2') }}>
                    <Text>Go to Screen 2</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 40,
        alignItems: 'center',
    },
    title: {
        padding: 20,
        fontSize: 42
    },
    button: {
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#35488998',
        borderRadius: 10,
    }
})
