import { CartIcon, HomeIcon, CameraIcon } from "@/components/Icons";
import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#fff" },
            tabBarActiveTintColor: "#26357c",
        }}>
            <Tabs.Screen name='index' options={{title: 'Home', tabBarIcon:({color})=>
                <HomeIcon color={color}/>
            }}/>
            <Tabs.Screen name='cart' options={{title: 'Cart', tabBarIcon:({color})=>
                <CartIcon color={color}/>
            }}/>
            <Tabs.Screen name='camera' options={{title: 'Camera', tabBarIcon:({color})=>
                <CameraIcon color={color}/>
            }}/>     
        </Tabs>
    )
}
