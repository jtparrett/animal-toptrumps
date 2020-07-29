import { gql } from "@apollo/client";

export const CREATE_ANIMAL = gql`
  mutation($values: AnimalInput!) {
    createAnimal(values: $values) {
      id
      name
      type
      diet
      extinct
    }
  }
`;
