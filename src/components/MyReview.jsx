import { useQuery } from "@apollo/client/react";
import { FlatList, StyleSheet, View } from "react-native";
import { GET_CURRENT_USER } from "../graphql/queries";
import theme from "../theme";
import MyText from "./MyText";
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

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.ratingBorder}>
          <MyText style={styles.ratingText}>{review.rating}</MyText>
        </View>
        <View style={styles.info}>
          <MyText style={styles.user}>{review.repository.fullName}</MyText>
          <MyText style={styles.createdAt}>
            {format(new Date(review.createdAt), "dd.MM.yyyy")}
          </MyText>
          <MyText>{review.text}</MyText>
        </View>
      </View>
    </View>
  );
};

const MyReview = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <MyText>Loading...</MyText>;
  if (error) return <MyText>Error: {error.message}</MyText>;
  if (!data?.me?.reviews) return <MyText>No reviews found.</MyText>;

  const reviews = data.me.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyReview;
