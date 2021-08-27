import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import firebase from "firebase";
import database from "@react-native-firebase/database";

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      pwd: "",
      failmessage: null,
    };
  }

  componentDidMount() {
    // 파이어베이스 연결 ok
    const firebaseConfig = {
      apiKey: "AIzaSyAdzYxjy0F4G9bZ7qiHLvmJQy31c76PAFc",
      authDomain: "cstar-a5fed.firebaseapp.com",
      databaseURL:
        "https://cstar-a5fed-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "cstar-a5fed",
      storageBucket: "cstar-a5fed.appspot.com",
      messagingSenderId: "486423499209",
      appId: "1:486423499209:web:67c80e204a084978abd818",
      measurementId: "G-SC0J1J3CHT",
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }

  // 데이터를 어떻게 보내지
  checkSignup = () => {
    console.log("checkSignup");
    console.log(this.state.name);
    console.log(this.state.id);
    console.log(this.state.pwd);

    // 모두 제대로 입력되었는지 확인

    // member data 추가
    this.addMemberData(this.state.id, this.state.name, this.state.pwd);
  };

  // member data에 새로운 member을 추가하는 함수
  addMemberData = (userid, username, userpwd) => {
    firebase
      .database()
      .ref("member/" + userid)
      .set({
        name: username,
        id: userid,
        pwd: userpwd,
      })
      .then(console.log("complete"));
  };

  render() {
    return (
      <View>
        <Text>이름:</Text>
        <TextInput
          style={styles.inputbox}
          placeholder="이름을 입력하세요"
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <Text>아이디:</Text>
        <TextInput
          style={styles.inputbox}
          placeholder="아이디를 입력하세요"
          onChangeText={(id) => this.setState({ id })}
          value={this.state.id}
        />
        {/* 비밀번호는 입력할때 0000으로 보이게 변경해야함 */}
        <Text>비밀번호:</Text>
        <TextInput
          style={styles.inputbox}
          placeholder="비밀번호를 입력하세요."
          onChangeText={(pwd) => this.setState({ pwd })}
          value={this.state.pwd}
          secureTextEntry
        />

        {/* 버튼 기능 추가 필요 */}
        <Button
          style={styles.button}
          title="회원가입"
          onPress={this.checkSignup}
        />
        <Text>로그인 하러가기 -&gt;</Text>
        <Button
          style={styles.button}
          title="로그인"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    );
  }
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
    width: 300,
    height: 300,
  },
});
