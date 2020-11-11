import React from 'react';

import '@progress/kendo-theme-default/dist/all.css';
import {DropDownList} from "@progress/kendo-react-dropdowns";
import languageList from "./Assets/languages_list.json";

const MyDropdownList = () => {
    return (

        <div>


            <DropDownList
                data={languageList}
                dataItemKey=""
                textField="name"
            />

        </div>
    );
};

export default MyDropdownList;
