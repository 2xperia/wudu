import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions, Button, Image, TextInput, 
TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
// const Width = width / 640;
export default class My extends Component {
    constructor(){
        super()
    }
    shezhi=()=>{
        Actions.shezhi();
    }
    render() {
        return (
            <View style={{ flex:1,backgroundColor:'#dddcd8' }}>
                <View style={styles.myView1}>
                    
                </View>
                <View style={styles.myView2}>
                    <Image source={require('../images/2.png')} style={styles.myImage1}/>
                    <Text style={styles.text1}>我的等级</Text>
                </View>
                <View style={styles.myView3}>
                    <Image source={require('../images/4.png')} style={styles.myImage1}/>
                    <Text style={styles.text1}>我的书券</Text>
                </View>
                <View style={styles.myView3}>
                    <Image source={require('../images/3.png')} style={styles.myImage1}/>
                    <Text style={styles.text1}>浏览历史</Text>
                </View>
                <View style={styles.myView3}>
                    <Image source={require('../images/5.png')} style={styles.myImage1}/>
                    <Text style={styles.text1}>我的收藏</Text>
                </View>
                <View style={styles.myView3}>
                    <Image source={require('../images/6.png')} style={styles.myImage1}/>
                    <Text style={styles.text1}>我的消息</Text>
                </View>
                
                <TouchableOpacity style={styles.myView3} onPress={this.shezhi}>
                    <Image source={require('../images/1.png')} style={styles.myImage1}/>
                    <Text style={styles.text1}>设         置</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    myView1: {
        height:300,
        width:width,
        backgroundColor:'lightblue',
        textAlign:'center',
    },
    myView2:{
        width:width,
        height:75,
        borderRadius:35,
        backgroundColor:'white',
        marginTop:50,
        borderStyle:"dashed" ,
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        flexDirection:'row',
    },
    myView3:{
        width:width,
        height:75,
        borderRadius:35,
        backgroundColor:'white',
        marginTop:10,
        borderStyle:"dashed" ,
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        flexDirection:'row',
    },
    text1:{
        fontSize:35,
        color:'#959393',
        fontFamily:'微软雅黑',
        marginLeft:'25%'
    },
    myImage1:{
        width:50,
        height:50,
        marginLeft:'5%',
    }
})