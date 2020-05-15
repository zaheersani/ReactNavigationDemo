import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LastScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>(Screen 2)</Text>
            <Text>Dashbaord</Text>
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
            ></Button>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.popToTop()}
            ></Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default LastScreen;