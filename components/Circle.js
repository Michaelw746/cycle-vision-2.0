import React from 'react';
import {View} from 'react-native';

 function Circle () {
    return (
    <View style = {styles.circle}/>
    )
};

const styles ={
    circle:{
        width:200,
        height:200,
        borderRadius:400,
        backgroundColor:'#FFFFFF',
        borderColor: '#A1C6E1',
        borderWidth: 9,
        top:600,
        right:90,
        zindex:1,
        position:'absolute'
    },
}
export {Circle}