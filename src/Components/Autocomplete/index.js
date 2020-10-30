import React from "react";
import CreatableSelect from "react-select/creatable";
import { connectAutoComplete } from "react-instantsearch-dom";
import { useHistory } from "react-router-dom";

const EmployerAutocomplete = ({ hits, refine, selectStyles, prefilled }) => {
    let history = useHistory();

    const handleCreate = (value) => {
        history.push(`/add/employer/${value}`);
    };

    const defaultValue =
        prefilled &&
        hits
            .map((hit) => ({ label: hit.name, value: hit.objectID }))
            .filter((val) => val.value === prefilled)[0];

    if (defaultValue) {
        return (
            <CreatableSelect
                defaultValue={defaultValue}
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                onInputChange={(newValue, actionMeta) => refine(newValue)}
                name="color"
                options={hits.map((hit) => ({
                    label: hit.name,
                    value: hit.objectID,
                }))}
                styles={selectStyles}
                onCreateOption={handleCreate}
            />
        );
    } else {
        return <></>;
    }
};

export default connectAutoComplete(EmployerAutocomplete);
