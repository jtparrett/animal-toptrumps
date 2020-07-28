import React from "react";
import { gql } from "@apollo/client";
import { Text } from "@chakra-ui/core";

import { Card } from "../Card";

export const AnimalCard = ({ animal }) => (
  <Card>
    <Text>{animal?.name}</Text>
  </Card>
);

export const AnimalCardFragment = gql`
  fragment AnimalCardFragment on Animal {
    id
    name
    type
    diet
  }
`;
