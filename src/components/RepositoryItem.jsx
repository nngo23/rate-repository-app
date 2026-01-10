import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import theme from "../theme";

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
    color: "#fff",
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
  num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;

const StatItem = ({ label, value }) => (
  <View style={styles.stat}>
    <Text style={styles.statValue}>{formatNumber(value)}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const RepositoryItem = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
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
