import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import MyText from "./MyText";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8",
  },
  separator: {
    height: 10,
  },
  loadingErrorText: {
    fontSize: 16,
    padding: 20,
    textAlign: "center",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();
  if (loading) {
    return <MyText style={styles.loadingErrorText}>Loading …</MyText>;
  }
  if (error) {
    return (
      <MyText style={styles.loadingErrorText}>Error: {error.message}</MyText>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default RepositoryList;
