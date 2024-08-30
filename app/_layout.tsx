import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

const client = new QueryClient();

export default function App() {
  
  
  return (
    <QueryClientProvider client={client}>
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
