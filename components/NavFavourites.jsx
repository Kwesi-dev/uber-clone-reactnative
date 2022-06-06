import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import tw from "twrnc"
data = [
    {
        id: 1,
        icon: "home",
        location: "Home",
        destination: "Opeikuma, Kasoa Ghana"
    },
    {
        id: 2,
        icon: "briefcase",
        location: "Work",
        destination: "Lapaz, Accra Ghana"
    }
]
const NavFavourites = () => {
  return (
      <ScrollView style={{paddingBottom: 30}}>
          {data.map(({destination, icon, location, id})=>
            <TouchableOpacity style={tw`flex-row items-center p-5`} key={id}>
            <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type="ionicon"
                color="white"
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
            </TouchableOpacity>
          )}
      </ScrollView>
    // <FlatList
    //     data={data}
    //     keyExtractor={(data)=>data.id}
    //     ItemSeparatorComponent={()=>(
    //         <View style={[tw`bg-gray-500`, {height: 0.5}]}/>
    //     )}
    //     renderItem={({item: { location, icon, destination}})=>(
    //         <TouchableOpacity style={tw`flex-row items-center p-5`}>
    //             <Icon
    //                 style={tw`mr-4 rounded-full bg-gray-300 p-3`}
    //                 name={icon}
    //                 type="ionicon"
    //                 color="white"
    //                 size={18}
    //             />
    //             <View>
    //                 <Text style={tw`font-semibold text-lg`}>{location}</Text>
    //                 <Text style={tw`text-gray-500`}>{destination}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )}
    //     showsVerticalScrollIndicator={false}
    // />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})