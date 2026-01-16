import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-native";
import { StyleSheet, View, Pressable } from "react-native";
import theme from "../theme";
import MyText from "./MyText";
import * as Linking from "expo-linking";
import RepositoryItem from "./RepositoryItem";
import { GET_SINGLE_REPO } from "../graphql/queries";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
    borderRadius: theme.borderRadius,
    marginVertical: theme.spacing.small,
    marginHorizontal: 16,
  },
  navButton: {
    marginTop: theme.spacing.medium,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.borderRadius,
  },
  navButtonText: {
    color: theme.colors.card,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    alignSelf: "center",
  },
});

const SingleRepoItem = () => {
  const { id } = useParams();
  console.log("Repository ID:", id);
  const { data, loading, error } = useQuery(GET_SINGLE_REPO, {
    variables: { id },
    skip: !id,
  });
  if (loading) return <MyText>Loading...</MyText>;
  if (error) return <MyText>Error: {error.message}</MyText>;

  const repo = data.repository;

  return (
    <View style={styles.card}>
      <View>
        <RepositoryItem item={repo} />
      </View>
      <Pressable
        style={styles.navButton}
        onPress={() => Linking.openURL(repo.url)}
      >
        <MyText style={styles.navButtonText}>Open in GitHub</MyText>
      </Pressable>
    </View>
  );
};

export default SingleRepoItem;
