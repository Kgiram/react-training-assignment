import React, { useState, Fragment } from 'react';
import CustomDate from './CustomDate';
import GenderOptions from './GenderOptions';
import LevelOfEducation from './LevelOfEducation';
import mockData from './data.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import EditRow from './EditRow'

function Form() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        birthdate: "",
        gender: "",
        education: "",
        password: ""
    })

    const [editInputData, setEditInputData] = useState({
        name: "",
        email: "",
        birthdate: "",
        gender: "",
        education: "",
        password: ""
    })
    const [details, setDetails] = useState(mockData);
    const [editDetailId, setEditDetailId] = useState(null);

    function handleData(e) {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...inputData };
        newFormData[fieldName] = fieldValue;
        setInputData(newFormData);

        // setInputData(
        //     { ...inputData, [e.target.name]: e.target.value }
        // )
    }

    const handleEditFormData = (e) => {

        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editInputData };
        newFormData[fieldName] = fieldValue;
        setEditInputData(newFormData);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const newDetail = {
            id: nanoid(),
            name: inputData.name,
            email: inputData.email,
            birthdate: inputData.birthdate,
            gender: inputData.gender,
            education: inputData.education,
            password: inputData.password
        };
        const newDetails = [...details, newDetail];
        setDetails(newDetails);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedDetail = {
            id: editDetailId,
            name: editInputData.name,
            email: editInputData.email,
            birthdate: editInputData.birthdate,
            gender: editInputData.gender,
            education: editInputData.education,
            password: editInputData.password
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
        <div className='app-container'>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter Your Name'
                        name='name' value={inputData.name} onChange={handleData} required='required' />
                    
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' placeholder='Enter Your Email' required='required'
                        name='email' value={inputData.email} onChange={handleData} />  
                </div>
                <div>
                    <CustomDate />
                </div>
                <div>
                    <GenderOptions inputData={inputData}
                        handleData={handleData} />
                </div>
                <div>
                    <LevelOfEducation inputData={inputData}
                        handleData={handleData} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='text' placeholder='Enter Your Password' required='required'
                        name='password' value={inputData.password} onChange={handleData} />    
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>

            </form>

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
        </div>
    )
}

export default Form