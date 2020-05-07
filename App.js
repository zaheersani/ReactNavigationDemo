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
        onPress={() => navigation.navigate('Start', { id: 12, name: 'Zaheer' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

const StartScreen = ({ navigation, route }) => {
  const id = route.params.id;
  return (
    <View style={styles.container}>
      <Text>ID: {id}</Text>
      <Button
        title="Get New ID"
        onPress={() => navigation.setParams(
          { id: Math.floor(Math.random() * 100) })}
      />
      <Text>Name: {route.params.name}</Text>
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
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.popToTop()}
      ></Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: 'grey',
          headerStyle: {
            backgroundColor: 'lightblue'
          }
        }}
      >
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            title: 'Start Here',
            headerRight: () => <Button title='Edit' />
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;