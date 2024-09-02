import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useReactQueryDevTools } from '@dev-plugins/react-query';

const queryClient = new QueryClient();

export default function App() { 
  useReactQueryDevTools(queryClient)
  
  return (
    <QueryClientProvider client={queryClient}>
        <View className="flex-1 mt-4">
          <Stack screenOptions={{
            headerStyle: {backgroundColor: 'white'},
          }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
          </Stack>
          <StatusBar style="dark" />
        </View>
      </QueryClientProvider>
  );
}
