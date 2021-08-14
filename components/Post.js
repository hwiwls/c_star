import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Navigator from "./Navigator.js";

export default function PostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Post Screen에 도착했습니다.dsdss</Text>
      <Button
        title="새로운 글 쓰기"
        onPress={() => {
          navigation.navigate("Upload");
        }}
      />
      <Navigator style={styles.nav} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
