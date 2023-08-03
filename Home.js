import React, { useState } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

const Home = () => {
  const [lock, setLock] = useState(false);
  const [radius, setRadius] = useState(100); // Default radius in meters
  const [selectedOption, setSelectedOption] = useState(null);

  const handleLockToggle = () => {
    setLock(!lock);
  };

  const handleMarkerPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Your Logo</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text>{selectedOption || 'Select Option'}</Text>
          <AntDesign name="caretdown" size={16} />
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          onPress={() => handleMarkerPress('Option 1')}
        />
        <Circle
          center={{ latitude: 37.78825, longitude: -122.4324 }}
          radius={radius}
          fillColor="rgba(128, 128, 255, 0.3)"
          strokeColor="rgba(128, 128, 255, 0.5)"
        />
      </MapView>
      <View style={styles.footer}>
        <Text>Lock Map:</Text>
        <Switch value={lock} onValueChange={handleLockToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  map: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Home;
