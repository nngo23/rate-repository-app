import { useQuery } from "@apollo/client/react";
import { GET_REPOS } from "../graphql/queries";

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const { data, loading, error } = useQuery(GET_REPOS, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    },
  });

  const edges = data?.repositories?.edges ?? [];
  const repositories = edges.map((edge) => edge.node);

  return { data: repositories, loading, error };
};

export default useRepositories;
