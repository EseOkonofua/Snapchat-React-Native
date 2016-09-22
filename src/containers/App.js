import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator, TouchableOpacity
} from 'react-native';

import CameraView from './CameraView';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    }
});

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            routes:[
                { title:'Camera View', index:0 },
                { title: 'Profile View', index:1 },
                { title: 'Stories View', index:2 },
                { title: 'Snaps View', index:3 }
            ]
        }
    }

    render() {

        return (
            <Navigator
                style = {{ flex:1 }}
                initialRoute = { this.state.routes[0] }
                initialRouteStack = { this.state.routes }
                renderScene = { this.renderScene.bind(this) }

                configureScene = { (route, routeStack)=>{
                    if(route.title === 'Camera View')
                        return Navigator.SceneConfigs.VerticalDownSwipeJump
                    else return Navigator.SceneConfigs.HorizontalSwipeJump
                }}
            />

        );
    }

    renderScene(route, navigator){
        var self = this;
        switch(route.title){
            case 'Camera View':
                return (<CameraView navigator = {navigator}/>);
            default:
                return (
                    <View style = {{ flex: 1, backgroundColor:'black'}}>
                        <Text style={{color:'white'}}> { route.title }</Text>
                        <TouchableOpacity onPress = {
                            ()=>{

                                if(route.index === 0) navigator.push(self.state.routes[1])
                                else navigator.pop();
                            }
                        }>
                            <Text style={{color:'white'}}>Navigate</Text>
                        </TouchableOpacity>
                    </View>
                );
        }


    }

}
