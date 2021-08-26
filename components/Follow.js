import React from 'react';
import { Text, StyleSheet, View, ScrollView , TouchableOpacity } from 'react-native';

export default function Follow(){
    return (
        <View style={styles.container}>

            <View style={styles.topView}>
              <Text style={styles.titleText}>씨스타</Text>    
              {/* 따로 파일을 만들어서 import 해야할 듯 */}
            </View>

            <View style={styles.followView}>
            <TouchableOpacity style={styles.followerButton}>
            <Text style={styles.followerText}>팔로워</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followingButton}>
            <Text style={styles.followingText}>팔로잉</Text>
          </TouchableOpacity>
            </View>

            <View style={styles.followlistView}>
            <ScrollView style={styles.listScrollView}>
          </ScrollView>
            </View>

            {/* 하단바 (임시)*/}
            <View style={styles.bottomView}> 
            {/* 따로 파일을 만들어서 import 해야할 듯 */}
            </View>

            </View>
            
        );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        topView: {
            flex: 1.5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
          followView:{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
          followlistView:{
            flex: 7,

          },
          bottomView: {
            flex: 1.5,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
          },
          titleText:{
            fontSize: 36,
            fontWeight: 'bold',
          },
          followerText:{
            fontSize:25,
            justifyContent: 'center',
          },
          followingText:{
            fontSize: 25,
            justifyContent: 'center',
          },
          followerButton: {
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '25%',
          },
          followingButton:{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '0%',
          },
          listScrollView: {
            alignSelf: 'center',
            backgroundColor: 'white',
          }
    });