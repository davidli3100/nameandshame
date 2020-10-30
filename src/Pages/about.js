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
                We strive to make the world a better place by eliminating
                harassment of all forms in the workplace, together.
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
                Harassment is a serious problem in the workplace. Whether its
                because of race, sex, or sexual orientation, there is no place
                for it in the world. By making these incidents public and
                accessibly we hope to raise awareness to the matter and inform
                future employees of the atmosphere of their future job.
                Together, we can end create an environment everyone can feel
                safe and succeed in.
            </Text>
        </Box>
    </Box>
);

export default About;
