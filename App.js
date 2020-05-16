import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/StartScreen";
import LastScreen from "./screens/LastScreen";



const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="History" component={CallHistory} />
    </Tab.Navigator>
  );
}

const Contacts = () => {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
    </View>
  );
}

const CallHistory = () => {
  return (
    <View style={styles.container}>
      <Text>Contacts Call Log</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={{
        width: 200,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerLabel: "Welcome Home",
          drawerIcon: () => <Ionicons name="md-home" size={26} color="#8CBBF1" />,
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={BottomTabs}
        options={{
          drawerIcon: () => <Ionicons name="md-contacts" size={26} color="#8CBBF1" />,
        }}
      />
    </Drawer.Navigator>
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
      screenOptions={({ navigation }) => ({
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#8CBBF1'
        },
        headerLeft: () =>
          <View style={{ paddingLeft: 10 }}>
            <Ionicons
              name="md-menu"
              color="white"
              size={32}
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
      })
      }
    >
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={({ navigation }) => ({
          title: 'Start Here',
          headerRight: () =>
            <View style={{ paddingRight: 10 }}>
              <FontAwesome name="edit" size={32} color="white" />
            </View>,
          headerLeft: () => <View style={{ paddingLeft: 10 }}>
            <Ionicons
              name="md-arrow-round-back"
              size={32}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </View>
        })
        }
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