import { StyleSheet, View, Image, Pressable } from "react-native";
import theme from "../theme";
import MyText from "./MyText";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
    borderRadius: theme.borderRadius,
    marginVertical: theme.spacing.small,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    marginBottom: 12,
  },
  info: {
    flex: 1,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
  },
  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 4,
  },
  description: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    color: theme.colors.card,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: theme.fontSizes.body,
    borderRadius: theme.borderRadius,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
});

const formatNumber = (num) =>
  num >= 1000 ? `${(num / 1000).toFixed(1)}k` : String(num);

const StatItem = ({ label, value }) => (
  <View style={styles.stat}>
    <MyText style={styles.statValue}>{formatNumber(value)}</MyText>
    <MyText style={styles.statLabel}>{label}</MyText>
  </View>
);

const RepositoryItem = ({ item }) => (
  <View style={styles.card} testID="repositoryItem">
    <View style={styles.row}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.info}>
        <MyText style={styles.name}>{item.fullName}</MyText>
        <MyText style={styles.description}>{item.description}</MyText>
        <MyText style={styles.language}>{item.language}</MyText>
      </View>
    </View>
    <View style={styles.statsRow}>
      <StatItem label="stars" value={item.stargazersCount} />
      <StatItem label="forks" value={item.forksCount} />
      <StatItem label="review" value={item.reviewCount} />
      <StatItem label="rating" value={item.ratingAverage} />
    </View>
  </View>
);

export default RepositoryItem;
