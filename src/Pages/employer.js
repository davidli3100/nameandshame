import {
    Box,
    Text,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import { useParams } from "react-router-dom";
import Banner from "../Components/Employers/Banner";
import Stats from "../Components/Employers/Stats";
import {
    connectHits,
    InstantSearch,
    connectRefinementList,
    Panel,
    SortBy,
    Pagination,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import Report from "../Components/Employers/Report";
import CustomRefinementList from "../Components/CustomRefinementList";
import CustomSearch from "../Components/CustomSearch";

const searchClient = algoliasearch(
    "FEQR412FHW",
    "1eeb94ee61382152f97c1f18b869926c"
);

const customReportHits = ({ hits }) => hits.map((hit) => <Report hit={hit} />);

const VirtualRefinementList = connectRefinementList(() => null);
const EmployerHits = connectHits(customReportHits);

const FilterPanel = () => (
    <Box maxWidth="600px" width="100%">
        <Box mt="24px">
            <Panel header="Sort">
                <Box mt="8px">
                    <SortBy
                        defaultRefinement="Reports"
                        items={[
                            { value: "Reports", label: "Default" },
                            {
                                value: "Reports_dateMillis_asc",
                                label: "Date (asc)",
                            },
                            {
                                value: "Reports_dateMillis_desc",
                                label: "Date (desc)",
                            },
                        ]}
                    />
                </Box>
            </Panel>
        </Box>
        <Box mt="32px">
            <Panel header="Categories">
                <CustomRefinementList attribute="categories" />
            </Panel>
        </Box>
    </Box>
);

const Company = () => {
    const { id } = useParams();
    const [employerData, setEmployerData] = useState({});

    useEffect(() => {
        /**
         * Fetches firebase data
         * Best practice to declare an async function within `useEffect`
         * and then call it to prevent race conditions
         */
        const fetchFirebaseData = async () => {
            const firebaseDoc = await firebase
                .firestore()
                .collection("employers")
                .doc(id)
                .get();
            const data = firebaseDoc.data();
            setEmployerData(data);
            console.log(data);
        };
        fetchFirebaseData();
    }, [id]);

    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center">
                <Banner source={employerData.backgroundImageURL} />
                <Stats
                    logo={employerData.imageURL}
                    name={employerData.name}
                    employees={employerData.numEmployees}
                    reports={employerData.numReports}
                    trend={84}
                    mcr="Racism"
                />
                <InstantSearch indexName="Reports" searchClient={searchClient}>
                    <Box
                        margin="auto"
                        mt={["56px", null, "80px"]}
                        width="fit-content"
                        minWidth={["280px", null, "400px"]}
                        px={["40px", null, "80px"]}
                    >
                        <Text
                            fontSize="32px"
                            color="blueGray.900"
                            fontWeight="bold"
                            maxW="320px"
                            margin={[null, null, "0"]}
                            mb="32px"
                        >
                            Browse Reports
                        </Text>
                        <VirtualRefinementList
                            attribute="employerRef"
                            defaultRefinement={id}
                        />
                        <CustomSearch />
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
                        <Box
                            display="grid"
                            my={["32px", null, "50px"]}
                            gridTemplateColumns="repeat(auto-fit, minmax(200px, 600px))"
                            gridColumnGap="40px"
                            gridRowGap={5}
                            maxWidth="100%"
                            justifyContent="center"
                        >
                            <EmployerHits />
                        </Box>
                        <Box my={["32px", null, "48px"]}>
                            <Pagination showFirst={false} />
                        </Box>
                    </Box>
                </InstantSearch>
            </Box>
        </>
    );
};

export default Company;
