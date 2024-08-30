import { Link } from "expo-router";
import { Text, View, StyleSheet, Image} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getProducts, Product } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export default function Detail({product}) {
  //   const {producId} = useLocalSearchParams()
 
  return (
        <View className="flex-1 justify-center items-center">
            <View className="flex-row gap-4" key={product.id}>
            <Image
            source={{uri: product.image}}
            style={styles.image}
            />
            <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>{product.title}</Text>  
            <Text style={styles.price}>{product.price}</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 42,
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
      marginTop: 10,
    },
    price: {
      fontSize: 18,
      color: "#000",
    },
  });
