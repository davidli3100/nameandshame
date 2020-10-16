import React from "react";
import { Box } from "@chakra-ui/core";
import Report from "../Report";

const Reports = () => (
    <Box
        display="grid"
        mt="50px"
        py="50px"
        px="5vw"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gridColumnGap="40px"
        gridRowGap={5}
        maxWidth="100%"
        justifyContent="center"
    >
        <Report
            title="Title of anonymous report being submitted to NameandShame"
            date="Sept 20, 2020"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."
        />
        <Report
            title="Title of anonymous report being submitted to NameandShame"
            date="Sept 20, 2020"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."
        />
    </Box>
);

export default Reports;
