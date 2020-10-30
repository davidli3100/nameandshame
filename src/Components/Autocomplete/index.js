import React from "react";
import Select from "react-select";
import { connectAutoComplete } from "react-instantsearch-dom";

const EmployerAutocomplete = ({ hits, refine, selectStyles }) => (
    <Select
        className="basic-single"
        classNamePrefix="select"
        isSearchable
        onInputChange={(newValue, actionMeta) => refine(newValue)}
        name="color"
        options={hits.map((hit) => ({ label: hit.name, value: hit.objectID }))}
        styles={selectStyles}
    />
);

export default connectAutoComplete(EmployerAutocomplete);
