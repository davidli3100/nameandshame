import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/core";

const Stat = ({ stat, text }) => (
    <Box
        textAlign="center"
        my={["25px", "25px", "0px", "0px"]}
        width={["100%", "100%", "200px", "400px"]}
    >
        <Heading color="blue.900" size="2xl">
            {stat}
        </Heading>
        <Heading size="lg" color="blueGray.500" fontWeight="600">
            {text}
        </Heading>
    </Box>
);
const About = () => (
    <Box>
        <Box
            width="100%"
            py="75px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px={["20px", "50px", "10vw", null]}
        >
            <Heading color="blue.900" size="2xl">
                About Us
            </Heading>
            <Text
                color="blueGray.800"
                fontSize="xl"
                fontWeight="600"
                mt="25px"
                maxWidth="1000px"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button variantColor="primary" my="50px">
                <a href="/">Browse Companies</a>
            </Button>
        </Box>
        <Box
            display="flex"
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="space-evenly"
            backgroundColor="rgba(0, 132, 244, 0.05)"
            px="10vw"
            py="75px"
        >
            <Stat stat="100+" text="Companies Indexed" />
            <Stat stat="50,000+" text="Reports Filed" />
            <Stat stat="200+" text="Daily Reports" />
        </Box>
        <Box px="10vw" py="75px">
            <Heading textAlign="center" color="blue.900">
                Our Mission
            </Heading>
            <Text color="blueGray.500" fontSize="lg" my="50px" fontWeight="500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </Box>
    </Box>
);

export default About;
