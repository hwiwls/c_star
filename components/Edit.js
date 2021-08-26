import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';



export default function Edit(){
        return (
          <View style={styles.container}>
            <View style={styles.topView}>
              <Text style={styles.titleText}>씨스타</Text>    
              {/* 따로 파일을 만들어서 import 해야할 듯 */}
            </View>
            <View style={styles.centerView}>
            <Text style={styles.profileText}>프로필: </Text>
            <Text style={styles.nameText}>이름: </Text>
            </View>
            <View style={styles.buttonView}>
            <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>수정 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>업로드 </Text>
          </TouchableOpacity>
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
      centerView: {
        flex: 6,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonView:{
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
      },
      bottomView: {
        flex: 1.5,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      },
      editButton: {
        width: 80,
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3%',
      },
      uploadButton:{
        width: 80,
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10%',
      },
      titleText:{
        fontSize: 36,
        fontWeight: 'bold',
      },
      profileText:{
        alignSelf:'flex-start',
        fontSize: 30,
        marginLeft: '15%',
      },
      nameText:{
        alignSelf:'flex-start',
        fontSize: 30,
        marginLeft: '15%',
      },
      editText:{
        fontSize: 20,
      },
      uploadText:{
        fontSize: 20,
      },
      
    });