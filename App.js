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
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import {Picker} from "@react-native-picker/picker"
import { PinScreenModal } from "./components/PinScreenModal";


export default function App({navigation}) {
  let [mapRegion, setMapRegion] = useState({
    latitude: 34.034411637144196,
    longitude: -118.45671197410529,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  console.log("Initial lat", mapRegion.latitude);
  console.log("Initial Long", mapRegion.longitude);

  const [location, setLocation] = useState(null);
  // Request user location info
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    {
      /*Gets current position and then sets the latitude and longitude*/
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
      timeInterval: 1,
    });

    setLocation(location);
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log("This is lat", location.coords.latitude);
    console.log("This is long", location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);
  const [selectedValue, setSelectedValue] = useState("Boot #1");

  const [isLocked, setIsLocked] = useState(true); // Added state for lock/unlock

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };
  const [isModalVisible, setModalVisible] = useState(false); 

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View>
      
      <MapView style={styles.map} region={mapRegion}>
      
      <View style={styles.button}>
          {/* <Card  > */}
          <View>
            {/* Your other components inside the button */}
           
          </View>
          {/* <Text style={styles.text1}>Boot #1</Text> */}
          <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150, top:-77, right:-180, }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Boot #1" value="java" />
        <Picker.Item label="Boot #2" value="js" />
      </Picker>

          <Image source={require('../cycle-vision-2.0/assets/logo.png')} style={styles.logo} />
        

        </View>
      <Marker coordinate={mapRegion} title="Marker" />  
      <Circle/>
      <TouchableOpacity onPress={() => {
  toggleLock();
  toggleModal();
}}
 >
          <Image
            source={
              isLocked
                ? require("../cycle-vision-2.0/assets/lock1.png")
                : require("../cycle-vision-2.0/assets/unlock1.png")
            }
            style={styles.lock}
           
          />
        </TouchableOpacity>
        <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {/* Add your pin screen components here */}
          <Text style={styles.modalText}>Enter Pin:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your pin"
            // Add onChangeText and value props to manage input state
          />
          <Button title="Submit" onPress={toggleModal} />
        </View>
      </Modal>
        
        
      </MapView>


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
    height: 65,
    width: 80,
    top: 3,
   right: 150,
    zIndex: 2,
  },
  boot: {
    left: 480,
    top: 820,
    zIndex: 1,
    height: 200,
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
  lock: {
    top: 705,
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
    right: -2,
    width: 75,
    color: "#2F88FF",
  },
  dropdown2: {
    top: 34,
    right: -24,
    color: "#FFFFFF",
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
    borderColor: "#e9c46a",

    zIndex: 2,
  },
  lock: {
    top: 337,
    left:140,
    zIndex: 1,
    width: 120, // Adjust width as needed
    height: 120, // Adjust height as needed
  },
});
