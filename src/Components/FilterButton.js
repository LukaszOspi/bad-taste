import React from "react";
import apiItems from '../apiList.js';

function FilterButton (props) {
    const onClick = () => {
        console.log(apiItems)
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
 