import React from "react";
import PropTypes from "prop-types";
import capitalize from "lodash/fp/capitalize";
import { gql } from "@apollo/client";
import { Text, Skeleton, SimpleGrid, Button, Stack } from "@chakra-ui/core";

import {
  ANIMAL_TYPE,
  ANIMAL_DIET_TYPE,
  ANIMAL_TYPE_ICONS,
  ANIMAL_DIET_TYPE_ICONS,
} from "../../consts";
import { Card } from "../Card";

export const AnimalCard = ({ isLoading, animal }) => (
  <Card>
    <SimpleGrid columns={1} spacing={2}>
      <Skeleton height="36px" w="75%" isLoaded={!isLoading}>
        <Text fontSize="2xl" fontWeight="bold">
          {animal?.name}
        </Text>
      </Skeleton>

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
    {!isLoading && (
      <Stack direction="row" pt={3}>
        <Button
          leftIcon="delete"
          variantColor="red"
          flex={1}
          size="sm"
          variant="outline"
        >
          Delete
        </Button>
        <Button flex={1} size="sm" variant="outline">
          Edit
        </Button>
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
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(ANIMAL_TYPE)),
    diet: PropTypes.oneOf(Object.keys(ANIMAL_DIET_TYPE)),
  }),
};

export const AnimalCardFragment = gql`
  fragment AnimalCardFragment on Animal {
    name
    type
    diet
    extinct
  }
`;
