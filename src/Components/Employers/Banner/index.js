import React from "react";
import { Box, Image } from "@chakra-ui/core";
import Fallback from "../../../Assets/fallback.jpg";

const Banner = ({ source }) => (
    <Box>
        <Box
            maxHeight="300px"
            overflow="hidden"
            display="flex"
            alignItems="center"
        >
            <Image src={source} width="100%" fallbackSrc={Fallback} />
        </Box>
    </Box>
);

export default Banner;
