import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from "twrnc"

const data = [
    {
        id: "1", 
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "Mapscreen"
    },
    {
        id: "2", 
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },
]
const NavOptions = () => {
    const navigation = useNavigation()
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(data)=> data.id}
        renderItem={({item}) => (
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                onPress={() => navigation.navigate(item.screen)}
            >
                <View>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: "contain" }}
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                     style={tw`p-2 bg-black mt-4 w-10 rounded-full`}
                     name='arrowright' type='antdesign' color='white'/>
                </View>
            </TouchableOpacity>
        )}
    />

  )
}

export default NavOptions