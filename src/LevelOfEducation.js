import React from "react";


function LevelOfEducation({inputData,handleData}) {
return(
<label>
     Level Of Education: 
      <select name="education" onChange={handleData}>
        <option value="ssc">SSC</option>
        <option value="hsc">HSC</option>
        <option value="graduation">Graduation</option>
        <option value="postgraduation">Post Graduation</option>
      </select>
    </label>
);
}

export default LevelOfEducation