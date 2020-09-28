import { Box, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, connectHits, SortBy, RefinementList, NumericMenu, Panel } from 'react-instantsearch-dom';
import CompanyCard from "../Components/CompanyCard";
import Hero from "../Components/Hero";

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
        <Box display="grid" gridTemplateColumns="300px 1fr" gridColumnGap="40px">
          <Box>
            <SearchBox />
            <SortBy
              defaultRefinement="Employers"
              items={[
                { value: 'Employers', label: "Default" },
                { value: "Employers_name_asc", label: "Name (A-Z)" },
                { value: "Employers_name_desc", label: "Name (Z-A)" },
                { value: "Employers_score_asc", label: "Score (asc)" },
                { value: "Employers_score_desc", label: "Score (desc)" }
              ]}
            />
            <Panel header="Employees">
              <NumericMenu
                attribute="numEmployees"
                items={[
                  { label : '1 - 10', start:1, end: 10 },
                  { label: '10 - 100', start: 10, end: 100 },
                  { label: '100 - 1000', start: 100, end: 1000 },
                  { label: '1000 - 5000', start: 1000, end: 5000 },
                  { label: '10000+', start: 10000 }
                ]}
              />
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
