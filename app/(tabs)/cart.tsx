import { View, Button, Text, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartListItems from "@/components/CartListItems";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total)

  return (
    <SafeAreaView>
      <Text className="text-center text-2xl font-bold">Mi carrito</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <CartListItems product={item} />
          </View>
        )}
      />
      <View className="active:opacity-70 border border-black rounded-xl p-2 m-2">
         <Text className="text-xl font-bold text-center">Total: ${total}</Text>
      </View>
    </SafeAreaView>
  );
}
