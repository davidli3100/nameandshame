import { Box, Checkbox } from "@chakra-ui/core";
import React from "react";
import { connectRefinementList } from "react-instantsearch-dom";

const CustomRefinementList = ({ items, refine }) => {
  return (
    <Box display="flex" flexDirection="column">
      {items.map((item) => (
        <Checkbox
          textTransform="capitalize"
          isChecked={item.isRefined}
          onChange={() => refine(item.value)}
          value={item.value}
          variantColor="primary"
          size="md"
          color="blueGrey.500"
          mb="4px"
          width="fit-content"
        >
          {item.label}
          <Box
            display="inline"
            ml="8px"
            px="6px"
            py="3px"
            borderRadius="4px"
            fontWeight="600"
            fontSize="0.75rem"
            backgroundColor="blue.50"
            color="blue.700"
          >
            {item.count}
          </Box>
        </Checkbox>
      ))}
    </Box>
  );
};

export default connectRefinementList(CustomRefinementList);
