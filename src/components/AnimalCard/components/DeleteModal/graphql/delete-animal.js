import { gql } from "@apollo/client";

export const DELETE_ANIMAL = gql`
  mutation($id: ID!) {
    deleteAnimal(id: $id)
  }
`;
