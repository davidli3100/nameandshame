import React from "react";
import { Box, Heading } from "@chakra-ui/core";

const Tag = ({ name }) => (
    <Box
        backgroundColor="blue.50"
        rounded="md"
        textAlign="center"
        px="10px"
        py="6px"
        mr="10px"
        my="4px"
        display="inline-block"
        textTransform="capitalize"
    >
        <Heading fontSize="14px" fontWeight="600" color="blue.700">
            {name}
        </Heading>
    </Box>
);

export default Tag;
