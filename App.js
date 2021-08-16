import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PostScreen from "./components/Post.js";
import Title from "./components/Title.js";
import UploadScreen from "./components/Upload.js";
import DetailScreen from "./components/Detail.js";
import SearchScreen from "./components/Search.js";
import LoginScreen from "./components/Login.js";

// const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.titlebar} />
        <NavigationContainer>
          <Tab.Navigator style={styles.content} tabBarPosition="bottom">
            <Tab.Screen name="Post" component={PostScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
          {/* <Stack.Navigator initialRouteName="Post">
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Upload" component={UploadScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator> */}
        </NavigationContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlebar: {
    flex: 1,
  },
  content: {
    flex: 8,
  },
  nav: {
    flex: 1,
  },
});
