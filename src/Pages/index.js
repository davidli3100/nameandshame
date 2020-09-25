import { Box } from "@chakra-ui/core";
import React, { Fragment } from "react";
import CompanyCard from "../Components/CompanyCard";
import Hero from "../Components/Hero";

const Index = () => (
  <Fragment>
    <Hero />
    <Box px="80px">
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, 320px)"
        gridColumnGap="40px"
        gridRowGap="40px"
        width="100%"
      >
        {/* temporary for testing the grid */}
        {[0, 0, 0, 0, 0, 0, 0, 0].map((foo) => (
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
  </Fragment>
);

export default Index;
