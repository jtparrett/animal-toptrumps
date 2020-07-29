import { gql } from "@apollo/client";

export const UPDATE_ANIMAL = gql`
  mutation($id: ID!, $values: AnimalInput!) {
    updateAnimal(id: $id, values: $values) {
      id
      name
      type
      diet
      extinct
    }
  }
`;
