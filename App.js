import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  onPress,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import  {createStackNavigator} from "@react-navigation/stack"
import Home from "./Home";
import PinScreen from "./PinScreen";




export default function App({ navigation }) {

  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  style={styles.button} />
        <Stack.Screen name="Pin" component={PinScreen}  style={styles.button} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "White",
  },
  button: {
    backgroundColor: "#000",
    color: "White",
    margin: 57,
    padding: 17,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
