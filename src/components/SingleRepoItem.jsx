import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-native";
import { FlatList, StyleSheet, View, Pressable } from "react-native";
import theme from "../theme";
import MyText from "./MyText";
import * as Linking from "expo-linking";
import RepositoryItem from "./RepositoryItem";
import { GET_SINGLE_REPO } from "../graphql/queries";
import { format } from "date-fns";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.borderRadius,
    marginVertical: theme.spacing.small,
    marginHorizontal: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  info: {
    flex: 1,
  },
  user: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 4,
  },
  createdAt: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    marginBottom: 4,
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
  ratingBorder: {
    borderColor: theme.colors.primary,
    marginRight: theme.spacing.medium,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 2,
  },
  ratingText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
  },
});

const RepoInfo = ({ repo }) => {
  return (
    <View style={styles.card}>
      <RepositoryItem item={repo} />

      <Pressable
        style={styles.navButton}
        onPress={() => Linking.openURL(repo.url)}
      >
        <MyText style={styles.navButtonText}>Open in GitHub</MyText>
      </Pressable>
    </View>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.ratingBorder}>
          <MyText style={styles.ratingText}>{review.rating}</MyText>
        </View>
        <View style={styles.info}>
          <MyText style={styles.user}>{review.user.username}</MyText>
          <MyText style={styles.createdAt}>
            {format(new Date(review.createdAt), "dd.MM.yyyy")}
          </MyText>
          <MyText>{review.text}</MyText>
        </View>
      </View>
    </View>
  );
};

const SingleRepoItem = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_SINGLE_REPO, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <MyText>Loading...</MyText>;
  if (error) return <MyText>Error: {error.message}</MyText>;

  const repo = data.repository;
  const reviews = data.repository.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepoInfo repo={repo} />}
    />
  );
};

export default SingleRepoItem;
