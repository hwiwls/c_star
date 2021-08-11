// 게시글 올라갈 사이트
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { IconButton, Colors } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

export default function Post() {
  return (
    <View style={styles.container}>
      <Text>This is a view page</Text>
      <IconButton
        icon="pencil"
        color={Colors.black}
        size={40}
        onPress={() => console.log("Pressed")}
      ></IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
