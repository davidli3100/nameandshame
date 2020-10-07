import React from "react";
import { Box, Heading } from "@chakra-ui/core";

const Tag = ({ name }) => (
    <Box
        backgroundColor="blue.50"
        rounded="md"
        textAlign="center"
        px="10px"
        py="6px"
        display="inline-block"
        mr="10px"
    >
        <Heading fontSize="14px" fontWeight="600" color="blue.700">
            {name}
        </Heading>
    </Box>
);

export default Tag;
