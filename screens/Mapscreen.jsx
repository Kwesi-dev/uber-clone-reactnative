import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationCard from "../components/NavigationCard"
import RideOptionsCard from '../components/RideOptionsCard'
import NavFavourites from '../components/NavFavourites'

const Mapscreen = () => {
  const Stack = createNativeStackNavigator()
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>  
          <Stack.Navigator>
            <Stack.Screen name="NavigationCard" component={NavigationCard} options={{headerShown: false}}/>
            <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{headerShown: false}}/>
          </Stack.Navigator>
      </View>
    </View>
  )
}

export default Mapscreen

const styles = StyleSheet.create({})