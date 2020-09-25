import React from "react";
import { Box, Text } from "@chakra-ui/core";

const Navbar = () => (
  <Box display="flex" flexDirection="row" width="100%" px="80px" height="60px" alignItems="center">
    <Text fontWeight="bold" color="blue.900" fontSize={["20px", null, null, "24px"]}>
      NameandShame
    </Text>
    <Box display="flex" flexDirection="row" marginLeft="64px" marginTop="3px">
      <Text fontWeight="600" marginRight="24px">
        Browse
      </Text>
      <Text marginRight="24px" fontWeight="600">
        About
      </Text>
      <Text fontWeight="600">
        Careers
      </Text>
    </Box>
    
  </Box>
);

export default Navbar;
