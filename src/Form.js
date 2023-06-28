import React, { useState } from 'react';
import CustomDate from './CustomDate';
import GenderOptions from './GenderOptions';
import LevelOfEducation from './LevelOfEducation';
import mockData from './data.json';
import { nanoid } from 'nanoid';
import Table from './Table'

function Form() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        birthdate: "",
        gender: "",
        education: "",
        password: ""
    })
    const { name, email, birthdate, gender, education, password } = inputData
    const [details, setDetails] = useState(mockData);

    function handleData(e) {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = { ...inputData };
        newFormData[fieldName] = fieldValue;
        setInputData(newFormData);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newDetail = {
            id: nanoid(),
            name: name,
            email: email,
            birthdate: birthdate,
            gender: gender,
            education: education,
            password: password
        };
        const newDetails = [...details, newDetail];
        setDetails(newDetails);
    };

    return (
        <div className='app-container'>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter Your Name'
                        name='name' value={name} onChange={handleData} required='required' />

                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' placeholder='Enter Your Email' required='required'
                        name='email' value={email} onChange={handleData} />
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
                        name='password' value={password} onChange={handleData} />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
            <Table details={details} setDetails={setDetails}></Table>
        </div>
    )
}

export default Form