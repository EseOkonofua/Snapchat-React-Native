import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native'
import Camera from 'react-native-camera'

const styles = StyleSheet.create({

});

class SnapsView extends Component {
    render(){
        return (
            <View style={{flex:1,backgroundColor:'brown'}}>
                <Text>Snaps View</Text>
            </View>
        )
    }
}


export default SnapsView
