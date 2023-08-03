import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image,  } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
class App extends Component {
  state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    radius: 1000, // initial radius in meters
    showPinScreen: false,
    selectedDropdownValue: 'Option 1', // default dropdown value
  };

  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };

  toggleSwitch = () => {
    this.setState((prevState) => ({
      showPinScreen: !prevState.showPinScreen,
    }));
  };

  handleDropdownChange = (itemValue) => {
    this.setState({ selectedDropdownValue: itemValue });
  };

  render() {
    const { mapRegion, radius, showPinScreen, selectedDropdownValue } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={mapRegion}
          onRegionChange={this.handleMapRegionChange}
        >
          <Circle
            center={mapRegion}
            radius={radius}
            fillColor="rgba(100,150,255,0.3)"
          />
        </MapView>

        <View style={styles.card}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <Picker
            selectedValue={selectedDropdownValue}
            onValueChange={this.handleDropdownChange}
          >
            <Picker.Item label="Option 1" value="Option 1" />
            <Picker.Item label="Option 2" value="Option 2" />
          </Picker>
        </View>

        <View style={styles.switchContainer}>
          <Switch
            value={showPinScreen}
            onValueChange={this.toggleSwitch}
          />
          <TouchableOpacity
            onPress={() => {
              if (showPinScreen) {
                // Navigate to pin screen logic
                // You can use navigation libraries like react-navigation
              }
            }}
          >
            <Text>Lock / Unlock</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  switchContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
