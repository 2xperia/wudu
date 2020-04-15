import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Grid, Icon, Button } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 640;
export default class fenLei extends Component {
    rendomColor=()=>{
        this.r = Math.floor(Math.random()*255);
        this.g = Math.floor(Math.random()*255);
        this.b = Math.floor(Math.random()*255);
        this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
        return this.color;
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* ------------------搜索框------------------ */}
                        <View style={{
                            height: 60 * s,
                            width: 500 * s,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 10 * s,
                            marginTop: 10,
                            marginLeft: 10
                        }}>
                            <TextInput placeholder='请输入商品名称' />
                        </View>
                        <Button style={{
                            height: 60 * s,
                            width: 100 * s,
                            marginTop: 10,
                            marginLeft: 8
                        }}>搜索</Button>
                    </View>
                    {/* -----------------标签-------------------- */}
                    <View style={{ marginLeft: 20 * s ,marginTop:15*s}}>
                        <Text style={{ fontSize: 20 }}>专题</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>影视原著</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>名著经典</Button>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20 * s ,marginTop:20*s}}>
                        <Text style={{ fontSize: 20 }}>精神避难所</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>文学</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>诗歌</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>小说</Button>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>散文</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>戏曲</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>传记</Button>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>哲学</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>历史</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>艺术</Button>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20 * s ,marginTop:20*s}}>
                        <Text style={{ fontSize: 20 }}>生活启示录</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>心理</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>教育</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>生活</Button>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>绘画</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>语言</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>旅行</Button>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>家居</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>美食</Button>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20 * s ,marginTop:20*s}}>
                        <Text style={{ fontSize: 20 }}>职业成长营</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>建筑</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>法律</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>设计</Button>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>科技</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>互联网</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>计算机</Button>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>经济</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>管理</Button>
                            <Button style={[styles.btn,{backgroundColor:this.rendomColor()}]}>广告</Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        width: 200 * s
    }
})