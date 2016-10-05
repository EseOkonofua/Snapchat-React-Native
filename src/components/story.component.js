import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

const styles = StyleSheet.create({

    storyComponent: {
        height:75,
        flexDirection:'row',
        paddingLeft:10,
        paddingTop:5,
        paddingBottom:5,
        borderBottomColor:"#f1f1f1",
        borderBottomWidth:1,
        marginBottom:5
    },

    imageThumbnail:{
        height:60,
        width:60,
        borderRadius: 50,
        marginRight:10
    }


});

export default class Story extends Component{
    render(){
        return(
            <TouchableOpacity >
                <View style={styles.storyComponent}>
                    <Image style={styles.imageThumbnail} source = {this.props.thumbnail} />
                    <View style={{paddingTop:6}}>
                        <Text style={{color:'black',fontSize:16}}>{ this.props.username }</Text>
                        <Text>{ this.props.uploadTime }</Text>
                    </View>
                </View>

            </TouchableOpacity>

        )
    }

}
