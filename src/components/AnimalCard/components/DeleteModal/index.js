import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Text,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/core";
import { useMutation } from "@apollo/client";

import { DELETE_ANIMAL } from "./graphql";

export const DeleteModal = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const [deleteAnimal, { loading }] = useMutation(DELETE_ANIMAL, {
    refetchQueries: ["getAnimalsCatalogue"],
    awaitRefetchQueries: true,
    variables: {
      id,
    },
  });

  return (
    <>
      <Button
        leftIcon="delete"
        variantColor="red"
        size="sm"
        w="100%"
        variant="outline"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent p={4} rounded="md">
          <Text textAlign="center" fontWeight="bold" fontSize="xl" mb={4}>
            Are you sure you want to delete this animal?
          </Text>
          <Stack direction="row">
            <Button flex={1} size="sm" onClick={closeModal}>
              No, cancel
            </Button>
            <Button
              flex={1}
              variantColor="red"
              size="sm"
              isLoading={loading}
              disabled={loading}
              onClick={() => deleteAnimal()}
            >
              Yes, delete it
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
};
