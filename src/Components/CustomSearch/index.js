import React from "react";
import { SearchBox } from "react-instantsearch-dom";

const CustomSearch = () => (
  <SearchBox
    translations={{
      placeholder: 'Search'
    }}
    submit={
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
