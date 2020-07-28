import React from "react";
import { Text } from "@chakra-ui/core";
import { useQuery } from "@apollo/client";

import { Wrapper, AnimalCard } from "../../components";
import { GET_ANIMALS } from "./graphql";

export const Catalogue = () => {
  const { data } = useQuery(GET_ANIMALS);
  console.log(data);

  return (
    <Wrapper pt={6}>
      <Text fontSize="4xl" fontWeight="bold" pb={2}>
        Catalogue
      </Text>
      {data?.getAnimals?.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </Wrapper>
  );
};
