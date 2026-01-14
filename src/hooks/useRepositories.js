import { useQuery } from "@apollo/client/react";
import { GET_REPOS } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading, error } = useQuery(GET_REPOS, {
    fetchPolicy: "cache-and-network",
  });

  const edges = data?.repositories?.edges ?? [];
  const repositories = edges.map((edge) => edge.node);

  return { data: repositories, loading, error };
};

export default useRepositories;
