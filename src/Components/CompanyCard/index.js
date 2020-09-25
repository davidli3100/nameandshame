import React from "react";
import { Box, Icon, Image, Text, Button, Tooltip } from "@chakra-ui/core";

/**
 * Handler to redirect the user when clicking on the company card's buttons
 * @param {"report" | "view"} type type of action taken
 * @param {string} id ID of the company/employer
 */
const handleClick = (type, id) => {
  switch (type) {
    case "report":
      window.location.href = `/report/${id}`;
      break;
    case "view":
      window.location.href = `/employer/${id}`;
      break;
    default:
      break;
  }
};

const CompanyCard = ({ id, name, imageURL, numReports, score }) => (
  <Box
    width="100%"
    maxWidth="320px"
    px="20px"
    py="20px"
    borderColor="blueGray.100"
    borderWidth="2px"
    borderRadius="8px"
  >
    <Image
      objectFit="cover"
      height="75px"
      width="75px"
      borderRadius="8px"
      src={imageURL}
    />
    <Text pt="12px" fontSize="18px" color="blueGray.900" fontWeight="700">
      {name}
    </Text>
    <Box display="flex" flexDirection="row" mt="6px" fontWeight="600">
      <Tooltip label="Number of reports" placement="bottom">
        <Box color="blueGray.600" mr="32px" display="flex" flexDirection="row">
          <Icon mt="2px" mr="8px" size="20px" name="reports" />
          <Text>{numReports}</Text>
        </Box>
      </Tooltip>
      <Tooltip label="Toxicity Score (0-10)" placement="bottom">
        <Box color="blueGray.600" display="flex" flexDirection="row">
          <Icon mt="2px" size="20px" mr="8px" name="score" />
          <Text>{score}</Text>
        </Box>
      </Tooltip>
    </Box>
    <Box mt="24px">
      <Button
        onClick={() => handleClick("report", id)}
        variantColor="primary"
        width="calc(50% - 8px)"
        mr="16px"
        borderRadius="6px"
      >
        Report
      </Button>
      <Button
        onClick={() => handleClick("view", id)}
        color="blueGray.600"
        width="calc(50% - 8px)"
        borderRadius="6px"
      >
        View
      </Button>
    </Box>
  </Box>
);

export default CompanyCard;
