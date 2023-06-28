import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import './App.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App(){
    return (
        <Form />   
    );
}

root.render(<App/>);