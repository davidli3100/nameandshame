import React, { useState } from "react";
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
import Select from "react-select";
import makeAnimated from "react-select/animated";

const tags = [
    {
        value: "racism",
        label: "Racism",
    },
    {
        value: "sexism",
        label: "Sexism",
    },
];

const tagStyles = {
    control: (styles) => {
        return {
            ...styles,
            borderColor: "#D9E2EC",
            ":hover": {
                borderColor: "#CBD5E0",
            },
        };
    },
    multiValueLabel: (styles) => {
        return {
            ...styles,
            backgroundColor: "#DCEEFB",
            color: "#0F609B",
            fontWeight: "600",
        };
    },
    multiValueRemove: (styles) => {
        return {
            ...styles,
            backgroundColor: "#DCEEFB",
            ":hover": {
                backgroundColor: "#B6E0FE",
            },
        };
    },
    placeholder: (styles) => {
        return { color: "#9FB3C8" };
    },
};

const animatedComponents = makeAnimated();

const Report = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
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
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={tags}
                            onChange={setSelectedOption}
                            styles={tagStyles}
                            placeholder="Tags"
                        />
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
};

export default Report;
