import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store';
import { Provider } from 'react-redux';
import Homescreen from './screens/Homescreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapscreen from './screens/Mapscreen';
export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown: false}}/>
              <Stack.Screen name='Mapscreen' component={Mapscreen}/>
          </Stack.Navigator>
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
