import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
var FAIcons = require('react-native-vector-icons/FontAwesome');
var MIcons = require('react-native-vector-icons/MaterialIcons');

const styles = StyleSheet.create({
    bottomControlContainer:{
        padding:15,
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        zIndex:1000,
    }
});

export default class BottomControls extends Component{
    render(){
        return(
            <View style={styles.bottomControlContainer}>
                <FAIcons name='circle-thin' size={100} color='white' style={{textAlign:'center'}}/>
                <View style={{justifyContent:'space-between',flexDirection:'row', marginTop:10}}>
                    <TouchableWithoutFeedback onPress = { this.props.onChatButtonClick }>
                        <MIcons name = 'chat-bubble' size={40} color='white'/>
                    </TouchableWithoutFeedback>
                    <FAIcons name='circle-thin' size={40} color='white'/>
                    <TouchableWithoutFeedback onPress = {this.props.onGroupButtonClick}>
                        <MIcons name = 'group-work' size={40} color='white'/>
                    </TouchableWithoutFeedback>

                </View>
            </View>
        )
    }

}
