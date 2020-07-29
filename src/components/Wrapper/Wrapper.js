import React from "react";
import { Box } from "@chakra-ui/core";

export const Wrapper = ({ children, ...props }) => (
  <Box w={1100} maxW="100%" px={4} mx="auto" {...props}>
    {children}
  </Box>
);
