import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Let' Begin"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>(Screen 1)</Text>
      <Text>Welcome to My App</Text>
      <Button
        title="Go To Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      ></Button>
    </View>
  );
}

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>(Screen 2)</Text>
      <Text>Dashbaord</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      ></Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;