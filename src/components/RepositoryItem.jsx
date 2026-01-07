import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const RepositoryItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.fullName}>Full name: {item.fullName}</Text>
    <Text style={styles.description}>Description: {item.description}</Text>
    <Text style={styles.language}>Language: {item.language}</Text>
    <Text style={styles.stargazersCount}>Stars: {item.stargazersCount}</Text>
    <Text style={styles.forksCount}>Forks: {item.forksCount}</Text>
    <Text style={styles.reviewCount}>Reviews: {item.reviewCount}</Text>
    <Text style={styles.ratingAverage}>Rating: {item.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;
