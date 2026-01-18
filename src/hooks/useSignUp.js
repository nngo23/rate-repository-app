import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../graphql/queries";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const res = await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    });

    return res;
  };

  return [signUp, result];
};

export default useSignUp;
