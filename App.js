import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import Title from "./Title.js";
import Navigator from "./Navigator.js";
import Post from "./Post.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Post 스크린
function PostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is a Post Screen</Text>
      <Button
        title="Go to upload"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Upload");
        }}
      />
    </View>
  );
}

// Post에서 업로드 버튼을 눌러야 올 수 있다
function UploadScreen({ navigation }) {
  /* 2. Get the param */
  const [onChangeText] = React.useState("Useless Placeholder");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Upload Screen</Text>
      <Text>내용:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value=""
      />
      <Button title="Go to Post" onPress={() => navigation.navigate("Post")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Title style={styles.titlebar}></Title>
        <Post style={styles.content}></Post>
        <Navigator style={styles.nav}></Navigator> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Post">
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Upload" component={UploadScreen} />
          </Stack.Navigator>
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
    flex: 5,
  },
  nav: {
    flex: 1,
  },
});
