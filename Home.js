import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
  } from "react-native";
  // this file is using for creating a tracker and to use expo map api for the map
  import React, { useState, useEffect, setSelectedValue, selectedValue, onValueChange } from "react";
  import { TouchableOpacity } from "react-native";
  import {Picker} from "@react-native-picker/picker"
  //imports the map components
  import { Map } from "./components/Map";
 
 import axios from "axios";

  
  export default function App({navigation}){
    //Gets rid of the header 
    React.useLayoutEffect(() => {
      navigation.setOptions({headerShown: false});
    }, [navigation]);
//saves the value selected in the picker 
    const [selectedValue, setSelectedValue] = useState("Boot #1");
 //confirms whether or not the lock is locked with a boolean
    const [isLocked, setIsLocked] = useState(true); // Added state for lock/unlock
  
    const toggleLock = () => {
      setIsLocked(!isLocked);
    };
    const[isVisible, setisVisible] = useState(false);

//get data using axios to control whether claw opens or closes
    const clawClose = () => {
      axios.get('http://172.20.10.10/close')
    }

    const clawOpen = () => {
      axios.get('http://172.20.10.10/open')
    }

    const buzzSound = () => {
      axios.get('http://172.20.10.10/buzz')
    }

    return (
      
      <View>
       <Map/>
      
        <View style={styles.button}>
            <View>
              {/* Your other components inside the button */}
             
            </View>
            <TouchableOpacity onPress={() => {if(setisVisible === false)
            { setisVisible(!isVisible)
            
            }
          else{
            setisVisible(!isVisible)
          }}
            }>
               <Text style= {styles.Boottext}>{selectedValue}</Text>
            <Image source={require('./assets/Dropdown.png')} style = {{right:-300, top:-15}}/>
            </TouchableOpacity>
            
            {isVisible ?
            (
<Picker
          selectedValue={selectedValue}
          style={styles.Picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} 
        >     
          <Picker.Item  color='pink'  label="Boot #1" value={'Boot #1'}  />
           
          <Picker.Item  color="pink" label="Boot #2" value ={'Boot #2'} />
           
        </Picker>
        
            ):null }      
 
            <Image source={require('./assets/logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={() => {
    //when lock is called it gets the functions that open the law or close it based on isLocked value
    toggleLock();
    if(isLocked === true){
    clawClose();
  }else{
    clawOpen();
  }
  }}
   >
            <Image
              source={
                isLocked
                  ? require("./assets/Group68.png")
                  : require("./assets/Group69.png")
              }
              style={styles.lock}
             
            />
          </TouchableOpacity>


          {/* <TouchableOpacity >
            <Text>Hey Press me to hear buzz</Text>
          </TouchableOpacity> */}
           </View>
      
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      color: "White",
    },
    button: {
      borderRadius: 60,
      width: 365,
      flexshrink: 0,
      height: 85,
      backgroundColor: "#FFFFFF",
      flexDirection: "row", // Align items in a horizontal line
      top: 69,
      left: 10,
      alignItems: "center",
      zIndex:1,
      position:'absolute'
    },
    text: {
      color: "white",
      fontSize: 24,
    },
    map: {
      width: "100%",
      height: "100%",
      margin: 0,
      zIndex: 0,
    },
    logo: {
      margin: 28,
      height: 26,
      width: 70,
      top: 0,
     right: 240,
     position:'absolute',
      zIndex: 2,
    },
    boot: {
      left: 480,
      top: 820,
      zIndex: 1,
      height: 300,
      width: 344,
      transform: [{ scaleX: 3.2 }, { scaleY: 3.2 }],
      position: "absolute",
    },
    search: {
      flex: 1,
      bottom: 0,
    },
    text1: {
      color: "#2F88FF",
      // top: 90,
      // right: -49,
      fontSize: 30,
      zIndex: 2,
    },
    
    add: {
      left: 0,
      top: 90,
      zIndex: 2,
      marginHorizontal: 50,
    },
    dropdown: {
      top: 1,
      right: -4,
      width: 75,
      color: "#2F88FF",
    },
    dropdown2: {
      top: 100,
      right: -24,
      color: "#FFFFFF",
      backgroundColor: 'FFFFFF',

    },
    dropdownText: {
      color: "#2F88FF",
      fontSize: 23,
    },
    circle: {
      width: 34,
      height: 34,
      borderRadius: 34 / 2,
      backgroundColor: "#2F88FF",
      borderColor: "#000000",
  
      zIndex: 2,
    },
    lock: {
      top: 500,
      left: -15,
      zIndex: 2,
      width: 215, // Adjust width as needed
      height: 215, // Adjust height as needed
      position:'absolute',
      color:"#00BF63",
    },
    dropDownTextGreen:{
      color:'#00BF63',
      backgroundColor: 'FFFFFF',

    },
    Picker:{
      height: 50, width: 150, top:-100, right:100, zIndex:4,position:"absolute", color:"#FFFFFF",  
    },
    Boottext:{
      right:-150,
      top: 20,
      fontSize:30,
      color:'pink'
    }
  });
  
  
  