import React, {useState} from "react";
import apiList from '../apiList.js';

function FilterButton (props) {
    const [apiKey, setApiKey] = React.useState(props.id);
    const onClick = () => {
        console.log(apiList)
    }
    return (
        <button 
        onClick= {onClick}
        >
        {props.filterName}
        </button> 
    
    )
}

export default FilterButton;
 