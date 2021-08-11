import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Navigator() {
  return (
    <View style={styles.container}>
      {/* 여기 각각 아이콘이 들어가게 바꿔야 함 */}
      <Text style={styles.text}>view</Text>
      <Text style={styles.text}>search</Text>
      <Text style={styles.text}>profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderTopColor: "blue",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 2,
  },
  text: {
    fontSize: 15,
  },
});
