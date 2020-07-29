import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/core";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";

import { AnimalFormFields, AnimalCardFragment } from "../../../../components";
import { CREATE_ANIMAL } from "./graphql";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  type: Yup.string().required(),
  diet: Yup.string().required(),
});

export const CreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [createAnimal, { loading }] = useMutation(CREATE_ANIMAL, {
    onCompleted: () => setIsOpen(false),
    update(cache, { data: { createAnimal } }) {
      cache.modify({
        fields: {
          getAnimals(existingAnimals = []) {
            const newAnimalRef = cache.writeFragment({
              data: createAnimal,
              fragment: AnimalCardFragment,
            });
            return [...existingAnimals, newAnimalRef];
          },
        },
      });
    },
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      type: "",
      diet: "",
      extinct: false,
    },
    onSubmit: (values) => {
      createAnimal({
        variables: {
          values,
        },
      });
    },
  });

  return (
    <>
      <Button rightIcon="add" onClick={() => setIsOpen(true)}>
        Create animal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent
          p={4}
          rounded="md"
          as="form"
          onSubmit={formik.handleSubmit}
        >
          <AnimalFormFields formik={formik} />

          <Flex borderTopWidth="1px" pt={4} mt={4}>
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
        </ModalContent>
      </Modal>
    </>
  );
};
