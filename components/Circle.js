import React, { useState, useEffect, setSelectedValue, selectedValue, onValueChange, setErrorMsg} from "react";
import {View} from 'react-native';

 function Circle () {
    const[isVisible, setisVisible] = useState(false);
    return (
    <View style = {styles.circle}  onPress={() => {if(setisVisible === false)
        { setisVisible(!isVisible)
        
        }
      else{
        setisVisible(!isVisible)
      }}
        }/>
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