import {
    Button,
    StyleSheet,
    Text,
    View,
    ReactNativeZoomableView,
    onPress,
    Image,
    Modal,
    TextInput
  } from "react-native";
  // this file is using for creating a tracker and to use expo map api for the map
  import React, { useState, useEffect, setSelectedValue, selectedValue, onValueChange } from "react";
  import { TouchableOpacity } from "react-native";
  import ModalDropdown from "react-native-modal-dropdown";
  import { Circle } from "./components/Circle";
  import { setErrorMsg } from "react-native";
  import MapView from "react-native-maps";
  import { Marker } from "react-native-maps";
  import {Picker} from "@react-native-picker/picker"
  import { PinScreenModal } from "./components/PinScreenModal";
  import { Map } from "./components/Map";
  import { Switch } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
 

  
  export default function App({navigation}){
  
  
  
    const [selectedValue, setSelectedValue] = useState("Boot #1");
 
    const [isLocked, setIsLocked] = useState(true); // Added state for lock/unlock
  
    const toggleLock = () => {
      setIsLocked(!isLocked);
    };
    const [isModalVisible, setModalVisible] = useState(false); 
    const[isVisible, setisVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    // render(){
    //   const { mapRegion, radius, showPinScreen, selectedDropdownValue } = this.state;
  
    return (
      
      <View>
         {/* <DropdownButton/> */}
       <Map/>
      
        <View style={styles.button}>
            {/* <Card  > */}
            <View>
              {/* Your other components inside the button */}
             
            </View>
            {/* <Text style={styles.text1}>Boot #1</Text> */}
            <TouchableOpacity onPress={() => {if(setisVisible === false)
            { setisVisible(!isVisible)
            
            }
          else{
            setisVisible(!isVisible)
          }}
            }>
              {/* {selectedValue === } */}
               <Text style= {styles.Boottext}>Boot #1</Text>
            <Image source={require('./assets/Dropdown.png')} style = {{right:-300, top:-15}}/>
            </TouchableOpacity>
            
            {isVisible ?
            (
<Picker
          selectedValue={selectedValue}
          style={styles.Picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          
        >
          
          <Picker.Item  color='pink'   label="Boot #1" value={'Boot1'}  />
          
          
          <Picker.Item  color="pink" label="Boot #2" value ={'Boot2'} />
           
        </Picker>
        
            ):null }      
 
            <Image source={require('./assets/logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={() => {
    toggleLock();
  //  navigation.navigate('Pin')
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

        
       
           </View>
        
       
          {/* <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
        //     {/* Add your pin screen components here */}
        {/* //     <Text style={styles.modalText}>Enter Pin:</Text>
        //     <TextInput */}
        {/* //       style={styles.input}
        //       placeholder="Enter your pin"
        //       // Add onChangeText and value props to manage input state
        //     />
        //     <Button title="Submit" onPress={toggleModal} />
        //   </View> */}
        {/* // </Modal>  */}
        
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
      top: 400,
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
      height: 50, width: 150, top:-57, right:100, zIndex:4,position:"absolute", color:"#FFFFFF",  
      //  backgroundColor:"#FFFFFF",
      // backgroundColor: 'lightgray',
      // // color: 'blue', // This sets the color of the selected item's text
    },
    Boottext:{
      right:-150,
      top: 20,
      fontSize:30,
      color:'pink'
    }
  });
  
  
  