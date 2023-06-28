import React from "react";

function GenderOptions({ inputData, handleData }) {
  return (
    <label> Gender :
      <div value={inputData.gender} onChange={handleData}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    </label>
  );
}

export default GenderOptions