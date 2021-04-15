import React, {useState} from "react";
import apiItems from './apiList';

export default function FilterButton() {
    const [apiToCall, setApiToCall] = useState("");
    
    return (
        <div>
           <button>Book</button> 
        </div>
    )
}


 