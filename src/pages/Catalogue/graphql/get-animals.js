import { gql } from "@apollo/client";

import { AnimalCardFragment } from "../../../components";

export const GET_ANIMALS = gql`
  ${AnimalCardFragment}

  {
    getAnimals {
      id
      ...AnimalCardFragment
    }
  }
`;
