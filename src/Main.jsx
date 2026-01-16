import { View, StyleSheet } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import RepositoryList from "./components/RepositoryList";
import SingleRepoItem from "./components/SingleRepoItem";
import AppBar from "./components/AppBar";
import SignIn from "./components/SignIn";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.card,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/repository/:id" element={<SingleRepoItem />} />
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
}
