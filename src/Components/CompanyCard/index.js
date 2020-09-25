import React from "react";
import { Box, Icon, Image, Text } from "@chakra-ui/core";

const CompanyCard = ({ id, name, imageURL, numReports, score }) => (
  <Box>
    <Image
      objectFit="cover"
      height="75px"
      width="75px"
      borderRadius="8px"
      src={imageURL}
    />
    <Text>{name}</Text>
    <Box>
      <Icon name="reports" color="blueGray.600" />
      {numReports}
    </Box>
    <Box>
      <Icon name="score" color="blueGray.600" />
      {score}
    </Box>
  </Box>
);

export default CompanyCard;
