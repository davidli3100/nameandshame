import React from "react";
import { Box, Image } from "@chakra-ui/core";

const Banner = ({ source }) => (
    <Box>
        <Box
            height="300px"
            overflow="hidden"
            display="flex"
            alignItems="center"
        >
            <Image src={source} width="100%" />
        </Box>
    </Box>
);

export default Banner;
