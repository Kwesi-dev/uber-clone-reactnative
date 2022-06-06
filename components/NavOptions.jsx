import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import tw from "twrnc"
import { useSelector } from 'react-redux'
import { selectOrigin } from '../redux/slices/navSlice'
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
    // const origin = useSelector(selectOrigin)
  return (
    <ScrollView horizontal style={{flex: 1}}>
        {data.map((item)=>
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            onPress={() => navigation.navigate(item.screen)} key={item.id}
            // disabled={!origin}
           >
            {/* style={tw`${!origin && "opacity-20"}`} */}
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
    </ScrollView>
    // <FlatList
    //     data={data}
    //     horizontal
    //     keyExtractor={(data)=> data.id}
    //     showsHorizontalScrollIndicator={false}
    //     renderItem={({item}) => (
    //         <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
    //             onPress={() => navigation.navigate(item.screen)}
    //             // disabled={!origin}
    //         >
    //             {/* style={tw`${!origin && "opacity-20"}`} */}
    //             <View>
    //                 <Image
    //                     style={{ width: 120, height: 120, resizeMode: "contain" }}
    //                     source={{uri: item.image}}
    //                 />
    //                 <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
    //                 <Icon
    //                  style={tw`p-2 bg-black mt-4 w-10 rounded-full`}
    //                  name='arrowright' type='antdesign' color='white'/>
    //             </View>
    //         </TouchableOpacity>
    //     )}
    ///>
  )
}

export default NavOptions