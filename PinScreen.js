import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

function PinScreen({navigation}) {
  const Stack = createNativeStackNavigator();

  return (
    <View>

      <Text>PinScreen</Text>
    </View>
  )
}

export default PinScreen

const styles = StyleSheet.create({})