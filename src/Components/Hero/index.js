import React from "react";
import { Box, Heading, Image } from "@chakra-ui/core";
import hero_image from "../../Assets/hero_image.svg";

const Hero = () => (
  <Box
    backgroundColor="rgba(0, 132, 244, 0.05)"
    width="100%"
    height="400px"
    display="flex"
    alignItems="center"
    px="10vw"
  >
    <Box>
      <Heading fontWeight="600" paddingRight="5vw" color="blue.900">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Heading>
    </Box>
    <Box>
      <Image src={hero_image} height="300px" width="auto" />
    </Box>
  </Box>
);

export default Hero;
