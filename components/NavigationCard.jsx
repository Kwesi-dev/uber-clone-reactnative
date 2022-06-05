import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_KEY } from "@env"
import { useNavigation } from '@react-navigation/native'
import { setDestination } from '../redux/slices/navSlice'
import { useDispatch } from 'react-redux'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/themed'
const NavigationCard = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
  return (
      <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Good Morning, Samuel</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                     styles={styles}
                     placeholder="where to?"
                     nearbyPlacesAPI="GooglePlacesSearch" 
                     debounce={400}
                     fetchDetails={true}
                     enablePoweredByContainer={false}
                     returnKeyType={"search"}
                     minLength={2}
                     onPress={(data, details = null)=>{                       
                        dispatch(
                            setDestination({
                                location: details.geometry.location,
                                description: data.description 
                            })
                        )
                        navigation.navigate("RideOptionsCard")
                     }}
                     query={{
                         key: GOOGLE_MAP_KEY,
                         language: "en"
                     }}
                />
            </View>
            <NavFavourites/>
        </View>
        <View style={tw`flex-row bg-white justify-center py-2 mt-auto border-t border-gray-100 `}>
            <TouchableOpacity style={tw`flex flex-row justify-between mr-6 bg-black w-24 px-4 py-3 rounded-full`}
                onPress={()=>{
                    navigation.navigate("RideOptionsCard")
                }}
            >
                <Icon name="car" type="font-awesome" color="white" size={16}/>
                <Text style={tw`text-white text-center`}>Ride</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`}>
                <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                <Text style={tw`text-center`}>Ride</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
}

export default NavigationCard

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput:{
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})