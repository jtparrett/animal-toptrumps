import React from "react";
import capitalize from "lodash/fp/capitalize";
import {
  Stack,
  FormControl,
  FormLabel,
  Select,
  Flex,
  Switch,
  Input,
  FormErrorMessage,
} from "@chakra-ui/core";

import { ANIMAL_TYPE, ANIMAL_DIET_TYPE } from "../../consts";

export const AnimalFormFields = ({ formik }) => (
  <Stack spacing={4}>
    <FormControl isInvalid={formik.errors.name}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input
        id="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        name="name"
        autoFocus
      />
      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
    </FormControl>

    <FormControl isInvalid={formik.errors.type}>
      <FormLabel htmlFor="type">Type</FormLabel>
      <Select
        id="type"
        placeholder="Select type"
        onChange={formik.handleChange}
        value={formik.values.type}
        name="type"
      >
        {Object.keys(ANIMAL_TYPE).map((option) => (
          <option key={option} value={option}>
            {capitalize(option)}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
    </FormControl>

    <FormControl isInvalid={formik.errors.diet}>
      <FormLabel htmlFor="diet">Dietry requirements</FormLabel>
      <Select
        id="diet"
        placeholder="Select diet type"
        onChange={formik.handleChange}
        value={formik.values.diet}
        name="diet"
      >
        {Object.keys(ANIMAL_DIET_TYPE).map((option) => (
          <option key={option} value={option}>
            {capitalize(option)}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{formik.errors.diet}</FormErrorMessage>
    </FormControl>

    <FormControl>
      <Flex alignItems="center">
        <FormLabel flex={1} htmlFor="extinct">
          Extinct
        </FormLabel>
        <Switch
          id="extinct"
          size="lg"
          color="blue"
          onChange={formik.handleChange}
          isChecked={formik.values.extinct}
          name="extinct"
        />
      </Flex>
    </FormControl>
  </Stack>
);
