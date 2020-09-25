import { Box, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";
import CompanyCard from "../Components/CompanyCard";
import Hero from "../Components/Hero";

const Index = () => (
  <Fragment>
    <Hero />
    <Box px="64px" py="56px">
      <Text fontSize="32px" color="blueGray.900" fontWeight="bold" mb="32px">
        Browse Employers
      </Text>
      <Box display="grid" gridTemplateColumns="300px 1fr" gridColumnGap="40px">
        <Box backgroundColor="blue.100">
          Search bar and stuff
        </Box>
        <Box
          justifyContent="end"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, 320px)"
          gridColumnGap="40px"
          gridRowGap="40px"
          width="100%"
        >
          {/* temporary for testing the grid */}
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((foo) => (
            <CompanyCard
              id="123"
              name="The Coca Cola Company"
              imageURL="https://fontmeme.com/images/Coca-Cola-Logo.jpg"
              numReports={192}
              score={3.2}
            />
          ))}
        </Box>
      </Box>
    </Box>
  </Fragment>
);

export default Index;
