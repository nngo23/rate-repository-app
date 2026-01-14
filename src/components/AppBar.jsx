import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useQuery, useApolloClient } from "@apollo/client/react";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(ME);
  const authenticated = data?.me != null;
  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Link to="/" style={styles.button}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        {authenticated ? (
          <Link to="/signout" style={styles.button}>
            <Text style={styles.tabText} onPress={handleSignOut}>
              Sign out
            </Text>
          </Link>
        ) : (
          <Link to="/signin" style={styles.button}>
            <Text style={styles.tabText}>Sign in</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
