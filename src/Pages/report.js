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
    useToast,
} from "@chakra-ui/core";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "../Datepicker.css";
import Autocomplete from "../Components/Autocomplete";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import { useHistory } from "react-router-dom";

const tagOptions = [
    {
        value: "racism",
        label: "Racism",
    },
    {
        value: "sexism",
        label: "Sexism",
    },
    {
        value: "discrimination",
        label: "Discrimination",
    },
    {
        value: "toxic workplace",
        label: "Toxic lWorkplace",
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
    const toast = useToast();
    /**
     * What follows is not best practice
     * but we probably don't have the time to set up formik
     * or a similar form management library
     */
    const [tags, setTags] = useState(null);
    const [employer, setEmployer] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();

    const submit = () => {
        setIsSubmitting(true);

        // Make sure all fields are filled
        if (employer === "" || title === "" || description === "" || !date) {
            toast({
                title: "Missing Fields",
                description: "You must fill out all fields!",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            setIsSubmitting(false);
            return;
        }
        var requestHeaders = new Headers();
        requestHeaders.append("Content-Type", "application/json");

        var rawData = JSON.stringify({
            categories: tags.map((tag) => tag.label),
            date: date.getTime(),
            description: description,
            employerRef: employer.value,
            title: title,
        });

        var requestOptions = {
            method: "POST",
            headers: requestHeaders,
            body: rawData,
            redirect: "follow",
        };

        fetch(
            "https://us-central1-nameandshame-eedd0.cloudfunctions.net/addReport",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                setIsSubmitting(false);
                setTimeout(() => {
                    history.push(`/employer/${employer.value}`);
                }, 2000);
                toast({
                    title: "Report submitted",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                console.log(result);
            })
            .catch((error) => {
                setIsSubmitting(false);
                toast({
                    title: "Error submitting report",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                console.log("error", error);
            });
    };
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
                            <Autocomplete
                                selectStyles={tagStyles}
                                setState={setEmployer}
                            />
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
                            options={tagOptions}
                            onChange={setTags}
                            styles={tagStyles}
                            placeholder="Tags"
                        />
                        <FormLabel htmlFor="description" mt="20px">
                            <Heading color="blue.900" size="sm">
                                Description of Incident(s)
                            </Heading>
                        </FormLabel>
                        <Textarea
                            height="200px"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel htmlFor="title">
                            <Heading color="blue.900" size="sm">
                                Title
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="Title"
                            id="title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <FormLabel htmlFor="date" mt="20px">
                            <Heading color="blue.900" size="sm">
                                Date of Incident
                            </Heading>
                        </FormLabel>
                        <Box id="date">
                            <DayPickerInput
                                value={date}
                                onDayChange={(day) => setDate(day)}
                            />
                        </Box>
                        <FormHelperText id="date-helper">
                            When did the incident that you are reporting occur?
                        </FormHelperText>
                    </FormControl>
                </Box>
            </Box>
            <Button
                variantColor="primary"
                mt="20px"
                isLoading={isSubmitting}
                onClick={() => {
                    submit();
                }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default Report;
