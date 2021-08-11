import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Navigator() {
  return (
    <View style={styles.container}>
      {/* 여기 각각 아이콘이 들어가게 바꿔야 함 */}
      <Ionicons name="reader-outline" size={24} color="black" />
      <Ionicons name="search" size={24} color="black" />
      <Ionicons name="person-outline" size={24} color="black" />
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
});
