import { Box } from "@chakra-ui/core";
import React from "react";
import Banner from "../Components/Employers/Banner";
import Stats from "../Components/Employers/Stats";

const company = () => (
    <Box display="flex" flexDirection="column" justifyContent="center">
        <Banner source="https://d4qwptktddc5f.cloudfront.net/gensler-cocacola-03-mainlobby.jpg" />
        <Stats
            logo="https://upload.wikimedia.org/wikipedia/commons/c/cb/Coca_Cola_Logo.jpg"
            name="The Coca Cola Company"
            employees={20000}
            reports={392}
            trend={84}
            mcr="Racism"
        />
    </Box>
);

export default company;
