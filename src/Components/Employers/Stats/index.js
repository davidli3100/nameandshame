import React from "react";
import { Box, Heading, Image } from "@chakra-ui/core";

const Stats = ({ logo, name, employees, reports, trend, mcr }) => (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="-50px"
        px="5vw"
    >
        <Image src={logo} size="100px" rounded="md" objectFit="contain" />
        <Heading color="black" size="lg" fontWeight="600" mt="30px">
            {name}
        </Heading>
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
            gridAutoFlow="row"
            gridColumnGap={5}
            gridRowGap={5}
            mt="50px"
            px="50px"
            width="100%"
            justifyContent="center"
        >
            <Box textAlign="left">
                <Heading color="blueGray.600" size="sm" fontWeight="600">
                    EMPLOYEES
                </Heading>
                <Heading size="sm" fontWeight="600">
                    {employees >= 10000 ? "10,000+" : employees}
                </Heading>
            </Box>
            <Box textAlign="left">
                <Heading color="blueGray.600" size="sm" fontWeight="600">
                    REPORTS
                </Heading>
                <Heading size="sm" fontWeight="600">
                    {reports}
                </Heading>
            </Box>
            <Box textAlign="left">
                <Heading color="blueGray.600" size="sm" fontWeight="600">
                    R/E
                </Heading>
                <Heading size="sm" fontWeight="600">
                    {(reports / employees).toFixed(3)}
                </Heading>
            </Box>
            <Box textAlign="left">
                <Heading color="blueGray.600" size="sm" fontWeight="600">
                    TREND (6M)
                </Heading>
                <Heading
                    size="sm"
                    fontWeight="600"
                    color={trend > 0 ? "red.500" : "blue.500"}
                >
                    {trend >= 0 ? "+" : "-"}
                    {trend}%
                </Heading>
            </Box>
            <Box textAlign="left">
                <Heading color="blueGray.600" size="sm" fontWeight="600">
                    MCR
                </Heading>
                <Heading size="sm" fontWeight="600">
                    {mcr}
                </Heading>
            </Box>
        </Box>
    </Box>
);

export default Stats;
