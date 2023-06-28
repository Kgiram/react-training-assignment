import React, { useState } from "react";
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  

function CustomDate() {
    const [startDate, setStartDate] = useState(new Date());  

    return (  
        <label>Birthdate:
        <DatePicker selected={startDate} 
        name='birthdate'
        onChange={(Date) => setStartDate(Date)} />
       </label>   
    );  
}

export default CustomDate