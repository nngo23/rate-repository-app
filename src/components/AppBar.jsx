import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.text,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  tabText: {
    color: theme.colors.card,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
  button: {
    marginRight: 20,
    paddingVertical: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showScrollIndicator={false}>
        <Link to="/" style={styles.button}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.button}>
          <Text style={styles.tabText}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
