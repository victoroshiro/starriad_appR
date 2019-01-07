import React from 'react';
import {View,Dimensions } from 'react-native';
import Video from 'react-native-video';
import {withNavigation} from "react-navigation";


class ProdutoProfile extends React.Component {

    constructor(props) {
        super(props);

        let {height} = Dimensions.get('window');

        this.state = {
            video_id: this.props.navigation.getParam('video_id'),

        }
    }

    render(){
        return(
            <View>
                <Video source={{uri: 'http://192.168.15.41/starriad_app/application/assets/imgs/png/icons/videoplayback.mp4'}}
                       ref={(ref) => {
                           this.player = ref
                       }}                                      // Store reference
                       onBuffer={this.onBuffer}                // Callback when remote video is buffering
                       onError={this.videoError}
                       style={{position: 'absolute',
                           top: 0,
                           bottom: 0,
                           left: 0,
                           right: 0,}}
                       />

            </View>
        );
    }

    onBuffer(){
        console.log("teste")
    }
    videoError(){
        console.log("teste2")
    }
};


export default withNavigation(ProdutoProfile)