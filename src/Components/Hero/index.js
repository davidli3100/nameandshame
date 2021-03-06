import React from "react";
import { Box, Heading, Image } from "@chakra-ui/core";
import hero_image from "../../Assets/hero_image.svg";

const Hero = () => (
    <Box
        backgroundColor="rgba(0, 132, 244, 0.05)"
        width="100%"
        height={["300px", null, null, "400px"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10vw"
    >
        <Box>
            <Heading
                size="xl"
                fontWeight="600"
                paddingRight="5vw"
                color="blue.900"
            >
                Browse, report, and view companies
            </Heading>
        </Box>
        <Box>
            <Image src={hero_image} height="300px" width="auto" alt="Hero" />
        </Box>
    </Box>
);

export default Hero;
