import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Login.js";
import Chat from "./screens/Chat.js"
// const Stack = createStackNavigator();

// // function ChatStack() {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Chat" component={Chat} />
// //     </Stack.Navigator>
// //   )
// // }

// // function RootNavigation() {
// //   return (
// //     <NavigationContainer>
// //       <ChatStack />
// //     </NavigationContainer>
// //   )

// // }

export default function App() {
  return (
    <View>
      {/* <RootNavigation /> */}
      <Login />
    </View>
  );
}

