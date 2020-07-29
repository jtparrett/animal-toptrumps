import { gql } from "@apollo/client";

export const GET_ANIMAL_BY_ID = gql`
  query($id: ID!) {
    getAnimalById(id: $id) {
      id
      name
      type
      diet
      extinct
    }
  }
`;
