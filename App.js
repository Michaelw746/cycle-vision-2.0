import {
  Button,
  StyleSheet,
  Text,
  View,
  ReactNativeZoomableView,
  onPress,
  Image,
} from "react-native";
// this file is using for creating a tracker and to use expo map api for the map
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import { Card, SearchBar } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Switch } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

import { Circle } from "./components/Circle";
import{setErrorMsg} from "react-native"

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();


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
  const [isEnabled, setIsEnabled] = useState(false);
  const [imageSource, setImageSource] = useState(
    require("./assets/Vector65.png")
  );
   
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setImageSource(
      isEnabled
        ? require("./assets/Vector65.png")
        : require("./assets/Vector5.png")
    );
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  

  return (
   
     <View>
      
     

      <MapView style={styles.map} region={mapRegion}>
        <View style={styles.button}>
       
          {/* <Card  > */}
          <View>
            {/* Your other components inside the button */}
            <TouchableOpacity onPress={toggleDropdown}>
              <Image source={require("./assets/Add.png")} style={styles.add} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>Boot #1</Text>
          <Image source={require("./assets/logo.png")} style={styles.logo}   />

          {/* </Card> */}
        </View>
        <Marker coordinate={mapRegion} title="Marker" />
        <View styles={styles.circle}>
          <TouchableOpacity >
            <Image
              source={imageSource}
              style={[styles.lock, { left: isEnabled ? 190 : 125 }, {top: isEnabled ? 620:620}]}
             />
                

                <Circle/>

            <Switch
              style={styles.boot}
              trackColor={{ false: "#ffffff", true: "#2F88FF" }}
              onValueChange={toggleSwitch}
              onPress={() => {
                //put a var change here
                //this code switch the lock
              }}
              value={isEnabled}
            />
          </TouchableOpacity>
          

          {isDropdownVisible && (
            <ModalDropdown
              options={["Boot 1"]}
              style={styles.dropdown2}
              dropdownStyle={styles.dropdown}
              dropdownTextStyle={styles.dropdownText}
              onSelect={(index) => {
                // Handle the selected option here if needed
                console.log("Selected index:", index);
              }}
            />
          )}
        </View>
      </MapView>
    </View>
  );
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
    alignItems:"center",
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
    top:3,
    // top: -1,
    // right: -280,
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
   marginHorizontal:50,
  },
  dropdown: {
    top: 1,
    right: -2,
    width: 75,
    color: "#2F88FF",
  },
  dropdown2: {
    top:34,
    right: -24,
    color: "#FFFFFF",
  },
  dropdownText: {
    color: "#2F88FF",
    fontSize:23,
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 34/2,
    backgroundColor: "#2F88FF",
    borderColor:'#e9c46a',
  
    zIndex: 2,
  },
});
