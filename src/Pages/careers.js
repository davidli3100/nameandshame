import React from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    List,
    ListItem,
    Link,
    Icon,
} from "@chakra-ui/core";

const Careers = () => (
    <Box>
        <Box
            width="100%"
            py="150px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px={["20px", "50px", "10vw", null]}
        >
            <Heading color="blue.900" size="2xl">
                Join us at Name and Shame
            </Heading>
            <Text
                color="blueGray.800"
                fontSize="xl"
                fontWeight="600"
                mt="25px"
                maxWidth="1000px"
            >
                We're always looking for talented individuals to join the team.
                Together we make the world a better place.
            </Text>
            <Button variantColor="primary" my="50px">
                <a href="/about">About Us</a>
            </Button>
        </Box>
        <Box px="10vw" pb="75px">
            <Heading textAlign="center" color="blue.900">
                Current Position Openings
            </Heading>
            <Box mt="25px">
                <Heading textAlign="left" color="blue.900" size="lg">
                    Full Stack Software Engineer
                </Heading>
                <Text
                    color="blueGray.500"
                    fontSize="lg"
                    fontWeight="500"
                    my="10px"
                >
                    We are looking for talented software engineers to join our
                    team and help elevate our services and deliver the best
                    possible experience to our users. You'll be working in a
                    fast paced environment with like minded individuals like
                    yourself to achieve our vision here at Name and Shame.
                </Text>
                <Heading textAlign="left" color="blue.900" size="md" mt="25px">
                    What You'll Do
                </Heading>
                <List styleType="disc" my="10px">
                    <ListItem
                        color="blueGray.500"
                        fontSize="lg"
                        fontWeight="500"
                    >
                        Bring David a coffee once in a while
                    </ListItem>
                </List>
                <Heading textAlign="left" color="blue.900" size="md" mt="25px">
                    Qualifications
                </Heading>
                <List styleType="disc" my="10px">
                    <ListItem
                        color="blueGray.500"
                        fontSize="lg"
                        fontWeight="500"
                    >
                        Minimum Grandmaster (2200+) rating on DMOJ
                    </ListItem>
                    <ListItem
                        color="blueGray.500"
                        fontSize="lg"
                        fontWeight="500"
                    >
                        Obtain AC verdict on{" "}
                        <Link
                            href="https://dmoj.ca/problem/dpz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Frog 3 <Icon name="external-link" mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem
                        color="blueGray.500"
                        fontSize="lg"
                        fontWeight="500"
                    >
                        Must be React warlord
                    </ListItem>
                    <ListItem
                        color="blueGray.500"
                        fontSize="lg"
                        fontWeight="500"
                    >
                        Being able to do 1 push up is an asset
                    </ListItem>
                </List>
            </Box>
        </Box>
    </Box>
);

export default Careers;
