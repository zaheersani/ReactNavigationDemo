import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/StartScreen";
import LastScreen from "./screens/LastScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Drawer 2" component={Drawer2} />
    </Drawer.Navigator>
  );
}

const Drawer1 = () => {
  return (
    <View style={styles.container}>
      <Text>Drawer 1</Text>
    </View>
  );
}

const Drawer2 = () => {
  return (
    <View style={styles.container}>
      <Text>Drawer 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        // headerTitleAlign: "center",
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
          // headerShown: false,
        }}
      />
      <Stack.Screen name="LastScreen" component={LastScreen} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;