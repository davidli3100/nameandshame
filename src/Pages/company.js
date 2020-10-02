import { Box } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import { useParams } from "react-router-dom";
import Banner from "../Components/Employers/Banner";
import Stats from "../Components/Employers/Stats";
import Reports from "../Components/Employers/Reports";

const Company = () => {
    const { id } = useParams();
    const [employerData, setEmployerData] = useState({});

    useEffect(async () => {
        // fetch data from firebase
        const firebaseDoc = await firebase
            .firestore()
            .collection("employers")
            .doc(id)
            .get();
        const data = firebaseDoc.data();
        setEmployerData(data);
        console.log(data);
    }, []);

    return (
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
            <Reports />
        </Box>
    );
};

export default Company;
