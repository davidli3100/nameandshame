import { Box, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, connectHits, SortBy, RefinementList, NumericMenu, Panel } from 'react-instantsearch-dom';
import CompanyCard from "../Components/CompanyCard";
import Hero from "../Components/Hero";
import CustomRangeSlider from "../Components/RangeSlider";

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
            <SearchBox
              submit={<svg className="w-6 h-6" fill="none" stroke="#829AB1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              reset={<svg className="w-6 h-6" fill="none" stroke="#829AB1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
            />
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
