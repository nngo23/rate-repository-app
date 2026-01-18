import React from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";
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

class RepositoryList extends React.Component {
  renderHeader = () => <RepositoryListHeader {...this.props} />;

  render() {
    const { repositories, onItemPress } = this.props;

    if (!repositories)
      return <MyText style={styles.loadingErrorText}>Loading …</MyText>;

    return (
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => onItemPress(item.id)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default function RepositoryListContainer() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Latest repositories");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);

  const sort_options = {
    "Latest repositories": {
      orderBy: "CREATED_AT",
      orderDirection: "DESC",
    },
    "Highest rated repositories": {
      orderBy: "RATING_AVERAGE",
      orderDirection: "DESC",
    },
    "Lowest rated repositories": {
      orderBy: "RATING_AVERAGE",
      orderDirection: "ASC",
    },
  };

  const { data, loading, error } = useRepositories({
    ...(sort_options[sortOption] || sort_options["Latest repositories"]),
    searchKeyword: debouncedSearchKeyword,
  });

  const repositories = data;

  const handleItemPress = (id) => {
    navigate(`/repository/${id}`);
  };

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
      <RepositoryList
        repositories={repositories}
        searchKeyword={searchKeyword}
        onSearch={setSearchKeyword}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        sortOption={sortOption}
        setSortOption={setSortOption}
        onItemPress={handleItemPress}
      />
    </SafeAreaView>
  );
}
