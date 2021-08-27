import React, { useEffect } from "react";
import {
  Button,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

// Post에서 업로드 버튼을 눌러야 올 수 있다
class UploadScreen extends Component {
  state = {
    text: "",
    image: "",
    selectedImage: {},
  };
  // image 올리기 위한 함수
  // 카메라 접근 권한 요청한 뒤 사진 선택
  openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMedialLibraryPermissionAsync();

    if (permissionResult.granted === false) {
      alert("카메라 권한을 허용해주셔야 업로드를 할 수 있습니다!");
      return;
    }
    // 사진 선택
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    // stop running the function here if the user cancelled the dialog
    if (pickerResult.cancelled === true) {
      return;
    }
    // state에 선택된 이미지의 uri 저장
    setState({ selectedImage: { localUri: pickerResult.uri } });

    // Show selected Image if we have one // 조건부 렌더링
    {
      selectedImage && (
        <View style={styles.container}>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumnail}
          />
        </View>
      );
    }

    //
    return <View style={styles.container}>로고나 설명이나 버튼</View>;
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Upload Screen</Text>
        {/* 줄바꿈없이 바로 빈칸 보여지게 바꾸기 */}
        <Text>내용:</Text>
        <TextInput
          style={{ height: 70, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => {
            this.setText({ text: text });
          }}
          placeholder="input what you want"
          multiline
        />
        <Text>text : {text}</Text>
        <Button title="사진 선택하기" onPress={this.openImagePickerAsync} />
        {/* {image && (
          <Image
            source={{ selectedImage: { localUri } }}
            style={{ width: 200, height: 200 }}
          />
        )} */}

        {/* 버튼을 누르면 업로드된 게시글의 화면으로 넘어간다. */}
        <Button
          title="업로드"
          onPress={() => {
            navigation.navigate("Detail");
          }}
        />
        {/* <Button title="Go to Post" onPress={() => navigation.navigate("Post")} />
            <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    );
  }

  styles = StyleSheet.create({
    // 스타일 다듬어야함
    container: {},
    thumnail: {
      width: 200,
      height: 200,
      resizeMode: "contain",
    },
  });
}
// firebase에 text랑 selectedImage.localUri 전달하기
export default UploadScreen;
