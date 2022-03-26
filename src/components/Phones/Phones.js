import './Phones.css';
import React from 'react';
import Phone from '../Phone/Phone';
import PhoneSelection from '../PhoneSelection/PhoneSelection';

const Phones = () => {
    return (
        <div>
            <h2>This is phone section</h2>
            <Phone></Phone>
            <PhoneSelection></PhoneSelection>
        </div>
    );
};

export default Phones;