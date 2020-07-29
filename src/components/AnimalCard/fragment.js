import { gql } from "@apollo/client";

export const AnimalCardFragment = gql`
  fragment AnimalCardFragment on Animal {
    id
    name
    type
    diet
    extinct
  }
`;
