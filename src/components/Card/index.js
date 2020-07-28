import React from "react";
import { Box } from "@chakra-ui/core";

export const Card = ({ children }) => (
  <Box borderWidth="1px" rounded="md" overflow="hidden" p={2}>
    {children}
  </Box>
);
