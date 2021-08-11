import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./Title.js";
import Navigator from "./Navigator.js";
import Post from "./Post.js";

export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.guidance}></Title>
        <Post style={styles.content}></Post>
        <Navigator style={styles.guidance}></Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 5,
  },
  guidance: {
    flex: 1,
  },
});
