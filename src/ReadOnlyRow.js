import React from 'react'; 

const ReadOnlyRow = ({detail, handleEditClick}) => {
    return(
        <tr>
        <td>{detail.name} </td>
        <td>{detail.email} </td>
        <td>{detail.birthdate} </td>
        <td>{detail.gender} </td>
        <td>{detail.education} </td>
        <td>
            <button type='button' onClick={(event)=> handleEditClick(event, detail)}>Edit</button>
        </td>
    </tr>
    );
}

export default ReadOnlyRow;