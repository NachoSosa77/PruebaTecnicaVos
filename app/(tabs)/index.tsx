import { ActivityIndicator, FlatList, View, Text} from "react-native";
import { getProducts } from '../../api/products';
import { useQuery } from "@tanstack/react-query";
import ProductListItem from "../../components/ProductListItem";
import type { Product } from '../../api/products';
import { Stack } from "expo-router";


export default function Home(){
    const {data, isLoading, error} = useQuery<Product[], Error>({
        queryKey: ['products'],
        queryFn: getProducts
      });
    
      if(isLoading){
        return <ActivityIndicator/>
      }

      if(error){
        return <Text>{error.message}</Text>
      }
   

  return (
   
        <View className="flex-1 mt-5 bg-white">
            <FlatList
            data={data}
            contentContainerStyle={{ gap: 5, padding: 5 }}
            keyExtractor={(item) => item.id }
            renderItem={({item}) => <ProductListItem product={item}/>}
            />
        </View>
      
    )
}
