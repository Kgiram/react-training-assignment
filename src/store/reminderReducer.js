import { createSlice } from "@reduxjs/toolkit";

const reminderSlice = createSlice({
    name: "reminders",
    initialState: [],
    reducers: {
        addReminder: (state, action) => {
            state.push(action.payload);
        },
        deleteReminder: (state, action) => {
            for(let i=0; i<state.length; i++) {
                if(state[i].text == action.payload.text && state[i].date == action.payload.date) {
                    state.splice(i, 1);
                    break;
                }
            }
        
        }
    }
})

export const { addReminder, deleteReminder } = reminderSlice.actions;

export const reminderReducer = reminderSlice.reducer;