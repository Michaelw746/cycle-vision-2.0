import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PinScreen = () => {
  const [pin, setPin] = useState('');

  const handlePinInput = (text) => {
    // Limit the PIN input to 4 digits
    if (text.length <= 4) {
      setPin(text);
    }
  };

  const handleSubmit = () => {
    // You can implement your validation logic here
    if (pin === '1234') {
      alert('PIN is correct!');
    } else {
      alert('Incorrect PIN. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your PIN</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.pinInput}
        keyboardType="numeric"
        maxLength={4}
        value={pin}
        onChangeText={handlePinInput}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  pinInput: {
    fontSize: 24,
    width: 200,
    textAlign: 'center',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PinScreen;
