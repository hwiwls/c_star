import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import auth from "@react-native-firebase/auth";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>아이디:</Text>
      <TextInput
        style={styles.inputbox}
        placeholder="아이디를 입력하세요"
        multiline
      />
      {/* 비밀번호는 입력할때 0000으로 보이게 변경해야함 */}
      <Text>비밀번호:</Text>
      <TextInput
        style={styles.inputbox}
        placeholder="비밀번호를 입력하세요."
        multiline
      />

      {/* 로그인 버튼 기능 추가해야함 */}
      <Button style={styles.button} title="로그인" />
      <Text>아직 회원가입을 안하셨나요? -&gt;</Text>
      <Button
        style={styles.button}
        title="회원가입하러하기"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  inputbox: {
    height: 30,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 30,
  },
  // 로그인 버튼 크기 조정 필요
  button: {
    width: 20,
  },
});
