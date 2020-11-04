import React, { useEffect, useState } from "react";
import Select from "react-select";
import { connectAutoComplete } from "react-instantsearch-dom";
import { useHistory } from "react-router-dom";

const EmployerAutocomplete = ({ hits, refine, selectStyles, setState }) => {
    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable
            onInputChange={(newValue, actionMeta) => refine(newValue)}
            onChange={(value) => setState(value)}
            name="color"
            options={hits.map((hit) => ({
                label: hit.name,
                value: hit.objectID,
            }))}
            styles={selectStyles}
        />
    );
};

export default connectAutoComplete(EmployerAutocomplete);
