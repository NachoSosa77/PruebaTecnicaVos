import { useDispatch, useSelector } from "react-redux";
import { View, Image, Text, ScrollView } from "react-native";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { Stack } from "expo-router";


export default function Cart(){
    /* const cart = useSelector((state:RootState)=>state.cart)    
    const dispatch = useDispatch(); */

    /* useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);
       */
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
            <Text className="flex-1 backdrop:text-black text-center font-bold text-xl mt-2">TITULO</Text>
            <Text className="text-black/70 mt-4 text-center mb-4 text-base">IMAGEN</Text>
            <Text>$ PRECIO</Text>
        </View>
        </ScrollView>
    )
}
