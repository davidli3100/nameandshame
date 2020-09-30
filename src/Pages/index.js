import { Box, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, connectHits, SortBy, Panel } from 'react-instantsearch-dom';
import CompanyCard from "../Components/CompanyCard";
import Hero from "../Components/Hero";
import CustomRangeSlider from "../Components/RangeSlider";
import CustomSearch from "../Components/CustomSearch";

const searchClient = algoliasearch(
  'FEQR412FHW',
  '1eeb94ee61382152f97c1f18b869926c'
);

const customEmployerHits = ({ hits }) => (
  (hits.map(hit => (
    <CompanyCard hit={hit} />
  )))
);

const EmployerHits = connectHits(customEmployerHits);

const Index = () => (
  <Fragment>
    <Hero />
    <Box px="64px" py="56px">
      <Text fontSize="32px" color="blueGray.900" fontWeight="bold" mb="32px">
        Browse Employers
      </Text>
      <InstantSearch indexName="Employers" searchClient={searchClient}>
        <Box display="grid" gridTemplateColumns="270px 1fr" gridColumnGap="60px">
          <Box>
            <CustomSearch />
            <Box mt="24px" mb="32px">
              <Panel header="Sort">
                <Box mt="16px">
                  <SortBy
                    defaultRefinement="Employers"
                    items={[
                      { value: 'Employers', label: "Default" },
                      { value: "Employers_name_asc", label: "Name (A-Z)" },
                      { value: "Employers_name_desc", label: "Name (Z-A)" },
                      { value: "Employers_score_asc", label: "Score (asc)" },
                      { value: "Employers_score_desc", label: "Score (desc)" },
                      { value: "Employers_numReports_asc", label: "Reports (asc)" },
                      { value: "Employers_numReports_desc", label: "Reports (desc)" }
                    ]}
                  />
                </Box>
              </Panel>
            </Box>
            <Panel header="Employees">
              <CustomRangeSlider attribute="numEmployees" min={1} max={10000} />
            </Panel>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, 320px)"
            gridColumnGap="40px"
            gridRowGap="40px"
            maxWidth="100%"
          >
            <EmployerHits />
          </Box>
        </Box>
      </InstantSearch>
    </Box>
  </Fragment>
);

export default Index;
