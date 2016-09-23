import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    StatusBar
} from 'react-native'
import Camera from 'react-native-camera'
var FAIcons = require('react-native-vector-icons/FontAwesome');
var IOIcons = require('react-native-vector-icons/Ionicons');
var MIcons = require('react-native-vector-icons/MaterialIcons');


const styles = StyleSheet.create({
    cameraContainer:{
        flex:1
    },
    camera:{
        flex: 1,
        justifyContent:'space-between'
    },
    topControlContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:15,
        // backgroundColor:'black'
    },
    topGroupIcons:{
        marginRight:20
    }
});

var TopControls = ()=>{

    return (
        <View style={styles.topControlContainer}>
            <View style={{flexDirection:'row'}}>
                <IOIcons  style={styles.topGroupIcons} name='ios-flash' size={40} color='white'/>
                <FAIcons style={styles.topGroupIcons} name='moon-o' size={35} color='white'/>
            </View>
            <FAIcons name="snapchat-ghost" size={40} color='white' style={{paddingRight:10}}/>
            <IOIcons name='ios-reverse-camera-outline' size={40} color='white'/>
        </View>
    )
}




export default class CameraView extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <View style = {styles.cameraContainer}>
                <StatusBar hidden = {true}/>
                <Text>Camera Container</Text>
            </View>
        );
    }
}
