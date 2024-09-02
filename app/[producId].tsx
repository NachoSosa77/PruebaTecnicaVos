import { Text, View, StyleSheet, Image, ActivityIndicator, ScrollView, Pressable} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { getProductDetail} from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from 'react-redux';

export default function Detail() {
  const {producId} = useLocalSearchParams();
  const dispatch = useDispatch();

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
        <ScrollView>
          <Stack.Screen
          options={{
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "black",
          headerTitle: '',
          }}
        />
        <View className="justify-center items-center text-center">
            <Text className="flex-1 backdrop:text-black text-center font-bold text-xl mt-2">{data.product.title}</Text>
            <Image
            className="mb-4 mt-2"
            source={{uri: data.product.image}}
            style={{width: 214, height: 294}}
            />
            <Text className="text-black/70 mt-4 text-center mb-4 text-base">{data.product.description}</Text>
            <Text>$ {data.product.price}</Text>
            <Text>{data.product.category}</Text>
            
           
        </View>
        </ScrollView>
        
    )
}
