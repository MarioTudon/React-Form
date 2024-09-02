import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const updateMessage = (e) => {
        setMessage(e.target.value);
    };

    const sendButton = (e) => {
        e.preventDefault();
        alert(`The following information was sent\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <>
            <form action="">
                <h2>Form</h2>
                <div className="input">
                    <label htmlFor="name"> Name </label>
                    <input required type="text" name="name" id="name" onChange={updateName} />
                </div>
                <div className="input">
                    <label htmlFor="email"> Email </label>
                    <input required type="email" name="email" id="email" onChange={updateEmail} />
                </div>
                <div className="input">
                    <label htmlFor="message"> Message </label>
                    <textarea required name="message" id="message" onChange={updateMessage} rows={1} maxLength={20}></textarea>
                </div>
                <button type="submit" onClick={sendButton}>Send</button>
            </form>
        </>
    );
};

root.render(<Form />);