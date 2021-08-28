import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import firebase from "firebase";
import database from "@react-native-firebase/database";

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      pwd: "",
      checkedid: false,
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

    // 저장된 데이터 읽기
    const ref = firebase.database().ref();
    ref.on("value", (snapshot) => {
      // firebase 데이터 state.data로 업데이트
      this.setState({ data: snapshot.val() });
    });
  }

  checkSignup = () => {
    const { name, id, pwd, checkedid } = this.state;

    // 모두 제대로 입력되었는지 확인

    // 아이디 중복체크를 제대로 하지 않았을 경우
    if (checkedid === false) {
      Alert.alert(
        "회원가입 실패",
        "아이디중복체크를 한 후, 회원가입을 시도해주세요",
        [
          {
            text: "확인",
            onPress: () => console.log("[회원가입실패] 아이디중복체크 미완료"),
          },
        ]
      );
    }
    // 입력되지 않은 정보가 있는 경우
    else if ((name == "") | (id == "") | (pwd == "")) {
      Alert.alert(
        "회원가입 실패",
        "입력되지 않은 정보가 있습니다. 확인해주세요",
        [
          {
            text: "확인",
            onPress: () => console.log("[회원가입실패] 입력되지 않은 정보"),
          },
        ]
      );
    } else {
      // 모든 조건을 통과했을 경우
      // member data 추가
      this.addMemberData(name, id, pwd);
    }
  };

  checkIdexist = () => {
    const { id } = this.state;

    // 아이디를 입력하지 않고 아이디중복체크 버튼을 누른 경우
    if (id === "") {
      Alert.alert("아이디중복체크", "아이디를 입력해주세요", [
        {
          text: "확인",
          onPress: () =>
            console.log("[아이디중복체크] 아이디가 입력되지 않았습니다"),
        },
      ]);
    } else {
      // 저장된 member 읽기
      const ref = firebase.database().ref("member/" + id);
      ref.on("value", (snapshot) => {
        // 해당 아이디가 존재하는 경우
        if (snapshot.exists()) {
          Alert.alert(
            "아이디중복체크",
            "아이디가 중복입니다. 아이디를 변경해주세요",
            [
              {
                text: "확인",
                onPress: () =>
                  console.log("[아이디중복체크] 아이디가 이미 존재합니다"),
              },
            ]
          );
        } else {
          // 아이디중복체크 성공했을때
          this.setState((state) => {
            return { checkedid: true };
          });
          Alert.alert("아이디중복체크", id + "는 사용가능한 아이디입니다", [
            {
              text: "확인",
              onPress: () => console.log("[아이디중복체크] 사용가능한 아이디"),
            },
          ]);
        }
      });
    }
  };

  // member data에 새로운 member을 추가하는 함수
  addMemberData = (username, userid, userpwd) => {
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
    const { navigation } = this.props;

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
        <Button
          style={styles.button}
          title="아이디중복체크"
          onPress={this.checkIdexist}
        />
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
