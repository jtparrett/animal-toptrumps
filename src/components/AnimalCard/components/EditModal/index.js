import React, { useState } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
} from "@chakra-ui/core";
import { useQuery, useMutation } from "@apollo/client";
import * as Yup from "yup";

import { AnimalFormFields } from "../../../AnimalFormFields";
import { GET_ANIMAL_BY_ID, UPDATE_ANIMAL } from "./graphql";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  type: Yup.string().required(),
  diet: Yup.string().required(),
});

export const EditModal = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(GET_ANIMAL_BY_ID, {
    skip: !isOpen,
    variables: {
      id,
    },
  });
  const [updateAnimal, { loading: saving }] = useMutation(UPDATE_ANIMAL, {
    onCompleted: () => setIsOpen(false),
  });
  const animal = data?.getAnimalById;

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      name: animal?.name ?? "",
      type: animal?.type ?? "",
      diet: animal?.diet ?? "",
      extinct: animal?.extinct ?? false,
    },
    onSubmit: (values) => {
      updateAnimal({
        variables: {
          id,
          values,
        },
      });
    },
  });

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        w="100%"
        onClick={() => setIsOpen(true)}
      >
        Edit
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
              isLoading={saving}
              disabled={saving}
            >
              Save changes
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

EditModal.propTypes = {
  id: PropTypes.string.isRequired,
};
