import { gql } from "@apollo/client";

import { AnimalCardFragment } from "../../../components";

export const GET_ANIMALS = gql`
  ${AnimalCardFragment}

  query getAnimalsCatalogue {
    getAnimals {
      id
      ...AnimalCardFragment
    }
  }
`;
