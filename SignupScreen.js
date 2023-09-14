// import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react';
// import { TextInput } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth'; // Updated import
// import { auth } from './FirebaseConfig' 
// import { useNavigation } from '@react-navigation/native'

// const SignupScreen = () => { // Renamed to SignupScreen
//   // Navigation hook
//   const navigation = useNavigation()

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Sign up the user
//   const handleSignUp = () => {
//     createUserWithEmailAndPassword(auth, email, password) // Updated function

//     .then((userCredential) => {
//       const user = userCredential.user
//       console.log('user: ', user)
//       navigation.navigate("Home")

//       return user;
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   }

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior="padding"
//     >
//       <View style={styles.inputContainer}>
//         <Text>Sign Up</Text>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={text => setPassword(text)}
//           style={styles.input}
//           secureTextEntry
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={handleSignUp}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("Login")} // Navigate to the login screen
//           style={[styles.button, styles.buttonOutline]}
//         >
//           <Text style={styles.buttonOutlineText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   )
// };

// export default SignupScreen // Renamed export

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     width: '80%'
//   },
//   input: {
//     backgroundColor: 'white',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   buttonContainer: {
//     width: '60%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: '#FFEEAA',
//     width: '100%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonOutline: {
//     backgroundColor: 'white',
//     marginTop: 5,
//     borderColor: 'black',
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: 'black',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: 'black',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// })
