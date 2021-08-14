import React, { useEffect } from "react";
import { Button, Image, View, Text, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

// Post에서 업로드 버튼을 눌러야 올 수 있다
export default function UploadScreen({ navigation }) {
  const [text, setText] = React.useState("text");
  const [image, setImage] = React.useState("image");

  // image 올리기 위한 함수
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("카메라 권한을 허용해주셔야 업로드를 할 수 있습니다!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Upload Screen</Text>
      {/* 줄바꿈없이 바로 빈칸 보여지게 바꾸기 */}
      <Text>내용:</Text>
      <TextInput
        style={{ height: 70, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        placeholder="input what you want"
        multiline
      />
      <Text>text : {text}</Text>
      <Button title="사진 선택하기" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

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
