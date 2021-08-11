// 게시글 올라갈 사이트
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Post() {
  return (
    <View style={styles.container}>
      <Text>This is a view page</Text>
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
