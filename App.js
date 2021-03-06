import PostScreen from "./components/Post.js";
import UploadScreen from "./components/Upload.js";
import DetailScreen from "./components/Detail.js";
import SearchScreen from "./components/Search.js";
import LoginScreen from "./components/Login.js";
import SignupScreen from "./components/Signup.js";
import React, { Component } from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { render } from "react-dom";

// firebase 연결
import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { mapValues } from "async";
// 이 코드를 추가하면 Can't find IDBIndex 로 에러가 발생
// import { getAnalytics } from "firebase/analytics";

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
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    // 파이어베이스 연결 ok
    const firebaseConfig = {
      apiKey: "AIzaSyAdzYxjy0F4G9bZ7qiHLvmJQy31c76PAFc",
      authDomain: "cstar-a5fed.firebaseapp.com",
      databaseURL:
        "https://cstar-a5fed-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "cstar-a5fed",
      storageBucket: "cstar-a5fed.appspot.com",
      messagingSenderId: "486423499209",
      appId: "1:486423499209:web:67c80e204a084978abd818",
      measurementId: "G-SC0J1J3CHT",
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    // const analytics = getAnalytics(app);

    // 저장된 데이터 읽기
    // const ref = firebase.database().ref();
    // ref.on("value", (snapshot) => {
    //   // firebase 데이터 state.data로 업데이트
    //   this.setState({ data: snapshot.val() });
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.data.map((value) => {
          return (
            <View>
              <Image
                style={{ width: 110, height: 110 }}
                source={{ uri: value.image }}
              />
            </View>
          );
        })} */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "PostStack") {
                  iconName = "book-outline";
                } else if (route.name === "SearchStack") {
                  iconName = "search-outline";
                } else if (route.name === "MyPageStack") {
                  iconName = "person-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              activeTintColor: "blue",
              inactiveTintColor: "gray",
              headerShown: false,
            })}
          >
            <Tab.Screen name="PostStack" component={PostStackScreen} />
            <Tab.Screen name="SearchStack" component={SearchStackScreen} />
            <Tab.Screen name="MyPageStack" component={MyPageStackScreen} />
          </Tab.Navigator>
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
