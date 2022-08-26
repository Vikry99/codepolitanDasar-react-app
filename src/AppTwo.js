import React from "react";
import { useState } from "react";

const MainComponent = () => {
    const [value, setValue] = useState(0);
  
    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");
  
    const handleChange = event =>
      setValue(addCommas(removeNonNumeric(event.target.value)));
  
    return (
      <div>
        <input type="text" value={value} onInput={handleChange} />
      </div>
    );
  };


  export default MainComponent
  