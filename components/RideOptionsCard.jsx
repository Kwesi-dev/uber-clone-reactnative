import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native'
import { selectTravelTimeInformation } from '../redux/slices/navSlice'
import { useSelector } from 'react-redux'
const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "UberX",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "UberLUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]
const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = React.useState(null)
  // const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigationCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
        <Text style={tw`py-5 text-center text-xl`}>Select a Ride-</Text>
      </View>
      <ScrollView>
        {data.map((item)=>
          <TouchableOpacity style={tw`flex-row items-center justify-between px-10 ${selected?.id === item.id && "gb-gray-200"}`}
          onPress={()=>setSelected(item)} key={item.id}
          >
          <Image source={{uri: item.image}}
            style={{
              height: 100,
              width: 100,
              resizable: true
            }}
          />
          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
            <Text>Travel time</Text>
          </View>
          <Text style={tw`text-xl`}>$99</Text>
        </TouchableOpacity>  
        )}
      </ScrollView>
      {/* <FlatList
        data={data}
        keyExtractor={(data)=>data.id}
        renderItem={({item})=>(
          <TouchableOpacity style={tw`flex-row items-center justify-between px-10 ${selected?.id === item.id && "gb-gray-200"}`}
            onPress={()=>setSelected(item)}
          >
            <Image source={{uri: item.image}}
              style={{
                height: 100,
                width: 100,
                resizable: true
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>Travel time</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
      /> */}
      <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})