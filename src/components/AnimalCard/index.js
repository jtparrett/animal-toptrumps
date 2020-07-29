import React from "react";
import PropTypes from "prop-types";
import capitalize from "lodash/fp/capitalize";
import { gql } from "@apollo/client";
import { Text, Skeleton, SimpleGrid, Stack, Box } from "@chakra-ui/core";

import {
  ANIMAL_TYPE,
  ANIMAL_DIET_TYPE,
  ANIMAL_TYPE_ICONS,
  ANIMAL_DIET_TYPE_ICONS,
} from "../../consts";
import { Card } from "../Card";
import { DeleteModal, EditModal } from "./components";

export const AnimalCard = ({ isLoading, animal }) => (
  <Card>
    <SimpleGrid columns={1} spacing={2}>
      {isLoading && <Skeleton height="36px" w="75%" />}
      {!isLoading && (
        <Text fontSize="2xl" fontWeight="bold">
          {animal?.name}
        </Text>
      )}

      <Card.Stat
        name="Type"
        value={capitalize(animal?.type)}
        icon={animal?.type && ANIMAL_TYPE_ICONS[animal?.type]}
        isLoading={isLoading}
      />

      <Card.Stat
        name="Diet type"
        value={capitalize(animal?.diet)}
        icon={animal?.diet && ANIMAL_DIET_TYPE_ICONS[animal?.diet]}
        isLoading={isLoading}
      />

      <Card.Stat
        name="Extinct"
        value={animal?.extinct ? "Extinct" : "Not extinct"}
        isLoading={isLoading}
      />
    </SimpleGrid>
    {animal && (
      <Stack direction="row" pt={3}>
        <Box flex={1}>
          <DeleteModal id={animal?.id} />
        </Box>
        <Box flex={1}>
          <EditModal id={animal?.id} />
        </Box>
      </Stack>
    )}
  </Card>
);

AnimalCard.defaultProps = {
  isLoading: false,
  animal: null,
};

AnimalCard.propTypes = {
  isLoading: PropTypes.bool,
  animal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(ANIMAL_TYPE)),
    diet: PropTypes.oneOf(Object.keys(ANIMAL_DIET_TYPE)),
  }),
};

export const AnimalCardFragment = gql`
  fragment AnimalCardFragment on Animal {
    id
    name
    type
    diet
    extinct
  }
`;
