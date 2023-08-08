import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PinScreen from "./PinScreen";
import App from "./App";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

export default function PinStackExport() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={App}/>
      {/* <Stack.Screen name="Pin" component={PinScreen}  /> */}
    
    </Stack.Navigator>
    
  </NavigationContainer>
  );
}
