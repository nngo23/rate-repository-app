import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import { useQuery, useApolloClient } from "@apollo/client/react";
import { Link, useNavigate } from "react-router-native";
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
  const navigate = useNavigate();
  const { data } = useQuery(ME);
  const authenticated = data?.me != null;
  console.log("Logged-in user:", data?.me);
  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/");
  };
  const handleReview = () => {
    navigate("/review");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Link to="/" style={styles.button}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>

        {authenticated ? (
          <>
            <Pressable style={styles.button} onPress={handleReview}>
              <Text style={styles.tabText}>Create a review</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleSignOut}>
              <Text style={styles.tabText}>Sign out</Text>
            </Pressable>
          </>
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
