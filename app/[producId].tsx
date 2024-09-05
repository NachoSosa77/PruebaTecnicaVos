import { Text, View, Image, ActivityIndicator, ScrollView, Pressable,} from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { getProductDetail} from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/redux/store";
import { addToCart } from '@/redux/features/cartSlice';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detail() {

  const {producId} = useLocalSearchParams();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart)

  
  const {data, isLoading, error} = useQuery({ 
    queryKey: ['product', producId], 
    queryFn: ()=>getProductDetail(producId)
  })
  
  if(isLoading){
    return <ActivityIndicator/>
  }

  if (error){
    return <Text>{error.message}</Text>
  }
   
  return (
        <SafeAreaView>
          <ScrollView>
          <Stack.Screen
          options={{
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "black",
          headerTitle: '',

          }}
        />
        <View className="justify-center items-center text-center -m-2">
              <Image
              className="rounded-lg"
              source={{uri: data.product.image}}
              style={{width: 214, height: 250}}
              />
            <Text className=" backdrop:text-black text-center font-bold text-xl m-2">{data.product.title}</Text>
                  <Text className="text-black/70 text-sm ml-4 mb-2">{data.product.description}</Text>
                  <View className="items-center">
                  <Text className="text-base">$ {data.product.price}</Text>
                  <Text className="text-base">{data.product.category}</Text>
                  </View>
          </View>
            <View className="mt-4 p-2">
                <Link asChild href={'/cart'}>
                 <Pressable className="items-center justify-center bg-[#26357c] rounded-lg" 
                            onPress={() => dispatch(addToCart(data.product))
                            }>
                  <Text className='text-white text-lg font-bold p-4'>Agregar Al Carrito </Text>
                 </Pressable>
                 </Link>
            </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}
