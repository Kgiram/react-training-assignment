import React, { useState, Fragment } from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditRow from './EditRow'

const Table = ({ details, setDetails }) => {
    const [editInputData, setEditInputData] = useState({
        name: "",
        email: "",
        birthdate: "",
        gender: "",
        education: "",
        password: ""
    })
    const [editDetailId, setEditDetailId] = useState(null);
    const { name, email, birthdate, gender, education, password } = editInputData

    const handleEditFormData = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = { ...editInputData };
        newFormData[fieldName] = fieldValue;
        setEditInputData(newFormData);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedDetail = {
            id: editDetailId,
            name: name,
            email: email,
            birthdate: birthdate,
            gender: gender,
            education: education,
            password: password
        };
        const newDetails = [...details];
        const index = details.findIndex((detail) => detail.id === editDetailId);
        newDetails[index] = editedDetail;
        setDetails(newDetails);
        setEditDetailId(null);
    };

    const handleEditClick = (event, detail) => {
        event.preventDefault();
        setEditDetailId(detail.id);
        const formValues = {
            name: detail.name,
            email: detail.email,
            birthdate: detail.birthdate,
            gender: detail.gender,
            education: detail.education,
            password: detail.password
        }
        setEditInputData(formValues);
    }

    const handleCancelClick = () => {
        setEditDetailId(null);
    }
    return (
        <form onSubmit={handleEditFormSubmit}>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthdate</th>
                        <th>Gender</th>
                        <th>Level Of Education</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail) => (
                        <Fragment>
                            {editDetailId === detail.id ? (
                                <EditRow
                                    editInputData={editInputData}
                                    handleEditFormData={handleEditFormData}
                                    handleCancelClick={handleCancelClick}
                                />
                            ) : (
                                <ReadOnlyRow
                                    detail={detail}
                                    handleEditClick={handleEditClick} />
                            )}
                        </Fragment>
                    ))}

                </tbody>
            </table>
        </form>
    )
}

export default Table;