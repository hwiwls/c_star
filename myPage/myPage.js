import React, {Component} from "react";
import { StyleSheet, Text, View, Botton } from "react-native";
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
      <View style={styles.header}>
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={require("")}></Image>
                <View style={styles.nameNmodify}>
                    <Text style={styles.name}>이름</Text>
                    <Button style={styles.button} title="개인정보 수정" onPress={this.movetoPersonalInfo} />
                </View>
        </View>
        <View style={styles.friends}>
            <Button style={styles.follow} title="팔로우" onPress={this.movetofollow}/>
            <Button style={styles.follower} title="팔로워" onPress={this.movetofollower}/>
        </View>
      </View>
      <View style={styles.content}>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
          <Image style={styles.contentImg}></Image>
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
  header: {},
  text: {
    color: "white",
  },
  profile: {},
  profileImg: {},
  nameNmodify: {},
  name: {},
  button: {},
  friends: {},
  content: {},
  contentImg: {},
  navigator: {},
  writing: {},
  search: {},
  myPage: {},
});
