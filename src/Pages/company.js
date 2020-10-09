import { Box } from "@chakra-ui/core";
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
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import Report from "../Components/Employers/Report";

const searchClient = algoliasearch(
  "FEQR412FHW",
  "1eeb94ee61382152f97c1f18b869926c"
);

const customReportHits = ({ hits }) => hits.map((hit) => <Report hit={hit} />);

const VirtualRefinementList = connectRefinementList(() => null);
const EmployerHits = connectHits(customReportHits);

const Company = () => {
  const { id } = useParams();
  const [employerData, setEmployerData] = useState({});

  useEffect(() => {
    // fetch data from firebase
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
            display="grid"
            mt="50px"
            py="50px"
            px="100px"
            gridTemplateColumns="repeat(auto-fit, minmax(400px, 600px))"
            gridColumnGap="40px"
            gridRowGap={5}
            maxWidth="100%"
            justifyContent="center"
          >
            <EmployerHits />
          </Box>
        </InstantSearch>
      </Box>
    </>
  );
};

export default Company;
