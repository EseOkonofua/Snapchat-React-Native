import { combineReducers } from 'redux'
import Camera from 'react-native-camera'
import stories from './stories.reducer'

const allReducers = combineReducers({
    camera: (
        state={
            aspect: Camera.constants.Aspect.fill ,
            captureTarget: Camera.constants.CaptureTarget.cameraRoll,
            orientation: Camera.constants.Orientation.auto,
            type: Camera.constants.Type.front
        },action)=>{
            return state;
    },
    stories
});

export default allReducers
