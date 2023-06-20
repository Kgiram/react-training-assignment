import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditRow = ({ editInputData, handleEditFormData , handleCancelClick}) => {
  const [startDate] = useState(new Date());

  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter a name...'
          name='name'
          value={editInputData.name}
          onChange={handleEditFormData}>
        </input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter a email...'
          name='email'
          value={editInputData.email}
          onChange={handleEditFormData}>
        </input>
      </td>
      <td>
        <DatePicker selected={startDate} name='birthdate'
          value={editInputData.birthdate}
          onChange={handleEditFormData} />
        {/* <CustomDate  value={editInputData.birthdate}
            onChange={handleEditFormData}/> */}
      </td>
      <td>
        <div onChange={handleEditFormData}  value={editInputData.gender} >
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
      </td>
      <td>
        <div onChange={handleEditFormData}  value={editInputData.education}>
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