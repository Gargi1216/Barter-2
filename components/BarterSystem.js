import React from 'react';
import LottieView from 'lottie-react-native';

export default class exchangeAnimation extends React.Component{
    render(){
        return(
            <LottieView
            source={require('../assets/38905-conversation.json')}
            style={{width:"60%"}}
            autoPlay loop
            />
        )
    }
}