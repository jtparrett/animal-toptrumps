import React, { useState } from "react";
import {
  Button,
  Text,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/core";

export const DeleteModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        leftIcon="delete"
        variantColor="red"
        flex={1}
        size="sm"
        variant="outline"
        onClick={() => setIsOpen(true)}
      >
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent p={4} rounded="md">
          <Text textAlign="center" fontWeight="bold" fontSize="xl" mb={4}>
            Are you sure you want to delete this animal?
          </Text>
          <Stack direction="row">
            <Button flex={1}>No, cancel</Button>
            <Button flex={1} variantColor="red">
              Yes, delete it
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};
