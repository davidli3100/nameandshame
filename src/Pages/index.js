import {
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text,
} from "@chakra-ui/core";
import React, { Fragment } from "react";
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    connectHits,
    SortBy,
    Panel,
    Pagination,
} from "react-instantsearch-dom";
import CompanyCard from "../Components/CompanyCard";
import Hero from "../Components/Hero";
import CustomRangeSlider from "../Components/RangeSlider";
import CustomSearch from "../Components/CustomSearch";
import { isMobile } from "../Components/MediaQueries";
import CustomRefinementList from "../Components/CustomRefinementList";

const searchClient = algoliasearch(
    "FEQR412FHW",
    "1eeb94ee61382152f97c1f18b869926c"
);

const customEmployerHits = ({ hits }) =>
    hits.map((hit) => <CompanyCard hit={hit} />);

const EmployerHits = connectHits(customEmployerHits);

const FilterPanel = () => (
    <>
        <Box mt="24px">
            <Panel header="Sort">
                <Box mt="8px">
                    <SortBy
                        defaultRefinement="Employers"
                        items={[
                            { value: "Employers", label: "Default" },
                            {
                                value: "Employers_name_asc",
                                label: "Name (A-Z)",
                            },
                            {
                                value: "Employers_name_desc",
                                label: "Name (Z-A)",
                            },
                            {
                                value: "Employers_score_asc",
                                label: "Score (asc)",
                            },
                            {
                                value: "Employers_score_desc",
                                label: "Score (desc)",
                            },
                            {
                                value: "Employers_numReports_asc",
                                label: "Reports (asc)",
                            },
                            {
                                value: "Employers_numReports_desc",
                                label: "Reports (desc)",
                            },
                        ]}
                    />
                </Box>
            </Panel>
        </Box>
        <Box mt="32px">
            <Panel header="Employees">
                <CustomRangeSlider
                    attribute="numEmployees"
                    min={1}
                    max={10000}
                />
            </Panel>
        </Box>
        <Box mt="52px">
            <Panel header="Categories">
                <CustomRefinementList attribute="categories" />
            </Panel>
        </Box>
    </>
);

const Index = () => (
    <Fragment>
        <Hero />
        <Box px={isMobile() ? "20px" : "64px"} py="56px">
            <Text
                fontSize="32px"
                color="blueGray.900"
                fontWeight="bold"
                maxW="320px"
                margin={["auto", null, "0"]}
                mb="32px"
            >
                Browse Employers
            </Text>
            <InstantSearch indexName="Employers" searchClient={searchClient}>
                <Box
                    display="grid"
                    gridTemplateColumns={["1fr", null, null, null, "270px 1fr"]}
                    gridColumnGap="80px"
                    gridRowGap="40px"
                >
                    <Box
                        justifySelf="center"
                        width={isMobile() ? "320px" : "100%"}
                    >
                        <CustomSearch />
                        {isMobile() ? (
                            <AccordionItem border="none">
                                <AccordionHeader mt="16px" px="0">
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        color="blueGray.900"
                                        fontWeight="600"
                                    >
                                        Filter
                                    </Box>
                                    <AccordionIcon color="blueGray.900" />
                                </AccordionHeader>
                                <AccordionPanel px="0">
                                    <FilterPanel />
                                </AccordionPanel>
                            </AccordionItem>
                        ) : (
                            <FilterPanel />
                        )}
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Box
                            display="grid"
                            gridTemplateColumns={["1fr", null, "1fr 1fr", null]}
                            gridColumnGap="40px"
                            gridRowGap="40px"
                            maxWidth="100%"
                            justifySelf={isMobile() && "center"}
                        >
                            <EmployerHits />
                        </Box>
                        <Box marginTop="32px">
                            <Pagination showFirst={false} />
                        </Box>
                    </Box>
                </Box>
            </InstantSearch>
        </Box>
    </Fragment>
);

export default Index;
