import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import Camera from 'react-native-camera'
var FAIcons = require('react-native-vector-icons/FontAwesome');
var IOIcons = require('react-native-vector-icons/Ionicons');
var MIcons = require('react-native-vector-icons/MaterialIcons');


const styles = StyleSheet.create({
    cameraContainer:{
        flex: 1,
        justifyContent: 'flex-start'
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
    bottomControlContainer:{
        padding:15
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


var BottomControls = ()=>{
    return(
        <View style={styles.bottomControlContainer}>
            <FAIcons name='circle-thin' size={100} color='white' style={{textAlign:'center'}}/>
            <View style={{justifyContent:'space-between',flexDirection:'row', marginTop:10}}>
                <MIcons name = 'chat-bubble' size={40} color='white'/>
                <FAIcons name='circle-thin' size={40} color='white'/>
                <MIcons name = 'group-work' size={40} color='white'/>

            </View>
        </View>
    )
}

export default class CameraView extends Component {
    constructor(props){
        super(props);

        this.camera = null;
    }

    render(){
        return (
            <View style = {styles.cameraContainer}>
                <Camera
                    style = { styles.camera }
                    ref={ (cam)=>{ this.camera = cam } }
                    aspect = { Camera.constants.Aspect.fill }
                    captureTarget = {Camera.constants.CaptureTarget.cameraRoll}
                    orientation={ Camera.constants.Orientation.auto }
                    type={Camera.constants.Type.front } >
                    <TopControls/>
                    <BottomControls/>

                </Camera>

            </View>
        );
    }
}
