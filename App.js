import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./components/Post.js";
import UploadScreen from "./components/Upload.js";
import DetailScreen from "./components/Detail.js";
import LoginScreen from "./components/Login.js";
import Navigator from "./components/Navigator.js";
import SearchScreen from "./components/Search.js";

const Stack = createNativeStackNavigator();

export default class extends React.Component {
  render() {
    return (
      <View>
        <Text>hello</Text>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Post">
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Upload" component={UploadScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Navigator/> */}
      </View>
    );
  }
}
