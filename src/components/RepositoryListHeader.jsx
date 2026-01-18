import { View, StyleSheet } from "react-native";
import { Searchbar, Menu, Button, Divider } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 1,
    paddingBottom: 6,
    backgroundColor: "#e1e4e8",
  },
});

const RepositoryListHeader = ({
  menuOpen,
  setMenuOpen,
  sortOption,
  setSortOption,
  searchKeyword,
  onSearch,
}) => {
  return (
    <View style={styles.container}>
      <Searchbar
        style={{ backgroundColor: "white", marginBottom: 8 }}
        placeholder="Search repositories"
        value={searchKeyword}
        onChangeText={onSearch}
      />

      <Menu
        visible={menuOpen}
        onDismiss={() => setMenuOpen(false)}
        anchor={
          <Button onPress={() => setMenuOpen(true)}>
            {sortOption
              ? `${sortOption}                         `
              : "Select sorting option   "}{" "}
            ▼
          </Button>
        }
      >
        <Menu.Item title="Select sorting option" disabled />
        <Divider />
        <Menu.Item
          title="Latest repositories"
          onPress={() => {
            setMenuOpen(false);
            setSortOption("Latest repositories");
          }}
        />
        <Menu.Item
          title="Highest rated repositories"
          onPress={() => {
            setMenuOpen(false);
            setSortOption("Highest rated repositories");
          }}
        />
        <Menu.Item
          title="Lowest rated repositories"
          onPress={() => {
            setMenuOpen(false);
            setSortOption("Lowest rated repositories");
          }}
        />
      </Menu>
    </View>
  );
};

export default RepositoryListHeader;
