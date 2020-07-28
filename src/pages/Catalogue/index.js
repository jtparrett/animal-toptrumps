import React from "react";
import { Text, SimpleGrid, Flex } from "@chakra-ui/core";
import { useQuery } from "@apollo/client";

import { Wrapper, AnimalCard } from "../../components";
import { CreateModal } from "./components";
import { GET_ANIMALS } from "./graphql";

export const Catalogue = () => {
  const { data, loading } = useQuery(GET_ANIMALS);

  return (
    <Wrapper pt={6}>
      <Flex alignItems="flex-end" pb={4}>
        <Text fontSize="4xl" fontWeight="bold" mr="auto">
          Catalogue
        </Text>
        <CreateModal />
      </Flex>
      <SimpleGrid
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        spacing={3}
      >
        {loading &&
          Array.from(Array(3)).map((_, i) => <AnimalCard key={i} isLoading />)}

        {data?.getAnimals?.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
};
