import React from "react";
import {
    Box,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Textarea,
    Button,
    FormHelperText,
    InputLeftElement,
    InputGroup,
} from "@chakra-ui/core";

const Report = () => (
    <Box px={["20px", "50px", "10vw", null]} py="50px">
        <Heading color="blue.900">Submit a Report</Heading>
        <Box
            mt="50px"
            display="grid"
            gridTemplateColumns={[
                "repeat(auto-fit, minmax(280px, 1fr))",
                null,
                "repeat(auto-fit, minmax(400px, 1fr))",
                null,
            ]}
            gridColumnGap={5}
            gridRowGap={5}
        >
            <Box>
                <FormControl>
                    <FormLabel htmlFor="employer">
                        <Heading color="blue.900" size="sm">
                            Employer
                        </Heading>
                    </FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            children={
                                <Box width="18px" height="18px">
                                    <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        stroke="#829AB1"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </Box>
                            }
                        />
                        <Input placeholder="ACME Inc." id="employer" />
                    </InputGroup>
                    <FormLabel htmlFor="tags" mt="20px">
                        <Heading color="blue.900" size="sm">
                            Tags
                        </Heading>
                    </FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            children={
                                <Box width="18px" height="18px">
                                    <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        stroke="#829AB1"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                        ></path>
                                    </svg>
                                </Box>
                            }
                        />
                        <Input placeholder="Racism" id="tags" />
                    </InputGroup>
                    <FormLabel htmlFor="description" mt="20px">
                        <Heading color="blue.900" size="sm">
                            Description of Incident(s)
                        </Heading>
                    </FormLabel>
                    <Textarea height="200px" />
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel htmlFor="title">
                        <Heading color="blue.900" size="sm">
                            Employer
                        </Heading>
                    </FormLabel>
                    <Input placeholder="Title" id="title" />
                    <FormLabel htmlFor="date" mt="20px">
                        <Heading color="blue.900" size="sm">
                            Date of Incident
                        </Heading>
                    </FormLabel>
                    <Input
                        placeholder="Date"
                        id="date"
                        aria-describedby="date-helper"
                    />
                    <FormHelperText id="date-helper">
                        When did the incident that you are reporting occur?
                    </FormHelperText>
                </FormControl>
            </Box>
        </Box>
        <Button variantColor="primary" mt="20px">
            Submit
        </Button>
    </Box>
);

export default Report;
