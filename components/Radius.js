import {View} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import React, { useState, useEffect, setSelectedValue, selectedValue, onValueChange, setErrorMsg} from "react";

 function Radius () {
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
        <Circle
       
        center={mapRegion}
        styles={styles.circle }
        radius={1000}
        strokeColor='#00BF63'
        fillColor='#7ED957'
        
        
      />
    )
};

const styles ={
    circle:{
        width:215,
        height:215,
        borderRadius:400,
        backgroundColor:'#FFFFFF',
        borderColor: '#7ED957',
        borderWidth: 9,
        top:500,
        right:100,
        zindex:1,
        position:'absolute'

    },
    rad:{
        opacity:0.7,
      }
}
export {Radius}