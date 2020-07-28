import { gql } from "@apollo/client";

export const CREATE_ANIMAL = gql`
  mutation($animal: AnimalInput!) {
    createAnimal(animal: $animal)
  }
`;
