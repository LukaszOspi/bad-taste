import React, {useState} from "react";
import apiList from '../apiList.js';

function FilterButton (props) {
    const [apiKey, setApiKey] = useState(props);
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
 