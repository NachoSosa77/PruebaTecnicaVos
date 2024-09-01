import { Text, View, StyleSheet, Image, ActivityIndicator, ScrollView} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getProductDetail} from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export default function Detail() {
  const {producId} = useLocalSearchParams();

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
        <View className="justify-center items-center text-center">
            <Text className="text-black text-center font-bold text-xl">{data.product.title}</Text>
            <Image
            className="mb-4 rounded"
            source={{uri: data.product.image}}
            style={{width: 214, height: 294}}
            />
            <Text className="text-black/70 mt-4 text-left mb-8 text-base">{data.product.description}</Text>
            <Text>$ {data.product.price}</Text>
            <Text>{data.product.category}</Text>
        </View>
        </ScrollView>
        
    )
}
