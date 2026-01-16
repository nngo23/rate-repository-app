import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/queries";

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const res = await mutate({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating: Number(rating),
          text,
        },
      },
    });

    return res;
  };

  return [createReview, result];
};

export default useReview;
