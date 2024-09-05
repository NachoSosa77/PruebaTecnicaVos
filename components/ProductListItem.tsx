import { Link } from "expo-router"
import { View, StyleSheet, Text, Image, Pressable } from "react-native"
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledPressable = styled(Pressable);

const ProductListItem = ({product}) => {
    return (
      <SafeAreaView>
      <Link href={`/${product.id}`} asChild>
        <StyledPressable className="active:opacity-70 border border-black active:border-white/50  bg-gray-500/10 rounded-xl p-2">
        <View className="flex-row gap-4 justify-center" key={product.id}>
            <Image
            source={{uri: product.image}}
            style={styles.image}
            />
            <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>{product.title.slice(0, 50)}</Text>  
            <Text className="mt-6 text-center" style={styles.price}>${product.price}</Text>
            </View>
        </View>
        </StyledPressable>
      </Link>
      </SafeAreaView>
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
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "#000",
  },
});

export default ProductListItem;



