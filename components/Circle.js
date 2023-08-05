import React from 'react';
import {View} from 'react-native';

 function Circle () {
    return (
    <View style = {styles.circle}/>
    )
};

const styles ={
    circle:{
        width:215,
        height:215,
        borderRadius:400,
        backgroundColor:'#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 9,
        top:500,
        right:100,
        zindex:1,
        position:'absolute'
    },
}
export {Circle}