import AddReminder from "./AddReminder";
import Reminders from "./Reminders";
import './styles.css'

const Dashboard = () => {
    return(
        <div>
            <div className="navbar"> 
                Reminder App
            </div>
            <div className="reminder-container">
            <AddReminder />
            <Reminders />
            </div>
          
        </div>
    )
}

export default Dashboard;