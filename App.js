import PostScreen from "./components/Post.js";
import Title from "./components/Title.js";
import UploadScreen from "./components/Upload.js";
import DetailScreen from "./components/Detail.js";
import SearchScreen from "./components/Search.js";
import LoginScreen from "./components/Login.js";
import SignupScreen from "./components/Signup.js";
import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const PostStack = createStackNavigator();
function PostStackScreen() {
  return (
    <PostStack.Navigator>
      <PostStack.Screen name="Post" component={PostScreen} />
      <PostStack.Screen name="Upload" component={UploadScreen} />
      <PostStack.Screen name="Details" component={DetailScreen} />
    </PostStack.Navigator>
  );
}
const SearchStack = createStackNavigator();
function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Details" component={DetailScreen} />
    </SearchStack.Navigator>
  );
}

const MyPageStack = createStackNavigator();
function MyPageStackScreen() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="Login" component={LoginScreen} />
      <MyPageStack.Screen name="Signup" component={SignupScreen} />
    </MyPageStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Post") {
                iconName = "book-outline";
              } else if (route.name === "Search") {
                iconName = "search-outline";
              } else if (route.name === "MyPage") {
                iconName = "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Post" component={PostStackScreen} />
          <Tab.Screen name="Search" component={SearchStackScreen} />
          <Tab.Screen name="MyPage" component={MyPageStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
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
