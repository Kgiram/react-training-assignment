import './styles.css'
import { useSelector } from "react-redux";
import { store } from "../store/store";
import cancel from "./cancel.png"
import { deleteReminder } from "../store/reminderReducer";

const Reminders = () => {

    const reminders = useSelector((state) => state.reminderReducer);

    const handleDelete = (reminder) => {
        store.dispatch(deleteReminder(reminder));
    }

    return (
        <div >
            <div className="reminders">
                <div className="reminders-header">
                    Upcoming Reminders
                </div>

                <div className="row">
                    {
                        reminders.map((reminder) => {
                            return (
                                <div className="column">
                                    <div className="card">
                                        <img src={cancel} className="delete" onClick={() => handleDelete(reminder)} />
                                        Reminder:  {reminder.text} <br></br>
                                        Due Date: {reminder.date.getDate() + "-" + parseInt(reminder.date.getMonth() + 1) + "-" + reminder.date.getFullYear()} <br></br>
                                        Time: {reminder.date.getHours() + ":" + reminder.date.getMinutes()}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Reminders;