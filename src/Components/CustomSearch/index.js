import React from "react";
import { Box } from "@chakra-ui/core";
import { SearchBox } from "react-instantsearch-dom";

const CustomSearch = () => (
    <SearchBox
        translations={{
            placeholder: "Search",
        }}
        submit={
            <Box ml="6px" width="14px" height="14px">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#829AB1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </Box>
        }
        reset={
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="#829AB1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        }
    />
);

export default CustomSearch;
