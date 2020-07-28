import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Flex, Text } from "@chakra-ui/core";

export const Card = ({ children }) => (
  <Box borderWidth="1px" rounded="md" overflow="hidden" p={3}>
    {children}
  </Box>
);

const CardStat = ({ name, value, icon, isLoading }) => (
  <Skeleton height="24px" isLoaded={!isLoading}>
    <Flex alignItems="center">
      <Text mr="auto">{name}</Text>
      <Text fontWeight="bold">{value}</Text>
      {icon && <Box as={icon} size="20px" ml={1} />}
    </Flex>
  </Skeleton>
);

CardStat.defaultProps = {
  name: "",
  value: "",
  icon: null,
  isLoading: false,
};

CardStat.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.any,
  isLoading: PropTypes.bool,
};

Card.Stat = CardStat;
