import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditRow = ({ editInputData, handleEditFormData , handleCancelClick}) => {
  const [startDate] = useState(new Date());
  const { name, email, birthdate, gender, education } = editInputData

  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter a name...'
          name='name'
          value={name}
          onChange={handleEditFormData}>
        </input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter a email...'
          name='email'
          value={email}
          onChange={handleEditFormData}>
        </input>
      </td>
      <td>
        <DatePicker selected={startDate} name='birthdate'
          value={birthdate}
          onChange={handleEditFormData} />
      </td>
      <td>
        <div onChange={handleEditFormData}  value={gender} >
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
      </td>
      <td>
        <div onChange={handleEditFormData}  value={education}>
          <select name="education" >
            <option value="ssc">SSC</option>
            <option value="hsc">HSC</option>
            <option value="graduation">Graduation</option>
            <option value="postgraduation">Post Graduation</option>
          </select>
        </div>
      </td>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}

export default EditRow;