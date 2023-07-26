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
import ModalDropdown from 'react-native-modal-dropdown';
import colors from "react-native-elements";



export default function App({ navigation }) {
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
        ? require("./assets/Vector5.png")
        : require("./assets/Vector65.png")
    );
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);
           
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
         
  const Stack = createNativeStackNavigator();

  return (
    <View>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="pin"
            component={pinnumber}
            style={styles.button}
          />
        </Stack.Navigator>
      </NavigationContainer>  */}
      
      <MapView style={styles.map} region={mapRegion}>
      <View style={styles.button}>
      {/* <Card  > */}
        <Image source={require("./assets/logo.png")} style={styles.logo} />
  
        <Text style={styles.text1}>Boot #1</Text>
      {/* </Card> */}
      </View>
        <Marker coordinate={mapRegion} title="Marker" />
        <View styles={styles.overlayImageContainer}>
       
      <TouchableOpacity onPress={() => console.log("Pressed!")}>
        <Image source={imageSource}  style={styles.lock} />
        <Switch
        style={styles.boot}
        trackColor={{ false: "#ffffff", true: "#2F88FF" }}
        onValueChange={toggleSwitch}
        value={isEnabled}
        onPress={() => navigation.navigate("Lock")}
      />
      </TouchableOpacity>
      <View >
        {/* Your other components inside the button */}
        <TouchableOpacity onPress={toggleDropdown}>
        <Image source={require("./assets/Add.png") } style={styles.add} />
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <ModalDropdown
          options={["Boot 1",] }
          style = {styles.dropdown2}
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
    borderRadius:60,
    width: 365,
    flexshrink: 0,
    height: 75,
    backgroundColor: "#FFFFFF",
    flexDirection: "row", // Align items in a horizontal line
    top:69,
    left:10
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  map: {
    width: "100%",
    height: "100%",
    margin: 0,
    zIndex:0,
  },
  logo: {
    margin: 0,
    height: 65,
    width: 80,
    top: 10 ,
    right: -34,
    zIndex:2
  },
  boot: {
   
    
    left:480,
    top: 940,
    zIndex:1,
    height:200,
    width:344,
    transform:[{ scaleX: 3.2 }, { scaleY: 3.2 }],
    position:"absolute"
    
  },
  search: {
    flex: 1,
    bottom: 0,
  },
  text1:{
    color:"#2F88FF",
    top: 20,
    right: -25,
    fontSize:30,
    zIndex:2,
  
  },
  lock:{
    left:192,
    top: 745,
    zIndex:2,
  },
  add:{
        left:260,
        top:87,
        zIndex:2,


  },
  dropdown: {
    top:1,
    right:-2,
    width:75,

    
    
  },
  dropdown2:{
 right:-150,
 color:"#FFFFFF",

  },
  dropdownText: {
    
    
    
  },
  
});
