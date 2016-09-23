import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Camera from 'react-native-camera'
import CameraView from './CameraView'
import StoriesView from './StoriesView'
import SnapsView from './SnapsView'
import BottomControls from '../components/BottomControls'



const styles = StyleSheet.create({

});

class App extends Component {

    constructor(props){
        super(props);
        this.camera = null;
        this.navigator = null;

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

            <Camera
                style = { {flex:1}}
                ref={ (cam)=>{ this.camera = cam } }
                aspect = { this.props.cameraState.aspect }
                captureTarget = {this.props.cameraState.captureTarget}
                orientation={ this.props.cameraState.orientation }
                type={this.props.cameraState.type } >

                <Navigator
                    initialRoute = {this.state.routes[0]}
                    initialRouteStack = {this.state.routes}
                    renderScene = { this.renderScene.bind(this) }
                    configureScene = { (route,routeStack) =>{
                        switch(route.title){

                            case 'Snaps View':
                                return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
                            case 'Stories View':
                                return Navigator.SceneConfigs.HorizontalSwipeJump
                        }
                    } }
                     />
                     <BottomControls onGroupButtonClick = { ()=>{
                         if(this.navigator){
                            this.navigator.jumpTo(this.state.routes[2])
                         }

                     }}
                     onChatButtonClick = { ()=>{
                         if(this.navigator){
                             this.navigator.jumpTo(this.state.routes[3])
                         }
                     }}/>



            </Camera>





        );
    }



    renderScene(route, navigator){
        this.navigator = navigator
        switch(route.title){
            case 'Camera View':
                return (<CameraView navigator = {navigator}/>)
            case 'Stories View':
                return (<StoriesView navigator = {navigator}/>)
            case 'Snaps View':
                return (<SnapsView navigator = {navigator}/>)
        }

    }

}

function mapStateToProps(state){
    return {
        cameraState:state.camera
    }
}

export default connect(mapStateToProps,null)(App)
