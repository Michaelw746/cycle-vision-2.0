import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PinScreen from "./PinScreen";
import App from "./App";

const Stack = createNativeStackNavigator();

export default function PinStackExport() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="pin" component={PinScreen} />
      <Stack.Screen name="home" component={App} />
    </Stack.Navigator>
  );
}
