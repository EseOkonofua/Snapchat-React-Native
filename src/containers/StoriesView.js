import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native'
import Camera from 'react-native-camera'
import { connect } from 'react-redux'

import Story from '../components/story.component'

const snapPurple = '#9b55a0';
const snapLightBlue = '#3cb2e2';
const snapRed = '#e92754'

const styles = StyleSheet.create({


    sectionHeader:{
        color: snapPurple,
        marginBottom: 10,
        textAlign:'center',
        fontFamily: 'Neue Helvetica'
    }
});

class StoriesView extends Component {
    getStories(){
        return this.props.stories.map((story,index)=>{
            return (
                <Story {...story} key={index}/>
            )
        })
    }

    render(){
        return (
            <ScrollView style={{flex:1,backgroundColor:'white'}}>
                <Text style = { styles.sectionHeader }>ALL STORIES</Text>
                {this.getStories()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return { stories:state.stories }
}

export default connect(mapStateToProps)(StoriesView)
