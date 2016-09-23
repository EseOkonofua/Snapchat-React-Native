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

class StoriesView extends Component {
    render(){
        return (
            <View style={{flex:1,backgroundColor:'green'}}>
                <Text>Stories View</Text>
            </View>
        )
    }
}

export default StoriesView
