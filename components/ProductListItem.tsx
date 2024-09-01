import { Link } from "expo-router"
import { View, StyleSheet, Text, Image, Pressable } from "react-native"
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

const ProductListItem = ({product}) => {
    return (
      <Link href={`/${product.id}`} asChild>
        <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
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
        </StyledPressable>
      </Link>
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

export default ProductListItem;



