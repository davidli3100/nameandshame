import React from "react";
import CreatableSelect from "react-select/creatable";
import { connectAutoComplete } from "react-instantsearch-dom";
import { useHistory } from "react-router-dom";

const EmployerAutocomplete = ({ hits, refine, selectStyles, setState }) => {
    const history = useHistory();

    const handleCreate = (value) => {
        history.push(`/add/employer/${value}`);
    };
    return (
        <CreatableSelect
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
            onCreateOption={handleCreate}
        />
    );
};

export default connectAutoComplete(EmployerAutocomplete);
