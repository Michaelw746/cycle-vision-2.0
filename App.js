import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PinScreen from "./PinScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import Home from './Home'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pin" component={PinScreen}  />
    
    </Stack.Navigator>
    
  </NavigationContainer>
  );
}
