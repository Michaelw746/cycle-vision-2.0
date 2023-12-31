import { View,  StyleSheet } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import React, { useState, useEffect, setSelectedValue, selectedValue, onValueChange, setErrorMsg} from "react";
import * as Location from 'expo-location';
import { Radius } from './Radius';
export function Map({navigation}){
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
    return (
     
        <MapView style={styles.map} region={mapRegion}w>
        <Marker coordinate={mapRegion} title="Marker"
         pinColor="green"
          styles={{pinColor:"green",}}/>
          <Circle coordinate ={mapRegion} fillColor='#00BF63'  />
       <Circle
  center={mapRegion}
  radius={1000}
  strokeColor='#00BF63'
  strokeWidth={2}
  fillColor='#7ED957'
  op
  
/>
<Radius />
        </MapView>
   
    );
  };
  const styles = StyleSheet.create({
    map: {
      width: "100%",
      height: "100%",
      margin: 0,
    },
   
    
  })