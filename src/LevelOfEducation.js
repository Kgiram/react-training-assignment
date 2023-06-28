import React from "react";

function LevelOfEducation({inputData,handleData}) {
return(
<label>
     Level Of Education: 
      <select value={inputData.education} name="education" onChange={handleData}>
        <option value="ssc" name="education">SSC</option>
        <option value="hsc" name="education">HSC</option>
        <option value="graduation" name="education">Graduation</option>
        <option value="postgraduation" name="education">Post Graduation</option>
      </select>
    </label>
);
}

export default LevelOfEducation