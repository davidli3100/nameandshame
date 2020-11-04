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
import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/functions";

const tagOptions = [
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
    const functions = firebase.functions();
    const db = firebase.firestore();
    const submit = () => {
        // Make sure all fields are filled
        if (employer === "" || title === "" || description === "" || !date) {
            toast({
                title: "Missing Fields",
                description: "You must fill out all fields!",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        db.collection("reports")
            .add({
                categories: tags.map((tag) => tag.label),
                date: date,
                description: description,
                employerRef: employer.value,
                title: title,
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        // fetch(
        //     "https://cors-anywhere.herokuapp.com/" +
        //         "https://us-central1-nameandshame-eedd0.cloudfunctions.net/addReport",
        //     {
        //         method: "post",
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             categories: tags.map((tag) => tag.label),
        //             date: date,
        //             description: description,
        //             employerRef: employer.value,
        //             title: title,
        //         }),
        //     }
        // )
        //     .then(function (data) {
        //         console.log("Request succeeded with JSON response", data);
        //     })
        //     .catch(function (error) {
        //         console.log("Request failed", error);
        //     });

        // const addReport = functions.httpsCallable("a");
        // const obj = console.log(obj);
        // addReport(obj)
        //     .then(function (result) {
        //         // Read result of the Cloud Function.
        //         var sanitizedMessage = result.data.text;
        //         console.log(sanitizedMessage);
        //     })
        //     .catch(function (error) {
        //         // Getting the Error details.
        //         var code = error.code;
        //         var message = error.message;
        //         var details = error.details;
        //         console.log(code);
        //         console.log(message);
        //         console.log(details);
        //     });
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
                                Employer
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
