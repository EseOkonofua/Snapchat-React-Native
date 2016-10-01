import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    StatusBar,
    Image
} from 'react-native'
import Camera from 'react-native-camera'
import { connect } from 'react-redux'

const snapPurple = '#9b55a0';
const snapLightBlue = '#3cb2e2';
const snapRed = '#e92754'

const styles = StyleSheet.create({

    imageThumbnail:{
        height:60,
        width:60,
        borderRadius: 50,
        marginRight:10
    },

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
                <View style={{height:75, flexDirection:'row',paddingLeft:10, paddingTop:5, paddingBottom:5, borderBottomColor:"#f1f1f1", borderBottomWidth:1, marginBottom:5}} key={index}>
                    <Image style={styles.imageThumbnail} source = {story.thumbnail} />
                    <View style={{paddingTop:6}}>
                        <Text style={{color:'black',fontSize:16}}>{ story.username }</Text>
                        <Text>{ story.uploadTime }</Text>
                    </View>
                </View>
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
