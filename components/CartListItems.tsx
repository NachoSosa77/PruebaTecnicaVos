import { removeItem } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";
import { View, StyleSheet, Text, Image, Pressable, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const CartListItems = ({product}) => {
  const dispatch = useDispatch();

      return (
        <SafeAreaView>
        <View key={product.id} className="p-2">
            <View className="active:opacity-70 border border-black rounded-xl p-2">
              <View className="flex-row items-center">
              <Image className="rounded-lg" source={{uri: product.image}} style={{width: 100, height: 100}} />
              <Text className="mb-1 p-2">{product.title.slice(0, 30)}.</Text>
              <Text className="mb-1">${product.price}</Text>
              </View>
            <View className='mt-4'>
                 <Pressable className="items-center justify-center bg-red-500 rounded-lg" onPress={() => dispatch(removeItem(product))}>
                  <Text className='text-white text-lg font-bold p-2'>Eliminar</Text>
                 </Pressable>
            </View>
            </View>
              
        </View>
        </SafeAreaView>
    )
  }
  
export default CartListItems;
