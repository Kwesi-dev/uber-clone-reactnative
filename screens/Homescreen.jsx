import { StyleSheet, Image, View, SafeAreaView, Text , ScrollView} from 'react-native'
import tw from "twrnc"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_KEY } from "@env"
import { setOrigin, setDestination, setTravelTimeInformation} from "../redux/slices/navSlice"
import { useDispatch } from 'react-redux'
import NavFavourites from '../components/NavFavourites'
const Homescreen = () => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
          <Image
            style={styles.logo}
            source={{uri: "https://links.papareact.com/gzs"}}
            />
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0
              },
              textInput:{
                fontSize: 18
              }
            }
          }
          query={{
            key:  GOOGLE_MAP_KEY,
            language: "en",
          }}
          onPress={(data, details = null)=>{
            dispatch(setOrigin({
              location: details.geometry.location,
              destination: data.description
            }))
                // dispatch(setDestination(null))
            }}
            fetchDetails={true}
            returnKeyType={fetch}
            enablePoweredByContainer={false}
            minLength={2}
            placeholder="where from?"
            nearbyPlacesAPI="GooglePlacesSearch" 
            debounce={400}
            />
          <NavOptions/>
          <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  logo:{
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
})