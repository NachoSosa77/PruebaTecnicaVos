import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { getProducts } from "../../api/products";
import { useQuery } from "@tanstack/react-query";
import ProductListItem from "../../components/ProductListItem";
import type { Product } from "../../api/products";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { data, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        className="m-2"
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </SafeAreaView>
  );
}
