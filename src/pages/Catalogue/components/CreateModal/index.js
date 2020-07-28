import React, { useState } from "react";
import capitalize from "lodash/fp/capitalize";
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  Text,
  Box,
} from "@chakra-ui/core";

import { Modal } from "../../../../components";
import { ANIMAL_TYPE } from "../../../../consts";

export const CreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button rightIcon="add" onClick={() => setIsOpen(true)}>
        Create
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <Box w="400px" maxW="100%">
          <Text fontSize="xl" fontWeight="bold" pb={2}>
            Create an animal
          </Text>
          <FormControl>
            <FormLabel htmlFor="type">Type</FormLabel>
            <Select id="type" placeholder="Select type">
              {Object.keys(ANIMAL_TYPE).map((option) => (
                <option value={option}>{capitalize(option)}</option>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};
