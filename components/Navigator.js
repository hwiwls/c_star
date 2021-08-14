import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Navigator() {
  return (
    <View style={styles.container}>
      <Button
        title="게시글"
        onPress={() => {
          navigation.navigate("Post");
        }}
      />
      <Button
        title="검색"
        onPress={() => {
          navigation.navigate("Search");
        }}
      />
      <Button
        title="프로필"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      {/* <Ionicons name="reader-outline" size={24} color="black" />
      <Ionicons name="search" size={24} color="black" />
      <Ionicons name="person-outline" size={24} color="black" /> */}
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
