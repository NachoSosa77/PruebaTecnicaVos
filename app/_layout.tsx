import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function App() {
  useReactQueryDevTools(queryClient);


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <View style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="dark" />
        </View>
      </QueryClientProvider>
    </Provider>
  );
}
