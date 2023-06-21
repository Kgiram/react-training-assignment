import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { addReminder } from '../store/reminderReducer';
 import { store } from '../store/store';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'

const AddReminder = () => {
    const [date, setDate] = useState(new Date());
    const [reminderText, setReminderText] = useState("");
    const handleChange = (e) => {
        setReminderText(e.target.value);
        // setDate(e.target.value);
    }

    const handleSubmit = () => {
        const reminder = {
            text: reminderText,
            date: date
        }
        store.dispatch(addReminder(reminder))
        setReminderText("");
    }


    return (
        <div className="add-reminder">
            <div className="reminder-text">
                <TextField
                    id="outlined-multiline-static"
                    label="Reminder"
                    multiline
                    minRows={5}
                    variant="outlined"
                    placeholder="What's on your mind?"
                    value={reminderText}
                    onChange={handleChange}
                />
            </div>
            <div className="reminder-date">
                <DatePicker
                    showTimeSelect
                    minTime={new Date(0, 0, 0, 12, 30)}
                    maxTime={new Date(0, 0, 0, 19, 0)}
                    selected={date}
                    onChange={date => setDate(date)}
                    dateFormat="MMMM d, yyyy h:mmaa"
                    value={date}

                />
            </div>

            <div className="add-button">
                <input className="button" type="button" value="Add Reminder" onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default AddReminder;