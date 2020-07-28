import React, { useState } from "react";
import { useFormik } from "formik";
import capitalize from "lodash/fp/capitalize";
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  Box,
  Flex,
  Stack,
  Switch,
  Input,
  FormErrorMessage,
} from "@chakra-ui/core";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";

import { Modal } from "../../../../components";
import { ANIMAL_TYPE, ANIMAL_DIET_TYPE } from "../../../../consts";
import { CREATE_ANIMAL } from "./graphql";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  type: Yup.string().required(),
  diet: Yup.string().required(),
});

export const CreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createAnimal, { loading }] = useMutation(CREATE_ANIMAL, {
    refetchQueries: ["getAnimalsCatalogue"],
    awaitRefetchQueries: true,
    onCompleted: () => setIsOpen(false),
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      type: "",
      diet: "",
      extinct: false,
    },
    onSubmit: (animal) => {
      createAnimal({
        variables: {
          animal,
        },
      });
    },
  });

  return (
    <>
      <Button rightIcon="add" onClick={() => setIsOpen(true)}>
        Create animal
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <Box w="300px" maxW="100%" as="form" onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <FormControl isInvalid={formik.errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                onChange={formik.handleChange}
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
                  name="extinct"
                />
              </Flex>
            </FormControl>

            <Flex borderTopWidth="1px" pt={4}>
              <Button
                ml="auto"
                variantColor="blue"
                type="submit"
                isLoading={loading}
                disabled={loading}
              >
                Create animal
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
