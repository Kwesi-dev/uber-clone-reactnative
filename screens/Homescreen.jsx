import { StyleSheet, Image, View, SafeAreaView, Text } from 'react-native'
import tw from "twrnc"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_KEY } from "@env"
const Homescreen = () => {
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
            placeholder="where are you from"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
          <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  logo:{
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
})