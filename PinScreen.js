import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Navigation } from '@react-navigation/native';


const PinScreen = ({ navigation }) => {
  const [pin, setPin] = useState("");

  const handlePinSubmit = () => {
    // Check the PIN validity and perform navigation if valid
    if (pin === "1234") { // Replace with your actual PIN validation logic
      navigation.navigate("Home"); // Navigate to the main screen after PIN validation
    } else {
      // Handle incorrect PIN case
      alert("Incorrect PIN");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter PIN</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={setPin}
        value={pin}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handlePinSubmit}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default PinScreen;
