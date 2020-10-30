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
} from "@chakra-ui/core";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "../Datepicker.css";
import Autocomplete from "../Components/Autocomplete";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import { useParams } from "react-router-dom";

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
            height: "40px",
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

const searchClient = algoliasearch(
    "FEQR412FHW",
    "1eeb94ee61382152f97c1f18b869926c"
);

const Report = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { id } = useParams();

    /**
     * What follows is not best practice
     * but we probably don't have the time to set up formik
     * or a similar form management library
     */
    const [employer, setEmployer] = useState();
    const [tags, setTags] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();

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
                        <InstantSearch
                            indexName="Employers"
                            searchClient={searchClient}
                        >
                            <Autocomplete selectStyles={tagStyles} />
                        </InstantSearch>
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
                        <Box id="date">
                            <DayPickerInput />
                        </Box>
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
