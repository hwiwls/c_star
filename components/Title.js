import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>씨스타</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  text: {
    fontSize: 34,
  },
});
