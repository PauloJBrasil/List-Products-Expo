import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Screen = ({ navigation, route }) => (
    <View style={styles.screen}>
        <Text style={styles.title}>Screen 2</Text>
    </View>
)

const styles = StyleSheet.create({
    screen: {
        marginTop: 40,
        alignItems: 'center'
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
    },
})

export default Screen;