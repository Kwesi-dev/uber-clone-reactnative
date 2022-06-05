import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import store from './redux/store';
import { Provider } from 'react-redux';
import Homescreen from './screens/Homescreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapscreen from './screens/Mapscreen';
import { KeyboardAvoidingView } from 'react-native';
export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{flex: 1}}
            keyboardVerticalOffset={Platform.OS == "ios" ? -64 : 0}
          >
            <Stack.Navigator>
                <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown: false}}/>
                <Stack.Screen name='Mapscreen' component={Mapscreen}/>
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
