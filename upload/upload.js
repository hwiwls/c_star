import React, {Component} from "react";
import { StyleSheet, Text, View, Buttonm, TextInput } from "react-native";
import { Image } from "react-native";

export default class myPage extends Component() {
  return (
      // 개인정보 수정창으로 이동
    movetoPersonalInfo(){

    }
    // 팔로우창으로 이동
    movetofollow(){

    }
    // 팔로워창으로 이동
    movetofollower(){

    }
    // 글 갤러리창으로 이동
    movetoWriting(){

    }
    //검색창으로 이동
    movetoSearch(){

    }
    // 내 페이지로 이동
    movetoMyPage(){

    }

    <View style={styles.container}>
      <View style={styles.title}> title </View>
      <View style={styles.content}>
          <View style={styles.image}><Text style={styles.imageText}>사진: </Text></View>
          <View style={styles.text}><Text style={styles.textText}>글: </Text><TextInput value={} style={styles.textInput}></TextInput></View>
      </View>
      <View style={styles.navigator}>
          <Button style={styles.writing} title="글" onPress={this.movetoWriting}/>
          <Button style={styles.search} title="검색" onPress={this.movetoSearch}/>
          <Button style={styles.myPage} title="내 페이지" onPress={this.movetoMypage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {},
  content: {},
  image: {},
  imgText: {
    color: "white",
  },
  text: {},
  textText: {},
  textInput: {},
  profile: {},
  profileImg: {},
  nameNmodify: {},
  name: {},
  button: {},
  friends: {},
  contentImg: {},
  navigator: {},
  writing: {},
  search: {},
  myPage: {},
});
